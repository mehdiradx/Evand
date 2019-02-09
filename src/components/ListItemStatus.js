import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ListItemStatus(props) {
  const statusText = props.status ? "on" : "off";
  const backgroundColor = props.status == 1 ? "#00dd00" : "#dd0000";
  if (props.status != -1) {
    return (
      <View style={[styles.wrapper, { backgroundColor }]}>
        <Text style={styles.textStyle}>{statusText}</Text>
      </View>
    );
  }
  return null;
}

const styles = StyleSheet.create({
  wrapper: {
    width: 25,
    height: 25,
    borderRadius: 10,
    padding: 2,
    marginRight: 10
  },
  textStyle: { color: "#fff", textAlign: "center", fontWeight: "bold" }
});
