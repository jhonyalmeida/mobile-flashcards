import React from 'react'
import { connect } from 'react-redux'
import { View, Text, Button, StyleSheet } from 'react-native'
import { clearNotifications, setLocalNotification } from '../core/notification'
import styles from '../core/styles'

class Results extends React.Component {
    componentDidMount() {
        clearNotifications().then(setLocalNotification)
    }
    render() {
        const navigation = this.props.navigation
        const deck = navigation.state.params.deck
        const score = navigation.state.params.score
        const navigateTo = (view) => {
            navigation.navigate(view, { deck: navigation.state.params.deck })
        }
        return (
            <View style={styles.container}>
                <Text>Quiz finished!</Text>
                <Text>Deck: {deck.title}</Text>
                <Text>Score: {score}/{deck.cards.length}</Text>
                <Button title="Restart Quiz" onPress={() => navigateTo('quizView')} />
                <Button title="Back to Deck Page" onPress={() => navigateTo('deckView')} />
            </View>
        )
    }
}

export default Results