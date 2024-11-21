import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import StackRoute from './src/navigator'
import { Provider } from 'react-redux'
import { Store } from './src/redux/Store'

const App = () => {
  return (
   <Provider store={Store}>  
    <StackRoute/>
   </Provider>

  
  )
}

export default App