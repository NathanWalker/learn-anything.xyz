export const grafbaseTypeDefs = `
type CompletedLink {
  id: String!
  title: String!
  url: String!
}
type GlobalLink {
  id: String!
  title: String!
  url: String!
  year: String
  protocol: String!
  description: String
}
type LikedLink {
  id: String!
  title: String!
  url: String!
}
type Mutation {
  createUser(email: String!): String!
  updateTopicOfWiki(topicName: String!, prettyName: String!, content: String!, published: Boolean!): String!
  createProduct(name: String!, description: String, imageUrl: String, websiteUrl: String, priceInUsdCents: Int): String!
  deletePersonalLink(personalLinkId: String!): String!
  updateTopicLearningStatus(learningStatus: learningStatus!, topicName: String!, verifiedTopic: Boolean!): String!
  updateLinkStatusResolver(linkId: String!, action: linkAction!): String!
  updateGlobalLinkStatus(action: globalLinkAction!, globalLinkId: String!): String!
  addPersonalLink(title: String!, url: String!, description: String): String!
  cancelStripe: String!
  renewStripe: String!
  updateStripePlan: String!
  internalUpdateMemberUntilOfUser(email: String!, memberUntilDateInUnixTime: Int!, stripeSubscriptionObjectId: String!, stripePlan: String!): String!
  internalUpdateGrafbaseKv(topicsWithConnections: [updateGrafbaseKvOutput!]!): String!
  internalUpdateLatestGlobalGuide(topicName: String!, topicSummary: String!, sections: [section!]!): String!
  internalAddGlobalLinkToSection(linkUrl: String!, topicName: String!, sectionName: String!): String!
}
type PersonalLink {
  id: String!
  title: String!
  url: String!
}
type Query {
  publicGetTopicsWithConnections: [publicGetTopicsWithConnectionsOutput!]!
  publicGetGlobalTopics: [publicGetGlobalTopicsOutput!]!
  publicGetGlobalTopic(topicName: String!): publicGetGlobalTopicOutput!
  getUserDetails: getUserDetailsOutput!
  getPricingUserDetails: getPricingUserDetailsOutput!
  getNotesForGlobalTopic(topicName: String!): [globalNote!]!
  getLikedLinks: outputOfGetLikedLinks!
  getTopicsLearned: getTopicsLearnedOutput!
  getGlobalLink(linkId: String!): publicGetGlobalLinkOutput!
  getGlobalTopic(topicName: String!): getGlobalTopicOutput!
  getGlobalTopicLearningStatus(topicName: String!): String!
  getGlobalLinks: getGlobalLinksOutput!
  checkUrl(linkUrl: String!): String!
  getStripeDashboard: String!
  stripe(plan: String!, userEmail: String!): String!
}
type getGlobalLinksOutput {
  id: String!
  title: String!
  url: String!
}
type getGlobalTopicOutput {
  learningStatus: learningStatus!
  likedLinkIds: [String!]!
  completedLinkIds: [String!]!
}
type getPricingUserDetailsOutput {
  stripePlan: String
  memberUntil: String
  subscriptionStopped: Boolean
}
type getTopicsLearnedOutput {
  topicsToLearn: [topicToLearn!]!
  topicsLearning: [topicToLearn!]!
  topicsLearned: [topicToLearn!]!
}
type getUserDetailsOutput {
  isMember: Boolean!
}
type globalGuideSection {
  title: String!
  summary: String
  links: [GlobalLink!]!
}
type globalNote {
  content: String!
  url: String
}
type latestGlobalGuide {
  summary: String!
  sections: [globalGuideSection!]!
}
type outputOfGetLikedLinks {
  likedLinks: [LikedLink!]!
  completedLinks: [CompletedLink!]!
  personalLinks: [PersonalLink!]!
}
type publicGetGlobalLinkOutput {
  title: String!
  url: String!
  verified: Boolean!
  public: Boolean!
  protocol: String!
  fullUrl: String
  description: String
  urlTitle: String
  year: String
}
type publicGetGlobalTopicOutput {
  prettyName: String!
  topicSummary: String!
  latestGlobalGuide: latestGlobalGuide
  links: [GlobalLink!]!
  notesCount: Int!
}
type publicGetGlobalTopicsOutput {
  prettyName: String!
  name: String!
}
type publicGetTopicsWithConnectionsOutput {
  name: String!
  prettyName: String!
  connections: [String!]!
}
type topicToLearn {
  name: String!
  prettyName: String!
  verified: Boolean!
}
enum globalLinkAction {
  like
  unlike
  complete
  uncomplete
}
enum learningStatus {
  to_learn
  learning
  learned
  none
}
enum linkAction {
  like
  unlike
  complete
  uncomplete
}
input section {
  title: String!
  summary: String
  linkIds: [String!]!
}
input updateGrafbaseKvOutput {
  name: String!
  prettyName: String!
  connections: [String!]!
}
`