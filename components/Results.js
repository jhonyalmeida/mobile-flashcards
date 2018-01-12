import React from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { clearNotifications, setLocalNotification } from '../core/notification'
import { blue, royalBlue, white } from '../core/styles'

class Results extends React.Component {
    componentDidMount() {
        clearNotifications().then(setLocalNotification)
    }
    render() {
        const navigation = this.props.navigation
        const deck = navigation.state.params.deck
        const score = navigation.state.params.score
        const navigateTo = (view) => {
            const resetAction = NavigationActions.reset({
                index: view === 'deckView' ? 0 : 1,
                actions: view === 'deckView' ? [
                    NavigationActions.navigate({ routeName: view, params: { deck } })
                ] : [
                    NavigationActions.navigate({ routeName: 'deckView', params: { deck } }),
                    NavigationActions.navigate({ routeName: view, params: { deck } })
                ]
            })
            this.props.navigation.dispatch(resetAction)
        }
        return (
            <View style={styles.container}>
                <Text style={styles.message}>Quiz finished!</Text>
                <Text style={styles.deckTitle}>Deck: {deck.title}</Text>
                <Text style={styles.score}>Score: {score}/{deck.cards.length}</Text>
                <TouchableOpacity style={styles.button} 
                    onPress={() => navigateTo('quizView')} >
                    <Text style={styles.buttonText}>RESTART QUIZ</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} 
                    onPress={() => navigateTo('deckView')} >
                    <Text style={styles.buttonText}>BACK TO DECK</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    message: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    deckTitle: {
        fontSize: 18,
        margin: 15
    },
    score: {
        fontSize: 16,
        color: '#666',
        marginBottom: 20
    },
    button: {
        padding: 10,
        marginBottom: 15,
        alignItems: 'center',
        minWidth: 150,
        backgroundColor: royalBlue
    },
    buttonText: {
        color: white,
        fontWeight: 'bold'
    }
})

export default Results