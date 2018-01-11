import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { Platform, StyleSheet, Text, View, AsyncStorage } from 'react-native'
import { StackNavigator } from 'react-navigation'
import MainView from './components/MainView'
import DeckView from './components/DeckView'
import AddQuestion from './components/AddQuestion'
import Quiz from './components/Quiz'
import Results from './components/Results'
import reducer from './core/reducer'
import { setLocalNotification } from './core/notification'

const store = createStore(reducer, applyMiddleware(thunk))

const MainNavigator = StackNavigator({
  mainView: {
    screen: MainView
  },
  deckView: {
    screen: DeckView
  },
  addQuestionView: {
    screen: AddQuestion
  },
  quizView: {
    screen: Quiz
  },
  resultsView: {
    screen: Results
  }
})

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification()
  }
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <MainNavigator />
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
})
