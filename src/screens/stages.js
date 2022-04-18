import { View, Text,StyleSheet,FlatList } from 'react-native'
import {React,useState} from 'react'
import Header from '../components/header'
import ItemComponent from '../components/ItemComponent'
import {StagesNames} from '../data/StagesNames'

const stages = props => {
  const IdDepart111 = props.navigation.getParam('departId');
  
  console.log('IdDepart111==>',IdDepart111);

  const filterStaged = StagesNames.filter(element=> element.IdDepart==IdDepart111);
  console.log(filterStaged);
  console.log('length : ===>',StagesNames.length)
 
 const rederItem1=(x)=>{
   return(
    <ItemComponent
    idCol={x.item.StagesName}    
    Url1={x.item.StageImgUrl}
    onPress={()=>{
      console.log('go to stages')
     // switch x.item.DpartmentId
      if(x.item.IdDepart==1){
        props.navigation.navigate('group',{StageId:x.item.StagesId})
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
      
       data={filterStaged}
       renderItem={rederItem1}
       numColumns={2}
       keyExtractor={item=>item.StagesId}
      />
    </View>
  )
}
const styles= StyleSheet.create({
collageStyle:{
  flex:1,
},
});

stages.navigationOptions = {
  headerShown: false,
}


export default stages ;