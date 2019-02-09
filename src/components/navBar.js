import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet, NetInfo } from "react-native";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ChangeStatus } from "../redux/actions";

// const getRandomInt = function(max) {
//   return Math.floor(Math.random() * max);
// };

class NavBar extends Component {
  state = { status: "" };
  componentDidMount() {
    const { userList } = this.props;
    // this.interval = setInterval(() => {
    //   const randomUserId = getRandomInt(userList.length);
    //   const randomUserStatus = getRandomInt(2);
    //   const filteredList = userList.filter(item => item.id !== randomUserId);
    //   const filteredItem = userList.filter(item => item.id == randomUserId);
    //   filteredItem[0].status = randomUserStatus;
    //   const newList = filteredItem.concat(filteredList);
    //   this.props.ChangeStatus(newList);
    // }, 10000);

    NetInfo.isConnected.addEventListener(
      "connectionChange",
      this.handleConnectionChange
    );
    NetInfo.isConnected.fetch().done(isConnected => {
      this.setState({ status: isConnected });
    });
  }
  componentWillUnmount() {
    // clearInterval(this.interval);
    NetInfo.isConnected.removeEventListener(
      "connectionChange",
      this.handleConnectionChange
    );
  }

  handleConnectionChange = isConnected => {
    this.setState({ status: isConnected });
    if (isConnected) {
      alert(` connection status is chnaged to ${isConnected} `);
      const { userList } = this.props;
      // TODO: call API here and send userList as an updated array
    }
  };

  render() {
    const { location, text, color, icon } = this.props;
    const marginPosition =
      location === "right" ? { marginRight: 20 } : { marginLeft: 20 };
    let content;
    if (text) {
      content = (
        <Text style={[{ color }, marginPosition, styles.buttonText]}>
          {text}
        </Text>
      );
    } else if (icon) {
      content = <View style={marginPosition}>{icon}</View>;
    }
    return <View>{content}</View>;
  }
}

NavBar.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.object,
  location: PropTypes.string,
  color: PropTypes.string
};

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 16
  }
});

const mapStateToProps = state => {
  return {
    userList: state.list ? state.list : []
  };
};

const mapDispatchToProps = dispatch => {
  return {
    ChangeStatus: bindActionCreators(ChangeStatus, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
