import { View, Text } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps';

const Details = () => {
  return (
    <View style={{flex:1, backgroundColor:'white'}}>
    <MapView style={{flex:1}}
  initialRegion={{
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }}
/>
    </View>
  )
}

export default Details