import { TPosts, TPostStatus, TPostType } from "@/src/types"

type Options = {
  acceptStatus?: TPostStatus[]
  acceptType?: TPostType[]
}

const initialOption: Options = {
  acceptStatus: ["Public"],
  acceptType: ["Post"],
}
const current = new Date()
const tomorrow = new Date(current)
tomorrow.setDate(tomorrow.getDate() + 1)
tomorrow.setHours(0, 0, 0, 0)

export function filterPosts(posts: TPosts, options: Options = initialOption) {
  const { acceptStatus = ["Public"], acceptType = ["Post"] } = options
  const filteredPosts = posts
    // filter data
    .filter((post) => {
      const postDate = new Date(post?.date?.start_date || post.createdTime)
      if (!post.title || !post.slug || postDate > tomorrow) return false
      return true
    })
    // filter status
    .filter((post) => {
      // const postStatus = post.status[0]
      // return acceptStatus.includes(postStatus)
      // 배열이고, 길이가 1 이상인지 확인
      const postStatus =
        Array.isArray(post.status) && post.status.length > 0
          ? post.status[0]
          : undefined

      // `undefined` 상태를 처리하거나 기본값을 제공
      if (!postStatus) {
        // 여기에 `undefined` 상태일 때의 로직 처리
        return false // 또는 적절한 기본값 처리
      }

      return acceptStatus.includes(postStatus)
    })
    // filter type
    .filter((post) => {
      const postType = post.type[0]
      return acceptType.includes(postType)
    })
  return filteredPosts
}
