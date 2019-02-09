import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Add2List, EditList } from "../redux/actions";

import colors from "../styles/colors";
import transparentHeaderStyle from "../styles/navigation";

import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Dropdown } from "react-native-material-dropdown";

import InputField from "../components/InputField";

import user from "../img/user.png";

const data = [
  {
    value: "Online"
  },
  {
    value: "Offline"
  },
  {
    value: "Unknown"
  }
];

class User extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerStyle: transparentHeaderStyle,
    headerTintColor: colors.black
  });

  state = {
    id: -1,
    name: "Enter name ...",
    job: "Enter job ...",
    age: "Enter user age ...",
    status: "Unknown"
  };
  setName = name => {
    this.setState({ name });
  };
  setJob = job => {
    this.setState({ job });
  };
  setAge = age => {
    this.setState({ age });
  };
  setStatus = status => {
    this.setState({ status });
  };
  handlePress = () => {
    const { userList } = this.props;
    const { state } = this;
    if (this.state.id == -1) {
      this.setState({ id: userList.length }, () =>
        this.props.Add2List(this.state)
      );
    } else {
      const filteredList = userList.filter(item => item.id !== this.state.id);
      const newList = [state].concat(filteredList);
      this.props.EditList(newList);
    }
    this.props.navigation.navigate("UserList");
  };
  componentDidMount() {
    if (this.props.navigation.state.params) {
      const {
        id,
        name,
        job,
        age,
        status
      } = this.props.navigation.state.params.item;
      this.setState({
        id,
        name,
        job,
        age,
        status
      });
    }
  }
  render() {
    const { name, job, age, status } = this.state;
    return (
      <View style={styles.wrapper}>
        <InputField
          placeholder={"name"}
          handleText={this.setName}
          value={name}
          label={"name:"}
          image={user}
        />
        <InputField
          placeholder={"job"}
          handleText={this.setJob}
          value={job}
          label={"job:"}
          image={user}
        />
        <InputField
          placeholder={"age"}
          handleText={this.setAge}
          value={age.toString()}
          label={"age:"}
          image={user}
        />
        <View style={styles.dropdown}>
          <Dropdown
            label="Status"
            data={data}
            value={status}
            onChangeText={this.setStatus}
          />
        </View>
        <TouchableOpacity onPress={this.handlePress}>
          <View style={styles.submitButton}>
            <Text style={styles.submitText}>Submit</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {},
  submitButton: {
    height: 50,
    backgroundColor: "#0984e3",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50
  },
  submitText: {
    color: "#fff",
    fontSize: 20
  },
  dropdown: {
    marginLeft: 10,
    width: "90%"
  }
});

const mapStateToProps = state => {
  return {
    userList: state.list ? state.list : []
  };
};

const mapDispatchToProps = dispatch => {
  return {
    Add2List: bindActionCreators(Add2List, dispatch),
    EditList: bindActionCreators(EditList, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
