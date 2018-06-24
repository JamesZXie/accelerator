import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';

class MenuItem extends React.Component{
  render() {
    return(
      <TouchableOpacity
        style={styles.container}
        activeOpacity={.5}
        onPress={this.props.onIssueClicked}>
        <Image source={require("../../../assets/Dashboard/menuItem.png")}/>
      </TouchableOpacity>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 81,
    marginTop: 2,
  }
})

export default MenuItem;
