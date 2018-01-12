import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native'
import { blue, royalBlue, white } from './../core/styles'

class DeckView extends React.Component {
    state = {
        bounceValue: new Animated.Value(1)
    }
    componentDidMount() {
        const bounceValue = this.state.bounceValue
        Animated.sequence([
            Animated.timing(bounceValue, { duration: 200, toValue: 1.04}),
            Animated.spring(bounceValue, { toValue: 1, friction: 4})
       ]).start()
    }
    navigateTo(view) {
        const navigation = this.props.navigation
        navigation.navigate(view, {deck: navigation.state.params.deck})
    }
    render() {
        const deck = this.props.navigation.state.params.deck
        const bounceValue = this.state.bounceValue
        return (
            <View style={styles.container}>
                <Animated.Text style={[styles.deckTitle, {transform: [{scale: bounceValue}]}]}>
                    {deck.title}
                </Animated.Text>
                <Text style={styles.cardCounter}>{deck.cards.length} cards</Text>
                <TouchableOpacity style={styles.button} 
                    onPress={() => this.navigateTo('addQuestionView')} >
                    <Text style={styles.buttonText}>ADD QUESTION</Text>
                </TouchableOpacity>
                {deck.cards.length > 0 &&
                <TouchableOpacity style={styles.button} 
                    onPress={() => this.navigateTo('quizView')} >
                    <Text style={styles.buttonText}>START QUIZ</Text>
                </TouchableOpacity>}
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
        fontSize: 26
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