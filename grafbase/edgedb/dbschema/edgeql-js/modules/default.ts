// GENERATED by @edgedb/generate v0.4.1

import * as $ from "../reflection";
import * as _ from "../imports";
import type * as _std from "./std";
export type $GlobalGraphλShape = $.typeutil.flatten<_std.$Object_d29c95e25d6b11eeabaf012dd32b5eadλShape & {
  "connections": $.PropertyDesc<_std.$json, $.Cardinality.One, false, false, false, false>;
}>;
type $GlobalGraph = $.ObjectType<"default::GlobalGraph", $GlobalGraphλShape, null, [
  ..._std.$Object_d29c95e25d6b11eeabaf012dd32b5ead['__exclusives__'],
]>;
const $GlobalGraph = $.makeType<$GlobalGraph>(_.spec, "f7d3ef02-45e2-11ee-9604-c73b537dd54c", _.syntax.literal);

const GlobalGraph: $.$expr_PathNode<$.TypeSet<$GlobalGraph, $.Cardinality.Many>, null> = _.syntax.$PathNode($.$toSet($GlobalGraph, $.Cardinality.Many), null);

export type $GlobalGuideλShape = $.typeutil.flatten<_std.$Object_d29c95e25d6b11eeabaf012dd32b5eadλShape & {
  "created_at": $.PropertyDesc<_std.$datetime, $.Cardinality.One, false, false, true, true>;
  "sections": $.LinkDesc<$GlobalGuideSection, $.Cardinality.Many, {}, false, false,  false, false>;
  "<globalGuides[is GlobalTopic]": $.LinkDesc<$GlobalTopic, $.Cardinality.Many, {}, false, false,  false, false>;
  "<latestGlobalGuide[is GlobalTopic]": $.LinkDesc<$GlobalTopic, $.Cardinality.Many, {}, false, false,  false, false>;
  "<globalGuides": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
  "<latestGlobalGuide": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
}>;
type $GlobalGuide = $.ObjectType<"default::GlobalGuide", $GlobalGuideλShape, null, [
  ..._std.$Object_d29c95e25d6b11eeabaf012dd32b5ead['__exclusives__'],
]>;
const $GlobalGuide = $.makeType<$GlobalGuide>(_.spec, "f7d57814-45e2-11ee-bd07-51316c33895f", _.syntax.literal);

const GlobalGuide: $.$expr_PathNode<$.TypeSet<$GlobalGuide, $.Cardinality.Many>, null> = _.syntax.$PathNode($.$toSet($GlobalGuide, $.Cardinality.Many), null);

export type $GlobalGuideSectionλShape = $.typeutil.flatten<_std.$Object_d29c95e25d6b11eeabaf012dd32b5eadλShape & {
  "title": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "links": $.LinkDesc<$GlobalLink, $.Cardinality.Many, {
    "@order": $.PropertyDesc<_std.$int16, $.Cardinality.AtMostOne>;
  }, false, false, false, false>;
  "summary": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "<sections[is GlobalGuide]": $.LinkDesc<$GlobalGuide, $.Cardinality.Many, {}, false, false,  false, false>;
  "<sections": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
}>;
type $GlobalGuideSection = $.ObjectType<"default::GlobalGuideSection", $GlobalGuideSectionλShape, null, [
  ..._std.$Object_d29c95e25d6b11eeabaf012dd32b5ead['__exclusives__'],
]>;
const $GlobalGuideSection = $.makeType<$GlobalGuideSection>(_.spec, "f7fe826c-45e2-11ee-8178-43dbd533c525", _.syntax.literal);

const GlobalGuideSection: $.$expr_PathNode<$.TypeSet<$GlobalGuideSection, $.Cardinality.Many>, null> = _.syntax.$PathNode($.$toSet($GlobalGuideSection, $.Cardinality.Many), null);

