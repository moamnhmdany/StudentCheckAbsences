import {  Button ,StyleSheet,View,Text,TouchableOpacity} from 'react-native'
import React from 'react'

const button = (props) => {
  return (
    <View >
     <TouchableOpacity
     style={{...styles.btn1,...props.style}}
     >
       
       <Text style={{fontSize:20,color:'white'}}> 
       {props.title1}
       </Text>
     </TouchableOpacity>
    </View>
    
     
  )
}
const styles = StyleSheet.create({
  btn1:{
    backgroundColor:'#BF214B',
    justifyContent:'center',
    alignItems:'center'    ,
    borderRadius:12,
  }
})
export default button