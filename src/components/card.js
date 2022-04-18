import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'

const card = (props) => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "80%",
    shadowColor: "black",
    elevation: 2,
    backgroundColor: "#F9F8F8",
    borderRadius: 12,
    padding: 20,
  },
});

export default card