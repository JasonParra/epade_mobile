import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

export default class LogForm extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput placeholder="username" style={styles.input} />
        <TextInput placeholder="password" secureTextEntry style={styles.input} />
        <TouchableOpacity style={styles.btn} onPress={null}>
                <Text style = {styles.btnText}> Log in </Text>
                </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
  },
  input: {
    height: 40,
    width: 300,
    marginBottom: 15,
    borderRadius: 2,
    paddingHorizontal: 10
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16

  },

  btn: {
    marginBottom: 50,
    paddingVertical: 10,
    backgroundColor: "#3498db"
  }

});





