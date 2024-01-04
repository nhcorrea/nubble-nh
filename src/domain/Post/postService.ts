import {postApi} from './postApi'
import {Post} from './types'

async function getList(): Promise<Post[]> {
  const result = await postApi.getList()
  return result
}

export const postService = {
  getList,
}
