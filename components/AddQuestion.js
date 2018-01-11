import React from 'react'
import { connect } from 'react-redux'
import { KeyboardAvoidingView, Text, TextInput, Button, StyleSheet } from 'react-native'
import { addQuestion } from './../core/actions'
import styles from '../core/styles'

class AddQuestion extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            question: '',
            answer: ''
        }
    }
    onPress() {
        const deck = this.props.navigation.state.params.deck
        const callback = (deck) => this.props.navigation.navigate('deckView', {deck})
        this.props.addQuestion(deck, this.state, callback)
    }
    render() {
        return (
            <KeyboardAvoidingView style={styles.container}>
                <Text>Question</Text>
                <TextInput style={styles.formField} multiline={true} numberOfLines={3}
                    onChangeText={(question) => this.setState({question})} />
                <Text>Answer</Text>
                <TextInput style={styles.formField} multiline={true} numberOfLines={3}
                    onChangeText={(answer) => this.setState({answer})} />
                <Button title="Save" style={styles.formButton} onPress={this.onPress.bind(this)} />
            </KeyboardAvoidingView>
        )
    }
}

export default connect(null, { addQuestion })(AddQuestion)