import { View, Text, SafeAreaView } from 'react-native'
import React, { Children } from 'react'

const AppWrapper = ({children}) => {
  return (
    <SafeAreaView style={{flex:1}}>
    {children}
    </SafeAreaView>
  )
}

export default AppWrapper