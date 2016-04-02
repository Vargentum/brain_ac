import AppDispatcher from '../dispatcher'
import { LOAD_COMMENTS, SUCCESS, START, FAIL } from '../AC/constants'
import SimpleStore from './SimpleStore'
import { loadComments } from '../AC/comments'

class CommentStore extends SimpleStore {
    constructor(...args) {
        super(...args)

        this.dispatchToken = AppDispatcher.register((action) => {
            const { type, data, response, error } = action
            switch (type) {

                case LOAD_COMMENTS + START:
                    this.loading = true
                    break;

                case LOAD_COMMENTS + SUCCESS:
                    this.loading = false
                    this.loaded = true
                    response.records.forEach(this.__add)
                    break;

                default: return
            }

            this.emitChange()
        })
    }

    getRelatedComments(type, id) {
        if (!this.__stores[type] || 
            !this.__stores[type].getById(id) ||
            !this.__stores[type].getById(id)[type]) return []
        
        const relatedIdsList = this.__stores[type].getById(id)[type]

        return this.__items.filter(({id}) => relatedIdsList.indexOf(id) !== -1)
    }
}

export default CommentStore