export type $GlobalLinkλShape = $.typeutil.flatten<_std.$Object_d29c95e25d6b11eeabaf012dd32b5eadλShape & {
  "mainTopic": $.LinkDesc<$GlobalTopic, $.Cardinality.AtMostOne, {}, false, false,  false, false>;
  "relatedLinks": $.LinkDesc<$RelatedLink, $.Cardinality.Many, {}, false, false,  false, false>;
  "description": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "fullUrl": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "public": $.PropertyDesc<_std.$bool, $.Cardinality.One, false, false, false, false>;
  "title": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "url": $.PropertyDesc<_std.$str, $.Cardinality.One, true, false, false, false>;
  "urlTitle": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "verified": $.PropertyDesc<_std.$bool, $.Cardinality.One, false, false, false, false>;
  "year": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "links": $.LinkDesc<$Link, $.Cardinality.Many, {}, false, true,  false, false>;
  "protocol": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "<links[is GlobalGuideSection]": $.LinkDesc<$GlobalGuideSection, $.Cardinality.Many, {}, false, false,  false, false>;
  "<globalLink[is Link]": $.LinkDesc<$Link, $.Cardinality.Many, {}, false, false,  false, false>;
  "<linksBookmarked[is User]": $.LinkDesc<$User, $.Cardinality.Many, {}, false, false,  false, false>;
  "<dislikedLinks[is User]": $.LinkDesc<$User, $.Cardinality.Many, {}, false, false,  false, false>;
  "<links[is UserGuideSection]": $.LinkDesc<$UserGuideSection, $.Cardinality.Many, {}, false, false,  false, false>;
  "<relatedLinks[is GlobalTopic]": $.LinkDesc<$GlobalTopic, $.Cardinality.Many, {}, false, false,  false, false>;
  "<linksInProgress[is User]": $.LinkDesc<$User, $.Cardinality.Many, {}, false, false,  false, false>;
  "<linksLiked[is User]": $.LinkDesc<$User, $.Cardinality.Many, {}, false, false,  false, false>;
  "<linksCompleted[is User]": $.LinkDesc<$User, $.Cardinality.Many, {}, false, false,  false, false>;
  "<dislikedLinks": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
  "<globalLink": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
  "<links": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
  "<linksBookmarked": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
  "<linksCompleted": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
  "<linksInProgress": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
  "<linksLiked": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
  "<relatedLinks": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
}>;
type $GlobalLink = $.ObjectType<"default::GlobalLink", $GlobalLinkλShape, null, [
  ..._std.$Object_d29c95e25d6b11eeabaf012dd32b5ead['__exclusives__'],
  {url: {__element__: _std.$str, __cardinality__: $.Cardinality.One | $.Cardinality.AtMostOne },},
]>;
const $GlobalLink = $.makeType<$GlobalLink>(_.spec, "f8021211-45e2-11ee-9396-9f99634fa505", _.syntax.literal);

const GlobalLink: $.$expr_PathNode<$.TypeSet<$GlobalLink, $.Cardinality.Many>, null> = _.syntax.$PathNode($.$toSet($GlobalLink, $.Cardinality.Many), null);

export type $GlobalNoteλShape = $.typeutil.flatten<_std.$Object_d29c95e25d6b11eeabaf012dd32b5eadλShape & {
  "mainTopic": $.LinkDesc<$GlobalTopic, $.Cardinality.AtMostOne, {}, false, false,  false, false>;
  "content": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "url": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
}>;
type $GlobalNote = $.ObjectType<"default::GlobalNote", $GlobalNoteλShape, null, [
  ..._std.$Object_d29c95e25d6b11eeabaf012dd32b5ead['__exclusives__'],
]>;
const $GlobalNote = $.makeType<$GlobalNote>(_.spec, "6cc443aa-6adb-11ee-adeb-e77b7e40cbb1", _.syntax.literal);

const GlobalNote: $.$expr_PathNode<$.TypeSet<$GlobalNote, $.Cardinality.Many>, null> = _.syntax.$PathNode($.$toSet($GlobalNote, $.Cardinality.Many), null);

