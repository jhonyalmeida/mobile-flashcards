import { combineReducers } from 'redux'
import * as actions from './actions'
import _ from 'lodash'

const decksReducer = (state = {}, action) => {
    switch(action.type) {
        case actions.LIST_DECKS:
            return action.payload
        case actions.ADD_DECK:
        case actions.ADD_QUESTION:
            const key = action.payload.title
            return {...state, [key]: action.payload}
        case actions.REMOVE_DECK:
            return _.omit(state, action.payload)
        default:
            return state
    }
}

const rootReducer = combineReducers({
    decks: decksReducer
})

export default rootReducer