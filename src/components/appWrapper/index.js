import {  SafeAreaView } from 'react-native'
import React from 'react'
import styles from './styles'
const AppWrapper = ({children}) => {
  return (
    <SafeAreaView style={styles.container}>
    {children}
    </SafeAreaView>
  )
}

export default AppWrapper