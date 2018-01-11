import React from 'react'
import { connect } from 'react-redux'
import { KeyboardAvoidingView, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
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
    render() {
        const onPress = () => this.props.addDeck(this.state, this.props.onAddDeck)
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <Text style={styles.formLabel}>Deck title</Text>
                <TextInput style={styles.formField} returnKeyLabel="Deck title"
                    onChangeText={(title) => this.setState({title})} />
                <TouchableOpacity style={styles.formButton} onPress={onPress} >
                    <Text style={styles.formButtonText}>CREATE DECK</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        )
    }
}

export default connect(null, { addDeck })(AddDeck)