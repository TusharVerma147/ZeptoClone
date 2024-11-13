import { View, Text, SafeAreaView } from 'react-native'
import React, { Children } from 'react'

const AppWrapper = ({children}) => {
  return (
    <SafeAreaView style={{flex:1, backgroundColor:'white'}}>
    {children}
    </SafeAreaView>
  )
}

export default AppWrapper