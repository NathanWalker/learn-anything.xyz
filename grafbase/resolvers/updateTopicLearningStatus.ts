import { Resolver } from "@grafbase/generated"
import { GraphQLError } from "graphql"
import { updateTopicLearningStatus } from "../edgedb/crud/global-topic"
import { hankoIdFromToken } from "../lib/hanko-validate"

const updateTopicLearningStatusResolver: Resolver["Mutation.updateTopicLearningStatus"] =
  async (parent, args, context, info) => {
    try {
      const hankoId = await hankoIdFromToken(context)
      if (hankoId) {
        if (args.verifiedTopic) {
          const res = await updateTopicLearningStatus(
            hankoId,
            args.topicName,
            args.learningStatus
          )
          if (res === null) {
            // TODO: should be more descriptive error
            // need to update the edgedb-js query for that
            throw new GraphQLError("cannot-update-topic-learning-status")
          }
          return "ok"
        } else {
          const res = await updateTopicLearningStatus(
            hankoId,
            args.topicName,
            args.learningStatus,
            true
          )
          if (res === null) {
            throw new GraphQLError("cannot-update-topic-learning-status")
          }
          return "ok"
        }
      } else {
        throw new GraphQLError("Missing or invalid Authorization header")
      }
    } catch (err) {
      console.error(err, "error")
      throw new GraphQLError(JSON.stringify(err))
    }
  }

export default updateTopicLearningStatusResolver
