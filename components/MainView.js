import React from 'react'
import { View, Text, FlatList, StyleSheet, Platform } from 'react-native'
import { TabNavigator } from 'react-navigation'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import DeckList from './DeckList'
import AddDeck from './AddDeck'
import api from './../core/api'
import { blue, white } from './../core/styles'

export default function MainView(props) {
    const Tabs = TabNavigator({
        myDecks: {
            screen: () => <DeckList onPressItem={(deck) => props.navigation.navigate('deckView', {deck})} />,
            navigationOptions: {
                tabBarLabel: 'My Decks',
                tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name="cards-outline" size={30} color={tintColor} />
            }
        },
        addNew: {
            screen: () => <AddDeck onAddDeck={(deck) => props.navigation.navigate('deckView', {deck})} />,
            navigationOptions: {
                tabBarLabel: 'New Deck',
                tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name="library-plus" size={30} color={tintColor} />
            }
        }
    }, {
        navigationOptions: {
            header: null
        },
        tabBarOptions: {
            activeTintColor: Platform.OS === 'ios' ? blue : white,
            style: {
                height: 56,
                backgroundColor: Platform.OS === 'ios' ? white : blue,
                shadowColor: 'rgba(0, 0, 0, 0.24)',
                shadowOffset: {
                    width: 0,
                    height: 3
                },
                shadowRadius: 6,
                shadowOpacity: 1
            }
        }
    })

    return (
        <View style={{flex: 1}}>
            <Tabs />
        </View>
    )
}