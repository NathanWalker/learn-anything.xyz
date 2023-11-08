import { For, createMemo } from "solid-js"
import { useGlobalState } from "../GlobalContext/global"
import { useUser } from "../GlobalContext/user"
import Icon from "./Icon"

type TreeContent = TreeDirectory | TreeFile

type TreeDirectory = {
  type: "directory"
  name: string
  depth: number
  contents: TreeContent[]
}

type TreeFile = {
  type: "file"
  path: string
  name: string
  depth: number
}

const visitDir = (
  list: TreeContent[],
  parent: TreeDirectory,
  segments: string[],
  filepath: string,
  depth: number,
): void => {
  for (let i = depth; i < segments.length; i += 1) {
    const seg = segments[i]!
    // seg is directory
    if (i < segments.length - 1) {
      // dir found in parent
      for (const node of parent.contents) {
        if (node.type !== "directory" || node.name !== seg) continue
        visitDir(list, node, segments, filepath, i + 1)
        return
      }
      // dir not found - create new one
      const dir: TreeDirectory = {
        type: "directory",
        name: seg,
        contents: [],
        depth: depth,
      }
      parent.contents.push(dir)
      list.push(dir)
      visitDir(list, dir, segments, filepath, i + 1)
      return
    }
    // seg is file
    else {
      const file: TreeFile = {
        type: "file",
        name: seg.split(".")[0]!,
        depth: depth,
        path: filepath,
      }
      parent.contents.push(file)
      list.push(file)
    }
  }
}

const filepathsToTree = (
  filepaths: string[],
): [list: TreeContent[], root: TreeDirectory] => {
  const root: TreeDirectory = {
    type: "directory",
    name: "root",
    contents: [],
    depth: -1,
  }
  const list: TreeContent[] = []

  for (const path of filepaths) {
    const segments = path.split("/")
    visitDir(list, root, segments, path, 0)
  }

  return [list, root]
}

export default function Sidebar() {
  const user = useUser()
  const global = useGlobalState()

  const directoryTree = createMemo(() => {
    return filepathsToTree(global.state.files.map((f) => f.filePath))
  })

  return (
    <>
      <div
        class=" flex h-full border-r-2 border-slate-400 border-opacity-20"
        id="Sidebar"
        style={{ width: "25%", "min-width": "250px" }}
      >
        <div class="flex w-18 dark:bg-[#1e1e1e] bg-white flex-col justify-between items-center font-semibold p-2 py-4 border-r-2 border-opacity-20 border-slate-400">
          <div
            class="font-semibold hover:text-green-400 hover:opacity-90 transition-all cursor-pointer"
            onClick={() => {
              // TODO: show modal of settings like in obsidian
              // user.setMode("Settings")
            }}
          >
            <Icon name="FileSearch" />
          </div>
          <div class="p-1 px-2 rounded-md"></div>
          <div class="flex flex-col items-center gap-3">
            {/* <div
              class="font-semibold hover:text-green-400 hover:opacity-90 transition-all cursor-pointer"
              onClick={() => {
                // TODO: fix sign in
                // user.setShowSignIn(true)
              }}
            >
              <Icon name="UserProfile" />
            </div> */}
            <div
              class="font-semibold hover:text-green-400 hover:opacity-90 transition-all cursor-pointer"
              onClick={() => {
                // TODO: show modal of settings like in obsidian
                user.setMode("Settings")
              }}
            >
              <Icon name="Settings" />
            </div>
          </div>
        </div>
        <div
          id="ContentSidebar"
          class="dark:bg-[#1e1e1e] bg-white w-full overflow-auto"
        >
          <div
            class="flex flex-col w-full gap-3 px-6 pl-4 py-4 font-semibold"
            style={{ "font-size": "14px" }}
          >
            <div class="font-bold opacity-70 rounded-md p-1  w-full">
              Topics
            </div>
            <div class="pl-6 overflow-hidden opacity-70 flex flex-col gap-2 border-l border-opacity-30 border-slate-100">
              <For each={directoryTree()[0]}>
                {(item) => {
                  return (
                    <div
                      class="cursor-pointer"
                      style={{ "padding-left": `${item.depth * 10}px` }}
                      onClick={() => {
                        if (item.type === "file") {
                          global.set({
                            currentlyOpenFile: global.state.files.find(
                              (f) => f.filePath === item.path,
                            ),
                          })
                        }
                      }}
                    >
                      {item.name}
                    </div>
                  )
                }}
              </For>
              {/* <For each={wiki.wiki.sidebarTopics}>
                {(topic) => {
                  // TODO: use indent levels to make pretty sidebar
                  return (
                    <div
                      class="cursor-pointer hover:text-green-400 hover:opacity-90 transition-all"
                      onClick={() => {
                        wiki.setOpenTopic(topic.prettyName)
                      }}
                    >
                      {topic.prettyName}
                    </div>
                  )
                }}
              </For> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
