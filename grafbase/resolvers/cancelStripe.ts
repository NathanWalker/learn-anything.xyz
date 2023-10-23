import Stripe from "stripe"
import { hankoIdFromToken } from "../lib/hanko-validate"
import { Context } from "@grafbase/sdk"
import { GraphQLError } from "graphql"
import { updateUserStoppedSubscription } from "../edgedb/crud/user"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-08-16",
  typescript: true
})

export default async function cancelStripeResolver(
  root: any,
  args: {},
  context: Context
) {
  const hankoId = await hankoIdFromToken(context)
  if (hankoId) {
    try {
      const stripeSubscriptionObjectId =
        await updateUserStoppedSubscription(hankoId)
      await stripe.subscriptions.update(
        // @ts-ignore
        stripeSubscriptionObjectId?.stripeSubscriptionObjectId,
        {
          cancel_at_period_end: true
        }
      )
      return "ok"
    } catch (error) {
      throw new GraphQLError(JSON.stringify(error))
    }
  }
}
