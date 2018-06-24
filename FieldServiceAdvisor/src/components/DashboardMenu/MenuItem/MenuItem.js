import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

class MenuItem extends React.Component{
  render() {
    return(
      <View style={styles.container}>
        <Image source={require("../../../assets/Dashboard/menuItem.png")}/>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 81,
    backgroundColor: "#C3C3C3",
    marginTop: 2
  }
})

export default MenuItem;
