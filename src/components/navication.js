import { createStackNavigator} from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import * as Screens from "../screens";
import { createDrawerNavigator, DrawerItems } from "react-navigation-drawer";
import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import {
  Container,
  Content,
  Header,
  Body,
  NativeBaseProvider,
} from "native-base";

const CustomDrawerContentComponent = (props) => (
  <View style={{ flex: 1, flexDirection: "row", marginTop: 40 }}>
    <DrawerItems
      itemStyle={{ margin: 4, width: "100%" }}
      itemsContainerStyle={{ width: "100%" }}
      {...props}
    />
  </View>
);

const ScreensApp = createStackNavigator({
  login: { screen: Screens.LoginScreen },
  signUp: { screen: Screens.SignUpScreen },
  main:{screen:Screens.MainScreen,},
  collage: { screen: Screens.CollageScreen },
  department: { screen: Screens.DepartmentsScreen },
  stage: { screen: Screens.StagesScreen },
  group: { screen: Screens.GroupScreen },
  lecture: { screen: Screens.LecturesScreen },
  check:{screen:Screens.CheckScreen,}
});
// const logStack = createStackNavigator({

// })
const SideNav = createDrawerNavigator(
  {
    
    Main: { screen: ScreensApp, navigationOptions: { title: "الرئيسية" } },
    
    Collage: {
      screen: Screens.CollageScreen,
      navigationOptions: { title: "الكليات" },
    },
    logOut: {
      screen: ScreensApp,
      navigationOptions: { title: "تسجيل خروج" },
    },
  },

  {
    drawerPosition: "right",
    drawerWidth: "50%",
    contentComponent: CustomDrawerContentComponent,
  }
);

const styles = StyleSheet.create({});

const MainNav = createAppContainer(SideNav);
export default MainNav;
