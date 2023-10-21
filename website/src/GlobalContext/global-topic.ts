import { createContext, createEffect, createMemo, useContext } from "solid-js"
import { createStore } from "solid-js/store"
import { useLocation } from "solid-start"
import { SearchResult } from "../components/Search"
import { MobiusType } from "../root"

export type GlobalLink = {
  id: string
  title: string
  url: string
  protocol: string
  description?: string
  year?: string | null
  liked?: boolean
  completed?: boolean
}
export type Section = {
  summary: string
  title: string
  links: GlobalLink[]
}
type LatestGlobalGuide = {
  summary: string
  sections: Section[]
}
type GlobalNote = {
  content: string
  url?: string
}
export type GlobalTopic = {
  name: string
  prettyName: string
  topicSummary: string
  topicPath: string
  latestGlobalGuide: LatestGlobalGuide
  links: GlobalLink[]
  notes: GlobalNote[]
  notesCount?: number
  // description?: string
  // topicWebsiteLink?: string
  // wikipediaLink?: string
  // githubLink?: string
  // xLink?: string
  // redditLink?: string
  // aiSummary?: string
  learningStatus: "to_learn" | "learning" | "learned" | ""
  likedLinkIds: string[]
  completedLinkIds: string[]
  verifiedTopic: boolean
}

function extractTopicFromPath(inputStr: string) {
  const segments = inputStr
    .split("/")
    .filter((segment: string) => segment.trim() !== "")
  return segments.length > 0 ? segments[0] : null
}

// state for rendering global topic found in learn-anything.xyz/<topic>
export default function createGlobalTopic(mobius: MobiusType, user: any) {
  const [globalTopic, setGlobalTopic] = createStore<GlobalTopic>({
    name: "",
    prettyName: "",
    topicPath: "",
    topicSummary: "",
    latestGlobalGuide: {
      summary: "",
      sections: []
    },
    links: [],
    notes: [{ content: "test" }],
    learningStatus: "",
    likedLinkIds: [],
    completedLinkIds: [],
    verifiedTopic: true
  })

  const currentTopicGlobalLinksSearch = createMemo(() => {
    return globalTopic.links.map(
      (link): SearchResult => ({
        name: link.title
      })
    )
  })

  // TODO: do grafbase queries to get user learning status
  // check that user is authed, can use import { signedIn } from "../../../lib/auth" for this
  const location = useLocation()
  createEffect(async () => {
    if (
      !location.pathname ||
      location.pathname === "/" ||
      location.pathname === "/pricing" ||
      location.pathname === "/profile"
    )
      return

    setGlobalTopic("name", location.pathname.slice(1))
    const topicName = extractTopicFromPath(location.pathname)
    if (!topicName) return

    const topicsStored = localStorage.getItem("globalTopics")
    let actualTopics
    let verifiedTopic
    if (topicsStored) {
      actualTopics = JSON.parse(topicsStored)
      verifiedTopic = actualTopics.includes(topicName)
      console.log(verifiedTopic, "true?")
      setGlobalTopic({ verifiedTopic: verifiedTopic })
    }
    if (verifiedTopic || !topicsStored) {
      const topic = await mobius.query({
        publicGetGlobalTopic: {
          where: { topicName: topicName },
          select: {
            prettyName: true,
            topicSummary: true,
            latestGlobalGuide: {
              sections: {
                title: true,
                summary: true,
                links: {
                  id: true,
                  title: true,
                  url: true,
                  year: true,
                  protocol: true,
                  description: true
                }
              }
            },
            links: {
              id: true,
              title: true,
              url: true,
              year: true,
              protocol: true,
              description: true
            },
            notesCount: true
          }
        }
      })

      // @ts-ignore
      const topicData = topic.data.publicGetGlobalTopic
      // let aiSummaryAsHtml = ""
      // if (topicData.aiSummary) {
      //   aiSummaryAsHtml = micromark(topicData.aiSummary)
      // }

      setGlobalTopic({
        prettyName: topicData.prettyName,
        topicSummary: topicData.topicSummary,
        latestGlobalGuide: topicData.latestGlobalGuide,
        links: topicData.links,
        notesCount: topicData.notesCount
      })
    }
  })

  createEffect(async () => {
    if (
      !location.pathname ||
      location.pathname === "/" ||
      location.pathname === "/pricing" ||
      location.pathname === "/profile" ||
      !user.user.member
    )
      return

    const topicName = extractTopicFromPath(location.pathname)
    if (!topicName) return

    const topicsStored = localStorage.getItem("globalTopics")
    let actualTopics
    let verifiedTopic
    if (topicsStored) {
      actualTopics = JSON.parse(topicsStored)
      verifiedTopic = actualTopics.includes(topicName)
      setGlobalTopic({ verifiedTopic: verifiedTopic })
    }
    if (verifiedTopic || !topicsStored) {
      // TODO: getNotesForGlobalTopic should be included in getGlobalTopic query
      // use the free objects syntax https://discord.com/channels/841451783728529451/1165023460863520778/1165024287560826891
      const res = await mobius.query({
        getGlobalTopic: {
          where: {
            topicName: topicName
          },
          select: {
            learningStatus: true,
            likedLinkIds: true,
            completedLinkIds: true
          }
        },
        getNotesForGlobalTopic: {
          where: {
            topicName: topicName
          },
          select: {
            content: true,
            url: true
          }
        }
      })
      // @ts-ignore
      const topicData = res.data.getGlobalTopic
      // @ts-ignore
      const notesData = res.data.getNotesForGlobalTopic
      // console.log(notesData, "notes..")
      setGlobalTopic({
        learningStatus: topicData.learningStatus,
        likedLinkIds: topicData.likedLinkIds,
        completedLinkIds: topicData.completedLinkIds,
        notes: notesData
      })
    } else {
      const learningStatus = await mobius.query({
        getGlobalTopicLearningStatus: {
          where: {
            topicName: location.pathname.slice(1)
          },
          select: true
        }
      })
      setGlobalTopic(
        "learningStatus",
        // @ts-ignore
        learningStatus.data.getGlobalTopicLearningStatus
      )
    }
  })

  return {
    globalTopic,
    set: setGlobalTopic,
    currentTopicGlobalLinksSearch
    // topicGlobalLinksSearch,
    // setShowPage: (state: PageState) => {
    //   setGlobalTopic({ showPage: state })
    // },
    // TODO: use solid effect that listens on 'learning status' instead of below
    // setUserLearningStatus: async (state: LearningStatus) => {
    //   setGlobalTopic({ userLearningStatus: state })
    //   // await mobius.mutate()
    // },
  }
}

const GlobalTopicCtx = createContext<ReturnType<typeof createGlobalTopic>>()

export const GlobalTopicProvider = GlobalTopicCtx.Provider

export const useGlobalTopic = () => {
  const ctx = useContext(GlobalTopicCtx)
  if (!ctx) throw new Error("useGlobalTopic must be used within UserProvider")
  return ctx
}
