import { Resolver } from "@grafbase/generated"
import { GraphQLError } from "graphql"
import { addPersonalLink } from "../edgedb/crud/global-link"
import { hankoIdFromToken } from "../lib/hanko-validate"

const addPersonalLinkResolver: Resolver["Mutation.addPersonalLink"] = async (
  parent,
  args,
  context,
  info
) => {
  try {
    const hankoId = await hankoIdFromToken(context)
    if (hankoId) {
      await addPersonalLink(args.url, args.title, hankoId, args.description)
      return "ok"
    } else {
      throw new GraphQLError("Missing or invalid Authorization header")
    }
  } catch (error) {
    console.log(error)
    throw new GraphQLError(JSON.stringify(error))
  }
}

export default addPersonalLinkResolver
