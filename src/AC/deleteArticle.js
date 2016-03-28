import dispatcher from "../dispatcher/dispatcher"

const deleteArticle = (id) => {
  dispatcher.dispatch({
    type: "DELETE_ARTICLE",
    data: {
      id: id
    }
  })
  console.log(dispatcher, 'dispatched')
}

export default deleteArticle