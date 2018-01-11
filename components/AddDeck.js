import React from 'react'
import { connect } from 'react-redux'
import { KeyboardAvoidingView, Text, TextInput, Button, StyleSheet } from 'react-native'
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
            <KeyboardAvoidingView style={styles.container}>
                <TextInput style={styles.formField} 
                    onChangeText={(title) => this.setState({title})} 
                    returnKeyLabel="Deck title"/>
                <Button title="Save" style={styles.formButton} onPress={onPress} />
            </KeyboardAvoidingView>
        )
    }
}

export default connect(null, { addDeck })(AddDeck)