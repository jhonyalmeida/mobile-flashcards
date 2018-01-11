import api from './api'

export const LIST_DECKS = 'LOAD_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const REMOVE_DECK = 'REMOVE DECK'
export const ADD_QUESTION = 'ADD_QUESTION'

export function listDecks() {
    return (dispatch) => {
        api.loadDecks().then(decks => dispatch({
            type: LIST_DECKS,
            payload: decks
        }))
    }
}

export function addDeck(newDeck, callback = () => {}) {
    return (dispatch) => {
        api.addDeck(newDeck).then(deck => {
            dispatch({
                type: ADD_DECK,
                payload: deck
            })
            callback(deck)
        })
    }
}

export function removeDeck(deck) {
    return (dispatch) => {
        api.remoDeck(deck).then(() => dispatch({
            type: REMOVE_DECK,
            payload: deck
        }))
    }
}

export function addQuestion(deck, question, callback = () => {}) {
    return (dispatch) => {
        api.addQuestion(deck, question).then(deck => {
            dispatch({
                type: ADD_QUESTION,
                payload: deck
            })
            callback(deck)
        })
    }
}