export type $GlobalTopicλShape = $.typeutil.flatten<_std.$Object_d29c95e25d6b11eeabaf012dd32b5eadλShape & {
  "globalGuides": $.LinkDesc<$GlobalGuide, $.Cardinality.Many, {}, false, false,  false, false>;
  "relatedTopics": $.LinkDesc<$GlobalTopic, $.Cardinality.Many, {}, false, false,  false, false>;
  "name": $.PropertyDesc<_std.$str, $.Cardinality.One, true, false, false, false>;
  "prettyName": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "public": $.PropertyDesc<_std.$bool, $.Cardinality.One, false, false, false, false>;
  "similarTopicsGraph": $.PropertyDesc<_std.$json, $.Cardinality.AtMostOne, false, false, false, false>;
  "topicPath": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "topicSummary": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "topicSummaryShort": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "relatedLinks": $.LinkDesc<$GlobalLink, $.Cardinality.Many, {}, false, false,  false, false>;
  "relatedNotes": $.LinkDesc<$Note, $.Cardinality.Many, {}, false, false,  false, false>;
  "verified": $.PropertyDesc<_std.$bool, $.Cardinality.One, false, false, false, false>;
  "latestGlobalGuide": $.LinkDesc<$GlobalGuide, $.Cardinality.AtMostOne, {}, false, false,  false, false>;
  "aiSummary": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "description": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "githubLink": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "redditLink": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "topicWebsiteLink": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "wikipediaLink": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "xLink": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "<relatedTopics[is GlobalTopic]": $.LinkDesc<$GlobalTopic, $.Cardinality.Many, {}, false, false,  false, false>;
  "<mainTopic[is GlobalLink]": $.LinkDesc<$GlobalLink, $.Cardinality.Many, {}, false, false,  false, false>;
  "<topicsLearned[is User]": $.LinkDesc<$User, $.Cardinality.Many, {}, false, false,  false, false>;
  "<topicsLearning[is User]": $.LinkDesc<$User, $.Cardinality.Many, {}, false, false,  false, false>;
  "<topicsModerated[is User]": $.LinkDesc<$User, $.Cardinality.Many, {}, false, false,  false, false>;
  "<topicsToLearn[is User]": $.LinkDesc<$User, $.Cardinality.Many, {}, false, false,  false, false>;
  "<globalTopic[is Topic]": $.LinkDesc<$Topic, $.Cardinality.Many, {}, false, false,  false, false>;
  "<globalTopic[is UserGuide]": $.LinkDesc<$UserGuide, $.Cardinality.Many, {}, false, false,  false, false>;
  "<mainTopic[is GlobalNote]": $.LinkDesc<$GlobalNote, $.Cardinality.Many, {}, false, false,  false, false>;
  "<globalTopic": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
  "<mainTopic": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
  "<relatedTopics": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
  "<topicsLearned": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
  "<topicsLearning": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
  "<topicsModerated": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
  "<topicsToLearn": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
}>;
type $GlobalTopic = $.ObjectType<"default::GlobalTopic", $GlobalTopicλShape, null, [
  ..._std.$Object_d29c95e25d6b11eeabaf012dd32b5ead['__exclusives__'],
  {name: {__element__: _std.$str, __cardinality__: $.Cardinality.One | $.Cardinality.AtMostOne },},
]>;
const $GlobalTopic = $.makeType<$GlobalTopic>(_.spec, "f7fb0b35-45e2-11ee-9e89-d34e1e773cc8", _.syntax.literal);

const GlobalTopic: $.$expr_PathNode<$.TypeSet<$GlobalTopic, $.Cardinality.Many>, null> = _.syntax.$PathNode($.$toSet($GlobalTopic, $.Cardinality.Many), null);

export type $LinkλShape = $.typeutil.flatten<_std.$Object_d29c95e25d6b11eeabaf012dd32b5eadλShape & {
  "globalLink": $.LinkDesc<$GlobalLink, $.Cardinality.AtMostOne, {}, false, false,  false, false>;
  "relatedLinks": $.LinkDesc<$RelatedLink, $.Cardinality.Many, {}, false, false,  false, false>;
  "author": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "description": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "public": $.PropertyDesc<_std.$bool, $.Cardinality.One, false, false, false, false>;
  "timeEstimate": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "title": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "type": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "url": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "urlTitle": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "year": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "topic": $.LinkDesc<$Topic, $.Cardinality.One, {}, false, false,  false, false>;
  "<links[is GlobalLink]": $.LinkDesc<$GlobalLink, $.Cardinality.Many, {}, false, false,  false, false>;
  "<links[is Topic]": $.LinkDesc<$Topic, $.Cardinality.Many, {}, false, false,  false, false>;
  "<links": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
}>;
type $Link = $.ObjectType<"default::Link", $LinkλShape, null, [
  ..._std.$Object_d29c95e25d6b11eeabaf012dd32b5ead['__exclusives__'],
]>;
const $Link = $.makeType<$Link>(_.spec, "f804e362-45e2-11ee-8975-635fdcd8c98b", _.syntax.literal);

