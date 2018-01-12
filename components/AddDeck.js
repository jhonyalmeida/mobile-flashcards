import React from 'react'
import { connect } from 'react-redux'
import { KeyboardAvoidingView, Text, TextInput, 
         TouchableOpacity, StyleSheet } from 'react-native'
import { addDeck } from './../core/actions'
import styles from '../core/styles'

class AddDeck extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            cards: []
        }
    }
    onPress() {
        this.props.addDeck(this.state, this.props.onAddDeck)
    }
    render() {
        const buttonDisabled = this.state.title === ''
        // Modo de contornar o bug do TouchableOpacity, que não reflete mudanças na propriedade opacity
        // Ex: { opacity: buttonDisabled ? 0.5 : 1.0 } não funciona
        const buttonStyle = [
            styles.formButton, 
            buttonDisabled ? styles.formButtonDisabled : styles.formButtonEnabled
        ]
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <Text style={styles.formLabel}>Deck title</Text>
                <TextInput style={styles.formField} returnKeyLabel="Deck title"
                    onChangeText={(title) => this.setState({title})} />
                <TouchableOpacity style={buttonStyle} onPress={this.onPress.bind(this)} disabled={buttonDisabled} >
                    <Text style={styles.formButtonText}>CREATE DECK</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        )
    }
}

export default connect(null, { addDeck })(AddDeck)