import react from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
  Pressable,
  ImageBackground,
} from "react-native";

const MainScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Image
        source={require("../../assets/attend.png")}
        style={styles.image}
        resizeMode="cover"
      />
      <View
        style={{
          borderWidth: 5,
          borderColor: "#FF6969",
          backgroundColor: "#fafffe",
          width: "100%",
          height: "50%",
          borderTopRightRadius: 66,
          marginBottom: -20,
        }}
      >
        <View
          style={{
            justifyContent: "space-around",
            flexDirection: "row",
            margin: 20,
            position: "absolute",
            top: 20,
            left: -9,
          }}
        >
          <Text
            style={{
              fontSize: 25,
              fontFamily: "Sultan",
              fontWeight: "bold",
              color: "#FF6969",
            }}
          >
            {" غيابات طلبة جامعة الموصل "}
          </Text>
          <Image
            source={require("../../assets/attend.png")}
            style={{ width: 44, height: 44 }}
          />
        </View>
        <Text style={{position:'absolute',top:88,margin:10}}>تطبيق خاص للتحقق من غيابات طلبة جامعة الموصل,لكل الكليات والاقسام ولكافه المراحل</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            props.navigation.navigate("collage");
          }}
        >
          <Text style={styles.text}>دخول</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF6969",
  },
  image: {
    width: 400,
    height: 300,
    marginVertical: 30,
    resizeMode: "contain",
    borderWidth: 3,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 12,
    elevation: 3,
    width: "74%",
    backgroundColor: "#FF6969",
    position: "absolute",
    top: 250,
    width: "95%",
    marginHorizontal: 10,
  },
  text: {
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
    fontSize: 20,
  },
});

MainScreen.navigationOptions = {
  headerShown: false,
};
export default MainScreen;