const Link: $.$expr_PathNode<$.TypeSet<$Link, $.Cardinality.Many>, null> = _.syntax.$PathNode($.$toSet($Link, $.Cardinality.Many), null);

export type $NoteλShape = $.typeutil.flatten<_std.$Object_d29c95e25d6b11eeabaf012dd32b5eadλShape & {
  "additionalContent": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "content": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "public": $.PropertyDesc<_std.$bool, $.Cardinality.One, false, false, false, false>;
  "url": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "relatedTopics": $.LinkDesc<$Topic, $.Cardinality.Many, {}, false, false,  false, false>;
  "topic": $.LinkDesc<$Topic, $.Cardinality.One, {}, false, false,  false, false>;
  "<relatedNotes[is GlobalTopic]": $.LinkDesc<$GlobalTopic, $.Cardinality.Many, {}, false, false,  false, false>;
  "<notes[is Topic]": $.LinkDesc<$Topic, $.Cardinality.Many, {}, false, false,  false, false>;
  "<dislikedNotes[is User]": $.LinkDesc<$User, $.Cardinality.Many, {}, false, false,  false, false>;
  "<likedNotes[is User]": $.LinkDesc<$User, $.Cardinality.Many, {}, false, false,  false, false>;
  "<dislikedNotes": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
  "<likedNotes": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
  "<notes": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
  "<relatedNotes": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
}>;
type $Note = $.ObjectType<"default::Note", $NoteλShape, null, [
  ..._std.$Object_d29c95e25d6b11eeabaf012dd32b5ead['__exclusives__'],
]>;
const $Note = $.makeType<$Note>(_.spec, "f80ed565-45e2-11ee-abb6-39c0845797dd", _.syntax.literal);

const Note: $.$expr_PathNode<$.TypeSet<$Note, $.Cardinality.Many>, null> = _.syntax.$PathNode($.$toSet($Note, $.Cardinality.Many), null);

export type $PersonalWikiλShape = $.typeutil.flatten<_std.$Object_d29c95e25d6b11eeabaf012dd32b5eadλShape & {
  "user": $.LinkDesc<$User, $.Cardinality.One, {}, false, false,  false, false>;
  "topicGraph": $.PropertyDesc<_std.$json, $.Cardinality.AtMostOne, false, false, false, false>;
  "topicSidebar": $.PropertyDesc<_std.$json, $.Cardinality.AtMostOne, false, false, false, false>;
  "topics": $.LinkDesc<$Topic, $.Cardinality.Many, {}, false, true,  false, false>;
  "<wiki[is Topic]": $.LinkDesc<$Topic, $.Cardinality.Many, {}, false, false,  false, false>;
  "<wiki[is User]": $.LinkDesc<$User, $.Cardinality.Many, {}, false, false,  false, false>;
  "<wiki": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
}>;
type $PersonalWiki = $.ObjectType<"default::PersonalWiki", $PersonalWikiλShape, null, [
  ..._std.$Object_d29c95e25d6b11eeabaf012dd32b5ead['__exclusives__'],
]>;
const $PersonalWiki = $.makeType<$PersonalWiki>(_.spec, "f81a60b7-45e2-11ee-986b-2df5cba476b9", _.syntax.literal);

const PersonalWiki: $.$expr_PathNode<$.TypeSet<$PersonalWiki, $.Cardinality.Many>, null> = _.syntax.$PathNode($.$toSet($PersonalWiki, $.Cardinality.Many), null);

export type $ProductλShape = $.typeutil.flatten<_std.$Object_d29c95e25d6b11eeabaf012dd32b5eadλShape & {
  "description": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "imageUrl": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "name": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "websiteUrl": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "priceInUsdCents": $.PropertyDesc<_std.$int16, $.Cardinality.AtMostOne, false, false, false, false>;
  "<productsBought[is User]": $.LinkDesc<$User, $.Cardinality.Many, {}, false, false,  false, false>;
  "<productsSelling[is User]": $.LinkDesc<$User, $.Cardinality.Many, {}, false, false,  false, false>;
  "<productsBought": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
  "<productsSelling": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
}>;
type $Product = $.ObjectType<"default::Product", $ProductλShape, null, [
  ..._std.$Object_d29c95e25d6b11eeabaf012dd32b5ead['__exclusives__'],
]>;
const $Product = $.makeType<$Product>(_.spec, "0958a4fe-78a1-11ee-9f34-efa489a5b8bf", _.syntax.literal);

