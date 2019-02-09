import React, { Component } from "react";
import colors from "../styles/colors";
import ListItem from "../components/ListItem";
import transparentHeaderStyle from "../styles/navigation";
import NavBar from "../components/navBar";
import { connect } from "react-redux";

import {
  View,
  StyleSheet,
  FlatList,
  Text,
  Platform,
  TouchableOpacity
} from "react-native";

class UserList extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerLeft: <NavBar location="left" text="Evand" />,
    headerStyle: transparentHeaderStyle,
    headerTintColor: colors.Black
  });

  onListitemPress = item => {
    this.props.navigation.navigate("User", { item });
  };
  addUserPress = () => {
    this.props.navigation.navigate("User");
  };
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={{ flex: 1 }}>
          <FlatList
            data={this.props.userList}
            renderItem={({ item }) => (
              <ListItem
                name={item.name}
                job={item.job}
                age={item.age}
                status={item.status}
                handleOnPress={() => this.onListitemPress(item)}
              />
            )}
            keyExtractor={item => item.id}
          />
        </View>
        <View style={styles.addUser}>
          <TouchableOpacity onPress={this.addUserPress}>
            <Text style={styles.addUserText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  addUser: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: "#00aa00",
    position: "absolute",
    right: 50,
    bottom: 50,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowColor: "#9e9e9e",
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: Platform.OS === "android" ? 10 : undefined
  },
  addUserText: {
    textAlign: "center",
    fontSize: 32,
    color: "#fff"
  }
});

const mapStateToProps = state => {
  return {
    userList: state.list ? state.list : []
  };
};

export default connect(mapStateToProps)(UserList);
