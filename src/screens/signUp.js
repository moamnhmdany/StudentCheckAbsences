import { View, Text ,Image,StyleSheet} from 'react-native'
import React from 'react'
import ButtonSignUp from '../components/button';
import TextInput2 from '../components/textInput';
import school2 from '../../assets/school.png';

const signUp = () => {
  return (
    <View style={styles.SignUpStyle}>

     <View style={styles.img2Containar}>
     <Image  
      source={school2}
      style={styles.img2}
      />
      <Text style={{margin:20,fontSize:39,opacity:.4}}>انشاء حساب</Text>
     </View>

     <View>
       <Text>الاسم الكامل</Text>
       <TextInput2 />
       <Text>الايميل</Text>
       <TextInput2 />
       <Text>الرمز السري</Text>
       <TextInput2 secureTextEntry1={true} />
       <ButtonSignUp title1={'انشاء'}
       style={{margin:33,height:44}}
       />
     </View>
    </View>
  )
}
const styles = StyleSheet.create( {
  SignUpStyle:{
   flex :1,
   padding:10,
   margin:10,
  },
  img2:{
    width:150,
    height:150,
  },
  img2Containar:{
    alignItems:"center",
    margin:20,
    marginBottom:40,
     
  }
}
);
export default signUp