const Product: $.$expr_PathNode<$.TypeSet<$Product, $.Cardinality.Many>, null> = _.syntax.$PathNode($.$toSet($Product, $.Cardinality.Many), null);

export type $RelatedLinkλShape = $.typeutil.flatten<_std.$Object_d29c95e25d6b11eeabaf012dd32b5eadλShape & {
  "title": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "url": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "<relatedLinks[is GlobalLink]": $.LinkDesc<$GlobalLink, $.Cardinality.Many, {}, false, false,  false, false>;
  "<relatedLinks[is Link]": $.LinkDesc<$Link, $.Cardinality.Many, {}, false, false,  false, false>;
  "<relatedLinks": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
}>;
type $RelatedLink = $.ObjectType<"default::RelatedLink", $RelatedLinkλShape, null, [
  ..._std.$Object_d29c95e25d6b11eeabaf012dd32b5ead['__exclusives__'],
]>;
const $RelatedLink = $.makeType<$RelatedLink>(_.spec, "f8007f3a-45e2-11ee-b7cf-a33587a1fdfb", _.syntax.literal);

const RelatedLink: $.$expr_PathNode<$.TypeSet<$RelatedLink, $.Cardinality.Many>, null> = _.syntax.$PathNode($.$toSet($RelatedLink, $.Cardinality.Many), null);

export type $TopicλShape = $.typeutil.flatten<_std.$Object_d29c95e25d6b11eeabaf012dd32b5eadλShape & {
  "globalTopic": $.LinkDesc<$GlobalTopic, $.Cardinality.AtMostOne, {}, false, false,  false, false>;
  "name": $.PropertyDesc<_std.$str, $.Cardinality.One, true, false, false, false>;
  "mentionedTopics": $.LinkDesc<$Topic, $.Cardinality.Many, {}, false, false,  false, false>;
  "parentTopic": $.LinkDesc<$Topic, $.Cardinality.AtMostOne, {}, false, false,  false, false>;
  "topicBacklinks": $.LinkDesc<$Topic, $.Cardinality.Many, {}, false, false,  false, false>;
  "content": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "prettyName": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "topicAsMarkdown": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "topicPath": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "links": $.LinkDesc<$Link, $.Cardinality.Many, {}, false, true,  false, false>;
  "notes": $.LinkDesc<$Note, $.Cardinality.Many, {}, false, true,  false, false>;
  "wiki": $.LinkDesc<$PersonalWiki, $.Cardinality.One, {}, false, false,  false, false>;
  "public": $.PropertyDesc<_std.$bool, $.Cardinality.AtMostOne, false, false, false, false>;
  "published": $.PropertyDesc<_std.$bool, $.Cardinality.One, false, false, false, false>;
  "<relatedTopics[is Note]": $.LinkDesc<$Note, $.Cardinality.Many, {}, false, false,  false, false>;
  "<mentionedTopics[is Topic]": $.LinkDesc<$Topic, $.Cardinality.Many, {}, false, false,  false, false>;
  "<parentTopic[is Topic]": $.LinkDesc<$Topic, $.Cardinality.Many, {}, false, false,  false, false>;
  "<topicBacklinks[is Topic]": $.LinkDesc<$Topic, $.Cardinality.Many, {}, false, false,  false, false>;
  "<topic[is Link]": $.LinkDesc<$Link, $.Cardinality.Many, {}, false, false,  false, false>;
  "<topic[is Note]": $.LinkDesc<$Note, $.Cardinality.Many, {}, false, false,  false, false>;
  "<topics[is PersonalWiki]": $.LinkDesc<$PersonalWiki, $.Cardinality.Many, {}, false, false,  false, false>;
  "<mentionedTopics": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
  "<parentTopic": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
  "<relatedTopics": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
  "<topic": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
  "<topicBacklinks": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
  "<topics": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
}>;
type $Topic = $.ObjectType<"default::Topic", $TopicλShape, null, [
  ..._std.$Object_d29c95e25d6b11eeabaf012dd32b5ead['__exclusives__'],
  {name: {__element__: _std.$str, __cardinality__: $.Cardinality.One | $.Cardinality.AtMostOne },wiki: {__element__: $PersonalWiki, __cardinality__: $.Cardinality.One | $.Cardinality.AtMostOne },},
  {name: {__element__: _std.$str, __cardinality__: $.Cardinality.One | $.Cardinality.AtMostOne },},
]>;
const $Topic = $.makeType<$Topic>(_.spec, "f810d54f-45e2-11ee-8320-cd23f761ca87", _.syntax.literal);

