import React from 'react';
import { Button, View, Text, StyleSheet, Modal } from 'react-native';

class WatsonSources extends React.Component{
  show = this.props.show

  visibleHandler = () => {

  }

  render() {
    return(
      <Modal visible={this.props.show}>
        <Button title="hi" onPress={this.props.onModalClose}/>
      </Modal>
    );
  }
};

export default WatsonSources;
