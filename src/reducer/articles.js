import {articles as articleList} from '../fixtures'
import {DELETE_ARTICLE} from '../utils/constants'
import update from 'react-addons-update'


const defaultState = {
  entities: articleList
}

const filterExcept = (entities, id)  => entities
  .filter(ent => ent.id !== id)


export default function articles (state = defaultState, {type, data}) {
  switch (type) {
    case DELETE_ARTICLE: 
      // return update(state, {entities: {$set: filterExcept(state.entities, data.id)}})
      return Object.assign({}, state, {entities: filterExcept(state.entities, data.id)})
  }

  return state
}