const Topic: $.$expr_PathNode<$.TypeSet<$Topic, $.Cardinality.Many>, null> = _.syntax.$PathNode($.$toSet($Topic, $.Cardinality.Many), null);

export type $UserλShape = $.typeutil.flatten<_std.$Object_d29c95e25d6b11eeabaf012dd32b5eadλShape & {
  "dislikedLinks": $.LinkDesc<$GlobalLink, $.Cardinality.Many, {}, false, false,  false, false>;
  "topicsLearned": $.LinkDesc<$GlobalTopic, $.Cardinality.Many, {}, false, false,  false, false>;
  "topicsLearning": $.LinkDesc<$GlobalTopic, $.Cardinality.Many, {}, false, false,  false, false>;
  "topicsModerated": $.LinkDesc<$GlobalTopic, $.Cardinality.Many, {}, false, false,  false, false>;
  "topicsToLearn": $.LinkDesc<$GlobalTopic, $.Cardinality.Many, {}, false, false,  false, false>;
  "displayName": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "email": $.PropertyDesc<_std.$str, $.Cardinality.One, true, false, false, false>;
  "hankoId": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, true, false, false, false>;
  "memberUntil": $.PropertyDesc<_std.$datetime, $.Cardinality.AtMostOne, false, false, false, false>;
  "name": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, true, false, false, false>;
  "profileImage": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "dislikedNotes": $.LinkDesc<$Note, $.Cardinality.Many, {}, false, false,  false, false>;
  "likedNotes": $.LinkDesc<$Note, $.Cardinality.Many, {}, false, false,  false, false>;
  "wiki": $.LinkDesc<$PersonalWiki, $.Cardinality.Many, {}, false, true,  false, false>;
  "admin": $.PropertyDesc<_std.$bool, $.Cardinality.AtMostOne, false, false, false, false>;
  "stripeSubscriptionObjectId": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "subscriptionStopped": $.PropertyDesc<_std.$bool, $.Cardinality.AtMostOne, false, false, false, false>;
  "stripePlan": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "productsBought": $.LinkDesc<$Product, $.Cardinality.Many, {}, false, false,  false, false>;
  "productsSelling": $.LinkDesc<$Product, $.Cardinality.Many, {}, false, false,  false, false>;
  "topicsTracked": $.PropertyDesc<_std.$int64, $.Cardinality.One, false, true, false, false>;
  "linksInProgress": $.LinkDesc<$GlobalLink, $.Cardinality.Many, {}, false, false,  false, false>;
  "linksBookmarked": $.LinkDesc<$GlobalLink, $.Cardinality.Many, {}, false, false,  false, false>;
  "linksCompleted": $.LinkDesc<$GlobalLink, $.Cardinality.Many, {}, false, false,  false, false>;
  "linksLiked": $.LinkDesc<$GlobalLink, $.Cardinality.Many, {}, false, false,  false, false>;
  "linksTracked": $.PropertyDesc<_std.$int64, $.Cardinality.One, false, true, false, false>;
  "<user[is UserGuide]": $.LinkDesc<$UserGuide, $.Cardinality.Many, {}, false, false,  false, false>;
  "<user[is PersonalWiki]": $.LinkDesc<$PersonalWiki, $.Cardinality.Many, {}, false, false,  false, false>;
  "<user": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
}>;
type $User = $.ObjectType<"default::User", $UserλShape, null, [
  ..._std.$Object_d29c95e25d6b11eeabaf012dd32b5ead['__exclusives__'],
  {hankoId: {__element__: _std.$str, __cardinality__: $.Cardinality.One | $.Cardinality.AtMostOne },},
  {email: {__element__: _std.$str, __cardinality__: $.Cardinality.One | $.Cardinality.AtMostOne },},
  {name: {__element__: _std.$str, __cardinality__: $.Cardinality.One | $.Cardinality.AtMostOne },},
]>;
const $User = $.makeType<$User>(_.spec, "f8096267-45e2-11ee-b9c2-8f965de693db", _.syntax.literal);

