import dispatcher from "../dispatcher/dispatcher"

const deleteArticle = (id) => {
  dispatcher.dispatch({
    type: "DELETE_ARTICLE",
    data: {
      id: id
    }
  })
}

export default deleteArticle