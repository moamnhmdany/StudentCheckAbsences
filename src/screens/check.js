import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { React, useState } from "react";
import Header from "../components/header";
import CheckBoxContainer from "../components/CheckBoxContainer";
import BtnConfirm from "../components/button";

let widthD = Dimensions.get("screen").width;
let hightD = Dimensions.get("screen").height;

const Check = (props) => {
  const headerTable = ["الاسم", "حضور", "غياب", "مجاز"];

  const [data, changeData] = useState([
    {
      idUser: 1,
      nameA: "moamn",
      checkStatuse: false,
      checkStatuse2: false,
      checkStatuse3: false,
    },
    {
      idUser: 2,
      nameA: "moamn",
      checkStatuse: false,
      checkStatuse2: false,
      checkStatuse3: false,
    },
    {
      idUser: 3,
      nameA: "moamn",
      checkStatuse: false,
      checkStatuse2: false,
      checkStatuse3: false,
    },
    {
      idUser: 4,
      nameA: "moamn",
      checkStatuse: false,
      checkStatuse2: false,
      checkStatuse3: false,
    },
    {
      idUser: 5,
      nameA: "moamn",
      checkStatuse: false,
      checkStatuse2: false,
      checkStatuse3: false,
    },
    {
      idUser: 6,
      nameA: "moamn",
      checkStatuse: false,
      checkStatuse2: false,
      checkStatuse3: false,
    },
    {
      idUser: 7,
      nameA: "moamn",
      checkStatuse: false,
      checkStatuse2: false,
      checkStatuse3: false,
    },
  ]);
  const [Ischeck, setCheck] = useState(true);

  const checkBoxItemRender = ({ item }) => {
    return (
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            borderBottomWidth: 1,
            width: widthD / 2.999,
            justifyContent: "center",
            alignItems: "center",
            borderRightWidth: 1,
            borderColor: "#d2d5d9",
          }}
        >
          <Text>{item.nameA}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            borderBottomWidth: 1,
            borderColor: "#d2d5d9",
            width: widthD / 1.4,
          }}
        >
          <CheckBoxContainer
            value={item.checkStatuse}
            onValueChange={(t) => {
              const items = [...data];
              const _item = items.find((e) => e.idUser == item.idUser);
              _item.checkStatuse = t;
              if (_item.checkStatuse) {
                _item.checkStatuse2 = false;
                _item.checkStatuse3 = false;
              }
              changeData(items);
              console.log(items);
            }}
            colorCheck={item.checkStatuse ? "green" : "#347deb"}
          />
          <CheckBoxContainer
            value={item.checkStatuse2}
            onValueChange={(t) => {
              const items = [...data];
              const _item = items.find((e) => e.idUser == item.idUser);
              _item.checkStatuse2 = t;
              if (_item.checkStatuse2) {
                _item.checkStatuse = false;
                _item.checkStatuse3 = false;
              }
              changeData(items);
              console.log(items);
            }}
            colorCheck={item.checkStatuse2 ? "green" : "#347deb"}
          />
          <CheckBoxContainer
            value={item.checkStatuse3}
            onValueChange={(t) => {
              const items = [...data];
              const _item = items.find((e) => e.idUser == item.idUser);
              _item.checkStatuse3 = t;
              if (_item.checkStatuse3) {
                _item.checkStatuse = false;
                _item.checkStatuse2 = false;
              }
              changeData(items);
              console.log(items);
            }}
            colorCheck={item.checkStatuse3 ? "green" : "#347deb"}
          />
        </View>
        <View>
          <TouchableOpacity>
            <Text>تاكيد</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  const HeaderRow = ({ data }) => {
    return (
      <View
        style={
          data == "الاسم" ? styles.headerDataNameStyle : styles.headerDataStyle
        }
      >
        <Text>{data}</Text>
      </View>
    );
  };

  return (
    <View style={styles.CheckContianer}>
      <Header navigation55={props.navigation} />
      <View style={styles.tableStyle}>
        <View style={styles.rowHeaderStyle}>
          {headerTable.map((e, i) => {
            return <HeaderRow key={i} data={e} />;
          })}
        </View>
        <FlatList
          data={data}
          renderItem={checkBoxItemRender}
          style={{
            width: widthD / 1.17,
            height: hightD / 2.2,
            borderWidth: 1,
            borderColor: "#d2d5d9",
          }}
          keyExtractor={(item, index) => {
            return item.idUser;
          }}
        />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <BtnConfirm style={styles.btnConfirmStyle} title1={"تأكيد"} />
        <BtnConfirm style={styles.btnConfirmStyle} title1={"الغاء"} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  CheckContianer: {
    flex: 1,
  },
  tableStyle: {
    margin: 20,
  },
  rowHeaderStyle: {
    flexDirection: "row",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderWidth: 1,
    width: widthD / 1.17,
    borderColor: "#d2d5d9",
  },
  headerDataStyle: {
    borderColor: "#d2d5d9",
    borderLeftWidth: 1,
    borderColor: "#d2d5d9",
    width: widthD / 5.8,
    height: hightD / 14,
    alignItems: "center",
    justifyContent: "center",
  },
  headerDataNameStyle: {
    width: widthD / 3,
    height: hightD / 14,
    alignItems: "center",
    justifyContent: "center",
  },
  btnConfirmStyle: {
    backgroundColor: "#eb4934",
    width: widthD / 3,
    height: hightD / 25,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 33,
  },
});

Check.navigationOptions = {
  headerShown: false,
};
export default Check;
