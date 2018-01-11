import React from 'react'
import { connect } from 'react-redux'
import { KeyboardAvoidingView, Text, TextInput, 
         TouchableOpacity, StyleSheet } from 'react-native'
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
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <Text style={styles.formLabel}>Question</Text>
                <TextInput style={styles.formField} multiline={true} numberOfLines={3}
                    onChangeText={(question) => this.setState({question})} />
                <Text style={styles.formLabel}>Answer</Text>
                <TextInput style={styles.formField} multiline={true} numberOfLines={3}
                    onChangeText={(answer) => this.setState({answer})} />
                <TouchableOpacity style={styles.formButton} onPress={this.onPress.bind(this)} >
                    <Text style={styles.formButtonText}>CREATE QUESTION</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        )
    }
}

export default connect(null, { addQuestion })(AddQuestion)