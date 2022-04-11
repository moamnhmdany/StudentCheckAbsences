import { View, TextInput,StyleSheet } from 'react-native'
import React from 'react'

const TextInputInput = ({placeholder1,secureTextEntry1,onChangeText1,value1}) => {
  return (
    <View>
      <
        TextInput
        style={styles.text}
        placeholder={placeholder1}
        secureTextEntry={secureTextEntry1}
        onChangeText={onChangeText1}
        value ={value1}
      />

    </View>
  )
}
const styles = StyleSheet.create({
  text:{
    margin:5 ,
    backgroundColor: 'white',
    borderRadius: 8,
    height:40,
    borderColor: '#e6ebe7',
    borderWidth: 2,
     elevation:99
  }
})
export default TextInputInput