import React from 'react'
import { connect } from 'react-redux'
import { KeyboardAvoidingView, Text, TextInput, 
         TouchableOpacity, TouchableHighlight, StyleSheet } from 'react-native'
import { NavigationActions } from 'react-navigation'
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
        const callback = (deck) => {
            const resetAction = NavigationActions.reset({
                index: 1,
                actions: [
                    NavigationActions.navigate({ routeName: 'mainView', params: { deck } }),
                    NavigationActions.navigate({ routeName: 'deckView', params: { deck } })
                ]
            })
            this.props.navigation.dispatch(resetAction)
        }
        this.props.addQuestion(deck, this.state, callback)
    }
    render() {
        const buttonDisabled = this.state.question === '' || this.state.answer === ''
        // Modo de contornar o bug do TouchableOpacity, que não reflete mudanças na propriedade opacity
        // Ex: { opacity: buttonDisabled ? 0.5 : 1.0 } não funciona
        const buttonStyle = [
            styles.formButton, 
            buttonDisabled ? styles.formButtonDisabled : styles.formButtonEnabled
        ]
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <Text style={styles.formLabel}>Question</Text>
                <TextInput style={styles.formField} multiline={true} numberOfLines={3}
                    onChangeText={(question) => this.setState({question})} />
                <Text style={styles.formLabel}>Answer</Text>
                <TextInput style={styles.formField} multiline={true} numberOfLines={3}
                    onChangeText={(answer) => this.setState({answer})} />
                <TouchableOpacity style={buttonStyle} 
                    onPress={this.onPress.bind(this)} disabled={buttonDisabled} >
                    <Text style={styles.formButtonText}>CREATE QUESTION</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        )
    }
}

export default connect(null, { addQuestion })(AddQuestion)