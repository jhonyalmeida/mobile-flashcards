import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { Platform, StyleSheet, Text, 
         View, StatusBar, AsyncStorage } from 'react-native'
import { StackNavigator } from 'react-navigation'
import { Constants } from 'expo'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import MainView from './components/MainView'
import DeckView from './components/DeckView'
import AddQuestion from './components/AddQuestion'
import Quiz from './components/Quiz'
import Results from './components/Results'
import reducer from './core/reducer'
import { setLocalNotification } from './core/notification'
import { white, blue } from './core/styles'

const store = createStore(reducer, applyMiddleware(thunk))

function navigationOptions(title) {
  return ({ navigation }) => ({
    title,
    headerTintColor: white,
    headerStyle: {
      backgroundColor: blue,
    },
    headerRight: <MaterialCommunityIcons name="cards-outline" 
                    size={30} color="white" style={{marginRight: 10}}
                    onPress={() => navigation.navigate('mainView')} />
  })
}

const MainNavigator = StackNavigator({
  mainView: {
    screen: MainView,
    navigationOptions: {
      header: null
    }
  },
  deckView: {
    screen: DeckView,
    navigationOptions: navigationOptions('Deck Details')
  },
  addQuestionView: {
    screen: AddQuestion,
    navigationOptions: navigationOptions('New Question')
  },
  quizView: {
    screen: Quiz,
    navigationOptions: navigationOptions('Quiz')
  },
  resultsView: {
    screen: Results,
    navigationOptions: navigationOptions('Results')
  }
})

function MainStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification()
  }
  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <MainStatusBar backgroundColor={blue} barStyle="light-content" />
          <MainNavigator />
        </View>
      </Provider>
    )
  }
}
