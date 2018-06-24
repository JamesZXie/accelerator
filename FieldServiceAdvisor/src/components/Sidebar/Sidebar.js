import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Image } from 'react-native';
import { Navigation } from 'react-native-navigation';

class Sidebar extends React.Component{
  render() {
    return(
      <View style={styles.container}>
        <TouchableOpacity style={styles.dashIcon}>
          <Image source={require('../../assets/Sidebar/dash.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.searchIcon}>
          <Image source={require('../../assets/Sidebar/search.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.chatIcon}>
          <Image source={require('../../assets/Sidebar/chat.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={this.props.onWatson} style={styles.WatsonIcon}>
          <Image source={require('../../assets/Sidebar/Watson.png')} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 768,
    width: 90,
    backgroundColor: "#D8D8D8",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  searchIcon: {
    left: 30.75,
    top: 235,
  },
  dashIcon: {
    top: 161,
    left: 27.5,
    width: 90,
  },
  chatIcon: {
    top: 315,
    left: 27.5
  },
  WatsonIcon: {
    top: 595
  }
})

export default Sidebar;
