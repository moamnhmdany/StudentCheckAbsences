import { View, Text,Image ,StyleSheet,TouchableOpacity} from 'react-native';
import React from 'react';
 import school from '../../assets/school.png';
 import Button1 from '../components/button';
 import TextInputEmali from '../components/textInput';
 import TextInputPass from '../components/textInput';

const login = () => {
  return (
    <View style ={styles.loginScreen}>

     <View style={styles.imageContainrt}>
     <Image 
      style = {styles.image}
      source={school} />
      <Text style={{fontSize:25,}}> تسجيل الدخول</Text>

     </View>
     
       
      <View style={styles.textContainer}>
        <Text style={{margin:7}}>الايميل</Text>
        <TextInputEmali placeholder1='  ايميل المستخدم' />
        <Text style={{margin:7}} >الرمز السري</Text>

        <TextInputPass
        secureTextEntry1={true}
        placeholder1='  الرمز السري للمستخدم'/>
      </View>
      <View style={styles.btnContaier}>
        <Button1 
        title1={' تسجيل الدخول' }
        style={styles.btnStyle1}
        />
        <TouchableOpacity>
        <Text style={{margin:7,fontSize:20,opacity:.4}}>انشاء حساب جديد</Text></TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  loginScreen:{
    flex : 1,   
    backgroundColor:'#fafcfb' 
  },
  image:{
    width : '50%',
    height : '60%',
    margin:30,
    resizeMode:'contain'
  },
  textContainer:{
  padding :10,
  marginBottom:30,
   padding:10,
  },
  imageContainrt:{
    alignItems:'center',
    margin:10,
   height:'30%',
  },
  btnContaier:{
    padding:20,
    margin :6,
    height:140
  },
  btnStyle1:{
    height:44
  }
})
export default login