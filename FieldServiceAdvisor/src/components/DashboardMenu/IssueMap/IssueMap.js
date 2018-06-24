import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

class IssueMap extends React.Component{
  render() {
    return(
      <View style={styles.container}>
        <Image style={styles.map} source={require("../../../assets/Dashboard/dashboardMap.png")} />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 94,
    left: 614,
    width: 320,
    height: "100%",
    backgroundColor: "red",
  },
  map: {
    backgroundColor: "white",
  }
})

export default IssueMap;
