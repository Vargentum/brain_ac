import $ from "jquery"

export function loadComments() {
  return $.get('/api/comment')
}