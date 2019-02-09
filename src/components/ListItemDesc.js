import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Status(props) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.textStyle}>{props.children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    margin: 5,
    borderWidth: 1,
    borderColor: "#777",
    borderRadius: 10,
    backgroundColor: "#a9a9a9",
    height: 25,
    paddingLeft: 10,
    paddingRight: 10
  },
  textStyle: { color: "#fff", padding: 2 }
});
