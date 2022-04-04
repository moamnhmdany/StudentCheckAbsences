import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'

const card = () => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "80%",
    shadowColor: "black",
    elevation: 5,
    borderRadius: 10,
    padding: 20,
  },
});

export default card