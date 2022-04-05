import { View, Text ,Image,StyleSheet} from 'react-native';
import React from 'react';
import Card from '../components/card';
const ItemComponent = props => {
  return (
    <View style={styles.itemContainer}>
       
       
      <Text>{props.idCol}</Text>
     
    </View>
  )
}

const styles = StyleSheet.create({
  itemContainer:  {
     
    backgroundColor:'red',
   
    
}
})

export default ItemComponent