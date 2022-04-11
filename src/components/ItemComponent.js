import { View, Text ,Image,StyleSheet,TouchableOpacity,Dimensions} from 'react-native';
import React from 'react';
import Card from '../components/card';
import gg from '../../assets/manager.png'
let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;



const ItemComponent = props => {
  return (
    <View style={styles.itemContainer}>
       <TouchableOpacity 
       onPress={props.onPress}
       >
       <Card style={styles.card1}>
         <Image
          source={props.Url1}
          style={styles.imgCol}
         />
       <Text>{props.idCol}</Text>
       </Card>
       </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  itemContainer:  {
     
   // backgroundColor:'red',
    //alignSelf:"center",
    width:width/2.5,
    height:height/5,
   alignContent:'center',
   marginLeft:(width-(width/2.5*2))/3,
   marginTop:height/50,
   borderRadius:width/30,
},
card1:{
  width:width/2.5,
    height:height/5,
  justifyContent:'center',
  alignItems:'center',
  //backgroundColor:'pink',
  
},
imgCol:{
  resizeMode:'center',
  margin:10,
  width:width/5,
  height:height/12,

},

})

export default ItemComponent