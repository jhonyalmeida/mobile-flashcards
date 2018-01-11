import { AsyncStorage } from 'react-native'
import _ from 'lodash'

const STORAGE_KEY = 'flashcards-decks'

const reset = async () => {
    try {
        AsyncStorage.clear()
    } catch (error) {
        alert(error)
    }
}

const loadDecks = async () => {
    try {
        const data = await AsyncStorage.getItem(STORAGE_KEY)
        const decks = data ? JSON.parse(data) : {}
        return decks
    } catch (error) {
        alert(error)
    }
}

const findDeck = async (title) => {
    try {
        const decks = await loadDecks()
        return decks[title]
    } catch (error) {
        alert(error)
    }
}

const addDeck = async (newDeck) => {
    try {
        let decks = await loadDecks()
        decks[newDeck.title] = newDeck
        await AsyncStorage.mergeItem(
            STORAGE_KEY,
            JSON.stringify(decks)
        )
        return newDeck
    } catch (error) {
        alert(error)
    }
}

const removeDeck = async (deck) => {
    try {
        const decks = await loadDecks()
        await AsyncStorage.mergeItem(
            STORAGE_KEY, 
            JSON.stringify(_.omit(decks, deck))
        )
    } catch (error) {
        alert(error)
    }
}

const addQuestion = async (deck, question) => {
    try {
        deck.cards.push(question)
        addDeck(deck)
        return deck
    } catch (error) {
        alert(error)
    }
}

export default {
    loadDecks, addDeck, removeDeck, addQuestion, reset
}