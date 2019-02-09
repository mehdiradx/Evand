import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ListItemStatus(props) {
  const backgroundColor = props.status == "Online" ? "#00dd00" : "#dd0000";
  if (props.status != "Unknown") {
    return (
      <View style={[styles.wrapper, { backgroundColor }]}>
        <Text style={styles.textStyle}>{props.status}</Text>
      </View>
    );
  }
  return null;
}

const styles = StyleSheet.create({
  wrapper: {
    height: 25,
    borderRadius: 10,
    padding: 2,
    marginLeft: 10
  },
  textStyle: { color: "#fff", textAlign: "center", fontWeight: "bold" }
});
