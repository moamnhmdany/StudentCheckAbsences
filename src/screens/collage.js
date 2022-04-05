import { View, Text,StyleSheet,FlatList } from 'react-native'
import React from 'react'
import Header from '../components/header'
import ItemComponent from '../components/ItemComponent'
import {collageDateNames} from '../data/collageDateName'
const collage = () => {
  
 const rederItem1=(x)=>{
   return(
    <ItemComponent
    idCol={x.item.collageName}
   />
   )
 }   
  return (
    <View style={styles.collageStyle}>
      <FlatList
      style = {{borderWidth:3}}
       data={collageDateNames}
       renderItem={rederItem1}
      />
      <Text>nothnnnnnnnnnnnnnnn</Text>
    </View>
  )
}
const styles= StyleSheet.create({
collageStyle:{
  flex:1,
margin: 30,
borderWidth:3
},
});

export default collage ;