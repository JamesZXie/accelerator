import React from 'react';
import { View, Text, Button, StyleSheet, Animated } from 'react-native';
import { Navigation } from 'react-native-navigation';

import Sidebar from '../../components/Sidebar/Sidebar';
import DashboardMenu from '../../components/DashboardMenu/DashboardMenu';
import WatsonSources from '../../components/WatsonSources/WatsonSources';

class DashboardScreen extends React.Component{
  constructor(props) {
    super(props)
    this.state={
      watson: false,
      onIssueAnim: new Animated.Value(0),
    }
  }

  onIssueHandler = () => {
    Animated.timing(this.state.onIssueAnim, {
      toValue: -936,
      duration: 100,
      useNativeDrive: true
    }).start()
  }

  dashboardHandler = () => {
    Animated.timing(this.state.onIssueAnim, {
      toValue: 0,
      duration: 100,
      useNativeDrive: true
    }).start()
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
        <Animated.View style={{left: this.state.onIssueAnim}}>
          <DashboardMenu onIssueClicked={this.onIssueHandler}/>
        </Animated.View>
        <Sidebar onDashboard={this.dashboardHandler} onWatson={this.sourcesHandler}/>
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
