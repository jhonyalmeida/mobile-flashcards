import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import styles from './../core/styles'

class DeckView extends React.Component {
    navigateTo(view) {
        const navigation = this.props.navigation
        navigation.navigate(view, {deck: navigation.state.params.deck})
    }
    render() {
        const deck = this.props.navigation.state.params.deck
        return (
            <View style={styles.container}>
                <Text style={styles.deckTitle}>{deck.title}</Text>
                <Text style={styles.cardCounter}>{deck.cards.length} cards</Text>
                <Button title="Add Question" onPress={() => this.navigateTo('addQuestionView')} />
                <Button title="Start Quiz" onPress={() => this.navigateTo('quizView')} />
            </View>
        )
    }
}

export default DeckView