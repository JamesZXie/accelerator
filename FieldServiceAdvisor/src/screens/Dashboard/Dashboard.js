import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Navigation } from 'react-native-navigation';

import Sidebar from '../../components/Sidebar/Sidebar';
import DashboardMenu from '../../components/DashboardMenu/DashboardMenu';
import WatsonSources from '../../components/WatsonSources/WatsonSources';

class DashboardScreen extends React.Component{
  constructor(props) {
    super(props)
    this.state={
      watson: false,
      test: "hi",
    }
  }



  static navigatorStyle = {
    navBarHidden: true,
  }

  sourcesHandler = () => {
    Navigation.showModal({
      screen: "FieldServiceAdvisor.WatsonSourcesScreen",
      animationType: 'slide-up'
    })
  }

  modalCloseHandler = () => {
    this.setState({
      watson: false,
    })
  }

  render() {
    return(
      <View style={styles.container}>
        <View>
          <DashboardMenu />
        </View>
        <Sidebar onWatson={this.sourcesHandler}/>
        <WatsonSources onModalClose={this.modalCloseHandler} show={this.state.watson}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "whitesmoke",
    width: "100%",
    height: "100%",
  },
  play: {
    height: 676,
    width: 934,
    backgroundColor: "white",
    position: "absolute",
    left: 90,
    top: 92
  }
})

export default DashboardScreen;
