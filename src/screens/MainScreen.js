import react from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";

const MainScreen = (props) => {
  return (
   
      <View style={styles.screen}>
        <Text style={{ fontSize: 25,position:'absolute',bottom:'80%' ,fontFamily:'Araz-Persian'}}>
      { ' غيابات طلبة جامعة الموصل '}
        </Text>
        <Image
          source={require("../../assets/analytics.png")}
          style={styles.image}
          resizeMode="cover"
        />
        
        <TouchableOpacity  style={styles.button} onPress={()=>{props.navigation.navigate('collage')}} >
          <Text style={styles.text}>دخول</Text>
        </TouchableOpacity>

      </View>
   
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    position: 'absolute',
    bottom:'20%',
    width: 300,
    height: 300,
    marginVertical: 30,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 12,
    elevation: 3,
    width:'74%',
    backgroundColor: "green",
    position:'absolute',
    bottom:'10%',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});

MainScreen.navigationOptions = {
  headerShown: false,
}
export default MainScreen;