const User: $.$expr_PathNode<$.TypeSet<$User, $.Cardinality.Many>, null> = _.syntax.$PathNode($.$toSet($User, $.Cardinality.Many), null);

export type $UserGuideλShape = $.typeutil.flatten<_std.$Object_d29c95e25d6b11eeabaf012dd32b5eadλShape & {
  "globalTopic": $.LinkDesc<$GlobalTopic, $.Cardinality.One, {}, false, false,  false, false>;
  "user": $.LinkDesc<$User, $.Cardinality.One, {}, false, false,  false, false>;
  "sections": $.LinkDesc<$UserGuideSection, $.Cardinality.Many, {}, false, false,  false, false>;
  "created_at": $.PropertyDesc<_std.$datetime, $.Cardinality.One, false, false, true, true>;
}>;
type $UserGuide = $.ObjectType<"default::UserGuide", $UserGuideλShape, null, [
  ..._std.$Object_d29c95e25d6b11eeabaf012dd32b5ead['__exclusives__'],
]>;
const $UserGuide = $.makeType<$UserGuide>(_.spec, "c7e53d3d-467f-11ee-9c94-e5ceb6f00af8", _.syntax.literal);

const UserGuide: $.$expr_PathNode<$.TypeSet<$UserGuide, $.Cardinality.Many>, null> = _.syntax.$PathNode($.$toSet($UserGuide, $.Cardinality.Many), null);

export type $UserGuideSectionλShape = $.typeutil.flatten<_std.$Object_d29c95e25d6b11eeabaf012dd32b5eadλShape & {
  "links": $.LinkDesc<$GlobalLink, $.Cardinality.Many, {}, false, false,  false, false>;
  "title": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "<sections[is UserGuide]": $.LinkDesc<$UserGuide, $.Cardinality.Many, {}, false, false,  false, false>;
  "<sections": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
}>;
type $UserGuideSection = $.ObjectType<"default::UserGuideSection", $UserGuideSectionλShape, null, [
  ..._std.$Object_d29c95e25d6b11eeabaf012dd32b5ead['__exclusives__'],
]>;
const $UserGuideSection = $.makeType<$UserGuideSection>(_.spec, "c7e312e8-467f-11ee-85d9-c7798ad50af4", _.syntax.literal);

const UserGuideSection: $.$expr_PathNode<$.TypeSet<$UserGuideSection, $.Cardinality.Many>, null> = _.syntax.$PathNode($.$toSet($UserGuideSection, $.Cardinality.Many), null);



export { $GlobalGraph, GlobalGraph, $GlobalGuide, GlobalGuide, $GlobalGuideSection, GlobalGuideSection, $GlobalLink, GlobalLink, $GlobalNote, GlobalNote, $GlobalTopic, GlobalTopic, $Link, Link, $Note, Note, $PersonalWiki, PersonalWiki, $Product, Product, $RelatedLink, RelatedLink, $Topic, Topic, $User, User, $UserGuide, UserGuide, $UserGuideSection, UserGuideSection };

type __defaultExports = {
  "GlobalGraph": typeof GlobalGraph;
  "GlobalGuide": typeof GlobalGuide;
  "GlobalGuideSection": typeof GlobalGuideSection;
  "GlobalLink": typeof GlobalLink;
  "GlobalNote": typeof GlobalNote;
  "GlobalTopic": typeof GlobalTopic;
  "Link": typeof Link;
  "Note": typeof Note;
  "PersonalWiki": typeof PersonalWiki;
  "Product": typeof Product;
  "RelatedLink": typeof RelatedLink;
  "Topic": typeof Topic;
  "User": typeof User;
  "UserGuide": typeof UserGuide;
  "UserGuideSection": typeof UserGuideSection
};
const __defaultExports: __defaultExports = {
  "GlobalGraph": GlobalGraph,
  "GlobalGuide": GlobalGuide,
  "GlobalGuideSection": GlobalGuideSection,
  "GlobalLink": GlobalLink,
  "GlobalNote": GlobalNote,
  "GlobalTopic": GlobalTopic,
  "Link": Link,
  "Note": Note,
  "PersonalWiki": PersonalWiki,
  "Product": Product,
  "RelatedLink": RelatedLink,
  "Topic": Topic,
  "User": User,
  "UserGuide": UserGuide,
  "UserGuideSection": UserGuideSection
};
export default __defaultExports;
