import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { blue, royalBlue, white } from './../core/styles'

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
                <TouchableOpacity style={styles.button} 
                    onPress={() => this.navigateTo('addQuestionView')} >
                    <Text style={styles.buttonText}>ADD QUESTION</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} 
                    onPress={() => this.navigateTo('quizView')} >
                    <Text style={styles.buttonText}>START QUIZ</Text>
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
    deckTitle: {
        fontSize: 24
    },
    cardCounter: {
        fontSize: 20,
        color: '#666',
        marginBottom: 30
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

export default DeckView