import { View, Image,StyleSheet ,TouchableOpacity,Dimensions} from 'react-native';
import React from 'react';
import classroom  from '../../assets/classroom.png';
import menu from '../../assets/menu.png'
let widthD = Dimensions.get('window').width;
let heightD = Dimensions.get('window').height;
const header = props => {
  return (
    <View style={styles.headerStyle}>
      <TouchableOpacity
      onPress={()=>{
        props.navigation55.toggleDrawer();

      }}
      >
        <Image
        style={styles.menuStyle}
        source={menu}/>
      </TouchableOpacity>
    <Image 
     source={classroom}
     style={styles.img3}
    />

    </View>
  )
}
const styles = StyleSheet.create({
  headerStyle:{
    justifyContent:'center',
    alignItems:'center',
  
    borderWidth:0,
    borderBottomEndRadius:40,
    borderBottomStartRadius:40,
    borderColor:'white',
    height :'30%',
    backgroundColor:'#FF6969',
    
    
  },
  img3:{
    width:'50%',
    height:'50%',
     resizeMode:'center'
  },
  menuStyle:{
    width:33,
    height:33,
    marginRight:widthD/1.3,
  }
})
export default header