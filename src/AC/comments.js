import AppDispatcher from '../dispatcher'
import { LOAD_COMMENTS } from './constants'
import { loadComments as loadCommentsRequest } from './api/comments'
import { asyncAC } from './utils'

export const loadComments = asyncAC(loadCommentsRequest, LOAD_COMMENTS)