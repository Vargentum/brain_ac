import {DELETE_ARTICLE} from '../utils/constants'

export default function deleteArticle(id) {
  return {
    type: DELETE_ARTICLE,
    data: {id}
  }
}