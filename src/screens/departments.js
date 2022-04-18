import { View, Text,StyleSheet,FlatList } from 'react-native'
import {React,useState} from 'react'
import Header from '../components/header'
import ItemComponent from '../components/ItemComponent'
import {departmentNamesModel} from '../data/departmentNames'

const departments = props => {
  const IdCol = props.navigation.getParam('collId');

  const filterDerpatment = departmentNamesModel.filter(element=> element.collagld==IdCol);
  console.log(filterDerpatment);
  console.log('length : ===>',departmentNamesModel.length)
 
 const rederItem1=(x)=>{
   return(
    <ItemComponent
    idCol={x.item.departmentName}    
    Url1={x.item.departmentImgUrl}
    onPress={()=>{
      console.log('go to stages')
     // switch x.item.DpartmentId
      if(x.item.departmentId==1){
        props.navigation.navigate('stage',{departId:x.item.departmentId})
      }
    }
  }
      /> 
   )
 } 
  
  return (
    <View style={styles.collageStyle}>
      <Header 
            navigation55={props.navigation}
      />
      <FlatList
      
       data={filterDerpatment}
       renderItem={rederItem1}
       numColumns={2}
       keyExtractor={item=>item.departmentId}
      />
    </View>
  )
}
const styles= StyleSheet.create({
collageStyle:{
  flex:1,
},
});

departments.navigationOptions = {
  headerShown: false,
}

export default departments