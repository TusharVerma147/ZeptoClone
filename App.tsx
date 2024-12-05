import { View, Text, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import StackRoute from './src/navigator'
import { Provider } from 'react-redux'
import { Store } from './src/redux/Store'
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

const persistor = persistStore(Store)

const App = () => {
  const [initializing, setInitializing] = useState(true)
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null) 

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged((user: FirebaseAuthTypes.User | null) => {
      setUser(user) 
      if (initializing) setInitializing(false)
    })

    return unsubscribe
  }, [initializing])

  if (initializing) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  return (
    <Provider store={Store}>
      <PersistGate persistor={persistor}>
        <StackRoute />
      </PersistGate>
    </Provider>
  )
}

export default App
