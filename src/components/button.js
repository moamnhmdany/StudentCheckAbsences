import {  Button ,StyleSheet,View,Text,TouchableOpacity} from 'react-native'
import {React,useRef} from 'react'

const button = (props) => {
   //const {onpressBtn,title1}=props;
  // const forTest=(a,b)=>{
  //   console.log('a+b=>',a+b)
  // }
  
  return (
    <View >
     <TouchableOpacity
     style={{...styles.btn1,...props.style}}
   //  onPress={()=>{forTest(values.val1,values.val2)}}
   onPress={props.onpressBtn}
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
    backgroundColor:'#FF6969',
    justifyContent:'center',
    alignItems:'center'    ,
    borderRadius:12,
  }
})
export default button