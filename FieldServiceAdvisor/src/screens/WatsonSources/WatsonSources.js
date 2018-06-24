import React from 'react';
import { View, Text, Button } from 'react-native';
import { Navigation } from 'react-native-navigation';

class WatsonSourcesScreen extends React.Component{
  static navigatorStyle = {
    navBarHidden: true,
  }

  modalCloseHandler = () => {
    Navigation.dismissModal({
      animationType: 'slide-down'
    })
  }

  render() {
    return(
      <View style={{marginTop: 20}}>
        <Text>Watson Sources</Text>
        <Button title="Close" onPress={this.modalCloseHandler}/>
      </View>
    );
  }
}

export default WatsonSourcesScreen;
