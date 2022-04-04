import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import Header from '../components/header'
const collage = () => {
  return (
    <View style={styles.collageStyle}>
      <Header />
    </View>
  )
}
const styles= StyleSheet.create({
collageStyle : {
flex:1,
}
})
export default collage