import React from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { blue, royalBlue, white } from './../core/styles'

class Quiz extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            score:0,
            page: 1,
            showAnswer: false
        }
    }
    getDeck() {
        return this.props.navigation.state.params.deck
    }
    giveFeedback(rightAnswer) {
        const deck = this.getDeck()
        const score = rightAnswer ? this.state.score + 1 : this.state.score
        const page = this.state.page + 1
        if (page > deck.cards.length) {
            this.props.navigation.navigate('resultsView', {deck, score})
        } else {
            this.setState({score, page, showAnswer: false})
        }
    }
    render() {
        const deck = this.getDeck()
        const card = deck.cards[this.state.page - 1]
        return (
            <View style={{flex: 1}}>
                <Text style={styles.questionCounter}>
                    Question {this.state.page}/{deck.cards.length}
                </Text>
                {!this.state.showAnswer && this.renderQuestion(card.question)}
                {this.state.showAnswer && this.renderAnswer(card.answer)}
            </View>
        )
    }
    renderQuestion(question) {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{question}</Text>
                <TouchableOpacity style={styles.button} 
                    onPress={() => this.setState({showAnswer: true})} >
                    <Text style={styles.buttonText}>SHOW ANSWER</Text>
                </TouchableOpacity>
            </View>
        )
    }
    renderAnswer(answer) {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{answer}</Text>
                <TouchableOpacity style={styles.button} 
                    onPress={() => this.giveFeedback(true)} >
                    <Text style={styles.buttonText}>RIGHT</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} 
                    onPress={() => this.giveFeedback(false)} >
                    <Text style={styles.buttonText}>WRONG</Text>
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
    text: {
        fontSize: 18,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 30
    },
    questionCounter: {
        fontSize: 16,
        color: '#666',
        margin: 5
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

export default Quiz