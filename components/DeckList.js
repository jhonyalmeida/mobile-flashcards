import React from 'react'
import { connect } from 'react-redux'
import { View, Text, FlatList, StyleSheet, Button, TouchableOpacity } from 'react-native'
import { listDecks } from './../core/actions'

class DeckList extends React.Component {
    componentDidMount() {
        this.props.listDecks()
    }
    render() {
        const decks = this.props.decks
        return (
            <View style={styles.container}>
                {decks.length > 0
                    ? <FlatList data={decks} renderItem={this.renderDeck.bind(this)} 
                            keyExtractor={(item, index) => item.title} />
                    : <Text style={styles.emptyMessage}>Nenhum deck cadastrado</Text>
                }
            </View>
        )
    }
    renderDeck({item}) {
        return (
            <TouchableOpacity style={styles.deckItem} onPress={() => this.props.onPressItem(item)} >
                <Text style={styles.deckTitle}>{item.title}</Text>
                <Text style={styles.cardCounter}>{item.cards.length} cards</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center'
    },
    deckItem: {
        padding: 15,
        alignItems: 'center'
    },
    deckTitle: {
        fontSize: 16
    },
    cardCounter: {
        color: '#666'
    },
    emptyMessage: {
        fontSize: 18,
        alignSelf: 'center'
    }
})

function mapStateToProps(state) {
    return {
        decks: Object.values(state.decks)
    }
}

export default connect(mapStateToProps, { listDecks })(DeckList)