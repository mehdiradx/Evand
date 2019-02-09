import React, { Component } from "react";
import PropTypes from "prop-types";

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform
} from "react-native";

import ListItemStatus from "./ListItemStatus";
import ListItemDesc from "./ListItemDesc";

export default class RoundedButton extends Component {
  render() {
    const { name, job, age, status, handleOnPress } = this.props;
    return (
      <TouchableOpacity onPress={handleOnPress}>
        <View style={styles.listWrapper}>
          <View style={styles.listRow}>
            <ListItemStatus status={status} />
            <Text style={styles.nameTextStyle}>{name}</Text>
          </View>
          <View style={styles.listRow}>
            <ListItemDesc>job: {job}</ListItemDesc>
            <ListItemDesc>age: {age}</ListItemDesc>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

RoundedButton.propTypes = {
  name: PropTypes.string.isRequired,
  job: PropTypes.string,
  handleOnPress: PropTypes.func.isRequired,
  age: PropTypes.number,
  status: PropTypes.number
};

const styles = StyleSheet.create({
  listWrapper: {
    flex: 1,
    height: 75,
    backgroundColor: "#fff",
    padding: 10,
    margin: 5,
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowColor: "#cacaca",
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: Platform.OS === "android" ? 10 : undefined
  },
  listRow: { flex: 1, flexDirection: "row" },
  nameTextStyle: { fontSize: 20, color: "#000", fontWeight: "bold" }
});
