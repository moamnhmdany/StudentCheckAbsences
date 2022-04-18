import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { React, useState, useEffect } from "react";
import school from "../../assets/school.png";
import Button1 from "../components/button";
import TextInputEmali from "../components/textInput";
import TextInputPass from "../components/textInput";
import Constants from "expo-constants";
import * as SQLite from "expo-sqlite";
function  openDatabase() {
  if (Platform.OS === "web") {
    return {
      transaction: () => {
        return {
          executeSql: () => {},
        };
      },
    };
  }

  const db = SQLite.openDatabase("studentDb2.db");
  return db;
}
const login = (props) => {
  const db = openDatabase();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [isCheck, setIsCheck] = useState(false);

  const  checkAuth =async () => {
   await console.log("check work well !!");

   await db.transaction(async (tr) => {
    await   tr.executeSql(
        "select usersEmail,usersPassword  from users5 where usersEmail=? and usersPassword =?  ",
        [email, pass],
        (_, { rows: { _array } }) => {
          console.log(_array);
          if(_array.length > 0){
           // setIsCheck(true);
            props.navigation.replace('main')
          }else{
            //setIsCheck(false);
            console.warn('wrong password or email')
          }
           
          console.log("arr==> ", _array.length);
          console.log("is checke ==> ", isCheck);
          
        },
        (err) => {
          console.log("select 44 error==> ", err);
        }
      );
    });
  };
  return (
    <View style={styles.loginScreen}>
      <View style={styles.imageContainrt}>
        <Image style={styles.image} source={school} />
        <Text style={{ fontSize: 25 }}> تسجيل الدخول</Text>
      </View>

      <View style={styles.textContainer}>
        <Text style={{ margin: 7 }}>الايميل</Text>
        <TextInputEmali
          placeholder1="  ايميل المستخدم"
          onChangeText1={(text) => {
            setEmail(text);
          }}
          value1={email}
        />
        <Text style={{ margin: 7 }}>الرمز السري</Text>

        <TextInputPass
          placeholder1="  الرمز السري"
          secureTextEntry1={true}
          onChangeText1={(text) => {
            setPass(text);
          }}
          value1={pass}
        />
      </View>
      <View style={styles.btnContaier}>
        <Button1
          title1={" تسجيل الدخول"}
          style={styles.btnStyle1}
          onpressBtn={checkAuth}
        />
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("signUp");
          }}
        >
          <Text style={{ margin: 7, fontSize: 20, opacity: 0.4 }}>
            انشاء حساب جديد
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginScreen: {
    flex: 1,
    backgroundColor: "#fafcfb",
  },
  image: {
    width: "50%",
    height: "60%",
    margin: 30,
    resizeMode: "contain",
  },
  textContainer: {
    padding: 10,
    marginBottom: 30,
    padding: 10,
  },
  imageContainrt: {
    alignItems: "center",
    margin: 20,
    height: 200,
  },
  btnContaier: {
    padding: 20,
    margin: 6,
    height: 140,
  },
  btnStyle1: {
    height: 44,
  },
});
login.navigationOptions = {
  headerShown: false,
}
export default login;
