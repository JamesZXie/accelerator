import React from 'react';
import { StyleSheet, View } from 'react-native';

import MenuItem from './MenuItem/MenuItem';
import IssueMap from './IssueMap/IssueMap';

class DashboardMenu extends React.Component{
  render() {
    return(
      <View style={styles.container}>
        <View style={styles.mainHeader} />
        <View style={styles.subHeader} />
        <View style={styles.menu}>
          <MenuItem onIssueClicked={this.props.onIssueClicked}/>
          <MenuItem onIssueClicked={this.props.onIssueClicked}/>
          <MenuItem onIssueClicked={this.props.onIssueClicked}/>
          <MenuItem onIssueClicked={this.props.onIssueClicked}/>
          <MenuItem onIssueClicked={this.props.onIssueClicked}/>
          <MenuItem onIssueClicked={this.props.onIssueClicked}/>
          <MenuItem onIssueClicked={this.props.onIssueClicked}/>
        </View>
        <IssueMap />
      </View>
    );
  }s
};

const styles = StyleSheet.create({
  container: {
    height: 676,
    width: 934,
    backgroundColor: "whitesmoke",
    position: "absolute",
    left: 90,
    top: 92
  },
  mainHeader: {
    backgroundColor: "#555555",
    width: "100%",
    height: 64
  },
  subHeader:{
    backgroundColor: "#C3C3C3",
    height: 30
  }
})

export default DashboardMenu;
