import React from 'react'
import { connect } from 'react-redux'
import { View, Text, Button, StyleSheet } from 'react-native'
import styles from '../core/styles'

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
                <Text>Question {this.state.page}/{deck.cards.length}</Text>
                {!this.state.showAnswer && this.renderQuestion(card.question)}
                {this.state.showAnswer && this.renderAnswer(card.answer)}
            </View>
        )
    }
    renderQuestion(question) {
        return (
            <View style={styles.container}>
                <Text>{question}</Text>
                <Button title="Show Answer" onPress={() => this.setState({showAnswer: true})} />
            </View>
        )
    }
    renderAnswer(answer) {
        return (
            <View style={styles.container}>
                <Text>{answer}</Text>
                <Button title="Right" onPress={() => this.giveFeedback(true)} />
                <Button title="Wrong" onPress={() => this.giveFeedback(false)} />
            </View>
        )
    }
}

export default Quiz