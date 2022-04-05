import { View, Text,StyleSheet,FlatList } from 'react-native'
import {React,useState} from 'react'
import Header from '../components/header'
import ItemComponent from '../components/ItemComponent'
import {collageDateNames} from '../data/collageDateName'
const collage = () => {

  console.log('length : ===>',collageDateNames.length)
 
 const rederItem1=(x)=>{
   return(
    <ItemComponent
    idCol={x.item.collageName}    
    Url1={x.item.imageUrl}
   />
   )
 }   
  return (
    <View style={styles.collageStyle}>
      <Header />
      <FlatList
      
       data={collageDateNames}
       renderItem={rederItem1}
       numColumns={2}
      />
    </View>
  )
}
const styles= StyleSheet.create({
collageStyle:{
  flex:1,
},
});

export default collage ;