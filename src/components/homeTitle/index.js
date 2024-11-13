import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import colors from '../../theme/colors'

const HomeTitles = ({title,subtitle, onSubtitlePress, iconSource}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
     
      <TouchableOpacity onPress={onSubtitlePress}  style={{flexDirection:'row'}}> 
      
        <Text style={styles.subtitle}>{subtitle}</Text>
        {iconSource && <Image source={iconSource} style={styles.icon} />}
      </TouchableOpacity>
    
    
    </View>
  )
}


const styles = StyleSheet.create({
   
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:15,
        marginTop:15,
        alignItems:'center'
    },
    title:{
        fontSize:22,
        fontWeight:'700',
        color:colors.black
    },
    subtitle:{
        fontSize:18,
        fontWeight:'600',
        color:colors.reddish
    },
    subview:{
         flexDirection:'row',
         alignItems:'center'
    },
    icon: {
        width: 20,   
        height: 20,   
        tintColor:colors.reddish 
    },

})
export default HomeTitles