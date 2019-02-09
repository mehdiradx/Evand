import React, { Component } from "react";
import { StyleSheet, TextInput, View, Image, Text } from "react-native";

export default class InputField extends Component {
  render() {
    return (
      <View style={[this.props.style, styles.container]}>
        <View>
          <Text>{this.props.label}</Text>
        </View>
        <View style={styles.inputBoxContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={this.props.image}
              style={[styles.imageStyle, this.props.imageStyle]}
            />
          </View>
          <TextInput
            keyboardType="default"
            maxLength={70}
            style={styles.text}
            placeholder={this.props.placeholder}
            underlineColorAndroid={"transparent"}
            onChangeText={text => this.props.handleText(text, this.props.value)}
            value={this.props.value}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginLeft: 10,
    width: "90%"
  },
  inputBoxContainer: {
    flexDirection: "row",
    margin: 3,
    borderColor: "#9e9e9e",
    borderRadius: 5,
    height: 50,
    paddingLeft: 8,
    borderWidth: 1
  },
  imageContainer: {
    margin: 5,
    marginTop: 15
  },
  imageStyle: {
    width: 15,
    height: 15
  },
  text: {
    fontSize: 18,
    width: "100%",
    color: "#9295A4"
  }
});
