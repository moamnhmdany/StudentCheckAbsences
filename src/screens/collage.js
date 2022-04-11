import { View, Text,StyleSheet,FlatList } from 'react-native'
import {React,useState} from 'react'
import Header from '../components/header'
import ItemComponent from '../components/ItemComponent'
import {collageDateNames} from '../data/collageDateName'

const collage = props => {

  console.log('length : ===>',collageDateNames.length)
 
 const rederItem1=(x)=>{
   return(
    <ItemComponent
    onPress={()=>{
      console.log('nnnnnnnnnnnn')
     // switch x.item.collageId
      if(x.item.collageId==1){
        props.navigation.navigate('department',{collId:x.item.collageId})
      }
      
    }}
    idCol={x.item.collageName}    
    Url1={x.item.imageUrl}
   />
   )
 }   
  return (
    <View style={styles.collageStyle}>
      <Header
      navigation55={props.navigation}
      />
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

collage.navigationOptions = {
  headerShown: false,
}

export default collage ;