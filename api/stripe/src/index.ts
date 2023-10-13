import { Hono } from "hono"
import Stripe from "stripe"
import type { Context } from "hono"
import { cors } from "hono/cors"
import * as edgedb from "edgedb"

const app = new Hono()
app.use("*", cors())

app.onError((e, c) => {
  console.log(e.message)
  return c.text("Internal Sever Error", 500)
})

app.post("/learn-anything-bought", async (c: Context) => {
  const client = edgedb.createHttpClient({
    tlsSecurity: c.env.LOCAL ? "insecure" : "strict",
  })

  // console.log(c.env.LA_STRIPE_WEBHOOK_SECRET!, "key..")
  let event = c.req.body
  const stripe = new Stripe(c.env.LA_STRIPE_SECRET_KEY!, {
    apiVersion: "2023-08-16",
    typescript: true,
  })
  const endpointSecret = c.env.LA_STRIPE_WEBHOOK_SECRET!
  if (endpointSecret) {
    // Get the signature sent by Stripe
    const signature = c.req.header("stripe-signature")
    const textBody = await c.req.text()
    try {
      // @ts-ignore
      event = await stripe.webhooks.constructEventAsync(
        textBody,
        signature!,
        endpointSecret,
      )
    } catch (err) {
      // @ts-ignore
      console.log(`⚠️  Webhook signature verification failed.`, err.message)
      c.status(400)
      return c.json({ err: "failed" })
    }
  }

  // Handle the event
  // @ts-ignore
  switch (event.type) {
    case "checkout.session.completed":
      // @ts-ignore
      const checkoutSessionCompleted = event.data.object

      console.log(checkoutSessionCompleted, "completed")
      console.log(checkoutSessionCompleted.status, "status")
      if (checkoutSessionCompleted.status === "complete") {
        // const subscriptionType =
        //   checkoutSessionCompleted.metadata.subscriptionType.trim()

        console.log(checkoutSessionCompleted.metadata, "metadata")
        // const email = checkoutSessionCompleted.metadata.userEmail.trim()
        const email = ""
        console.log(email, "email")

        const subscription = await stripe.subscriptions.retrieve(
          checkoutSessionCompleted.subscription,
        )
        console.log(checkoutSessionCompleted.subscription, "VALUE")
        const endDateInUnix = subscription.current_period_end
        console.log(endDateInUnix, "end date in unix!")

        const timestamp = 1699887786
        const iso8601_format = new Date(timestamp * 1000).toISOString()

        const res = await client.querySingle(`
          update User {
            memberUntil: <datetime>${iso8601_format}
          } filter .email = ${email}
        `)
        console.log(res, "res")
        return
      }
      break
    case "customer.subscription.updated":
      // @ts-ignore
      let customerSubscriptionUpdated = event.data.object

    // TODO: check if subscription is canceled or something
    // TODO: log it
    // const sessions = await stripe.checkout.sessions.list({
    //   subscription: customerSubscriptionUpdated.ID,
    // })
    default:
      // Unexpected event type
      // TODO: log?
      // @ts-ignore
      console.log(`Unhandled event type ${event.type}.`)
  }
  return c.json({})
})

export default app
