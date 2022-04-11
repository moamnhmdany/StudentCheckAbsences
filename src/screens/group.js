import { View, Text,StyleSheet,FlatList } from 'react-native'
import {React,useState} from 'react'
import Header from '../components/header'
import ItemComponent from '../components/ItemComponent'
import {GroupNames} from '../data/GroupsName'

const group = props => {
  const IdStage222 = props.navigation.getParam('StageId');
  
  console.log('IdStage222==>',IdStage222);

  const filterGroup = GroupNames.filter(element=> element.stageld==IdStage222);
  console.log(filterGroup);
  console.log('length : ===>',GroupNames.length)
 
 const rederItem1=(x)=>{
   return(
    <ItemComponent
    idCol={x.item.groupName}    
    Url1={x.item.groupImgUrl}
    onPress={()=>{
      console.log('go to stages')
     // switch x.item.DpartmentId
      // if(x.item.departmentId==1){
      //   props.navigation.navigate('stage',{departId:x.item.departmentId})
      // }
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
      
       data={filterGroup}
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

group.navigationOptions = {
  headerShown: false,
}



export default group;