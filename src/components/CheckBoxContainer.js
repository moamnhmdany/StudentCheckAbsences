import { View, Text, StyleSheet } from "react-native";
import { React, useState } from "react";
import Checkbox from "expo-checkbox";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const CheckBoxContainer = ({ value, onValueChange, colorCheck }) => {
  return (
    <View style={{ marginLeft: 11.9, borderRightWidth: 1, padding: 8 ,borderColor:'#d2d5d9'}}>
      <Checkbox
        style={styles.checkbox}
        value={value}
        onValueChange={onValueChange}
        color={colorCheck}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  checkbox: { width: 33, height: 33, borderRadius: 55 },
});
export default CheckBoxContainer;
