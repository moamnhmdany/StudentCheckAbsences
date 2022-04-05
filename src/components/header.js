import { View, Image,StyleSheet } from 'react-native'
import React from 'react'
import classroom  from '../../assets/classroom.png'
const header = () => {
  return (
    <View style={styles.headerStyle}>
    <Image 
     source={classroom}
     style={styles.img3}
    />
    </View>
  )
}
const styles = StyleSheet.create({
  headerStyle:{
    justifyContent:'center',
    alignItems:'center',
    borderWidth:3,
    borderBottomEndRadius:40,
    borderBottomStartRadius:40,
    borderColor:'white',
    height :'30%',
    backgroundColor:'#BF214B',
    
  },
  img3:{
    width:'50%',
    height:'50%',
     resizeMode:'center'
  }
})
export default header