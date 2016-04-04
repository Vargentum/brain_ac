import {DELETE_ARTICLE, LOADING_STATES} from '../utils/constants'
import update from 'react-addons-update'

const {START, SUCCESS, ERROR} = LOADING_STATES

const defaultState = {
  loading: false,
  loaded: false,
  error: null,
  entities: []
}

const filterExcept = (entities, id)  => entities
  .filter(ent => ent.id !== id)


export default function articles (state = defaultState, {type, data}) {
  switch (type) {
    case DELETE_ARTICLE: 
      return Object.assign({}, state, {entities: filterExcept(state.entities, data.id)})

    case START:
      return Object.assign({}, state, {loading: true})

    case SUCCESS:
      return Object.assign({}, state, {loading: false, loaded: true, entities: data.response})
  }

  return state
}
