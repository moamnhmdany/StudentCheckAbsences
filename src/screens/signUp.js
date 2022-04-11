import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";
import { React, useEffect, useState, useRef } from "react";
import ButtonSignUp from "../components/button";
import TextInput2 from "../components/textInput";
import school2 from "../../assets/school.png";
import Constants from "expo-constants";
import * as SQLite from "expo-sqlite";
let width = Dimensions.get("screen").width;
let height = Dimensions.get("screen").height;
function openDatabase() {
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
const signUp = (props) => {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");

  const db = openDatabase();
  useEffect(() => {
    console.log("create");
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS users5( userId INTEGER PRIMARY KEY  ,  usersName  TEXT NULL,usersPassword  TEXT NULL,usersEmail  TEXT NULL) ",
        null,
        () => {
          console.log("CREATE done");
        },
        (err) => {
          console.log("creat11111 err==> ", err);
        }
      );
    });
  }, []);

  const insertUser = () => {
    console.log("i am fine ");
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO users5 (usersName , usersPassword, usersEmail) VALUES(?,?,?)",
        [name, pass, email],
        () => {
          console.log("table is inserted");
          props.navigation.replace("collage");
        },
        (txObj, err) => {
          console.log("insert err==> ", err);
        }
      );
    });
  };

  let a = 2;
  let b = 5;
  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        "select * from users5",
        [],
        (_, { rows: { _array } }) => {
          console.log("arr==>", _array);
        },
        (err) => {
          console.log("select err ==> ", err);
        }
      );
    });
  });

  return (
    <ScrollView style={styles.SignUpStyle}>
      <View style={styles.img2Containar}>
        <Image source={school2} style={styles.img2} />
        <Text style={{ margin: 1, fontSize: 39, opacity: 0.4, marginTop: 40 }}>
          انشاء حساب
        </Text>
      </View>

      <View style={{ margin: 10, height: height }}>
        <Text>الاسم الكامل</Text>
        <TextInput2
          onChangeText1={(text) => {
            setName(text.replace(/\s/g, ""));
          }}
          value1={name}
        />
        <Text>الايميل</Text>
        <TextInput2
          onChangeText1={(text) => {
            setEmail(text.replace(/\s/g, ""));
          }}
          value1={email}
        />
        <Text>الرمز السري</Text>
        <TextInput2
          onChangeText1={(text) => {
            setPass(text);
          }}
          value1={pass}
          secureTextEntry1={true}
        />
        <ButtonSignUp
          title1={"انشاء"}
          style={{ margin: 33, height: 44 }}
          // values={{val1:a,val2:b}}
          //values ={firstName:firs....,...}
          onpressBtn={() => {
            insertUser();
            // console.warn('done')
          }}
        />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  SignUpStyle: {
    flex: 1,
    //padding: 10,
    //margin: 10,
    width: width,
    height: height,
    // backgroundColor: "red",
  },
  img2: {
    width: "50%",
    height: "50%",
    resizeMode: "contain",
  },
  img2Containar: {
    alignItems: "center",
    margin: 20,
    height: 200,
  },
});
export default signUp;
