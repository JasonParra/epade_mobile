import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';

export default class LogForm extends Component {
  render() {
    return (
     <View style={styles.container}>
     <TextInput placeholder = "username"style={styles.input}/>
     <TextInput placeholder = "password" secureTextEntry style={styles.input}/>
     <Button style={styles.button} title="Log in" onPress={null}/>
     </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
  },
  input:{
    height: 40,
    width:300,
    marginBottom:15,
    borderRadius:2,
    paddingHorizontal: 10
  },
  button:{
    height: 40,
    width:300,
    paddingHorizontal: 10,    
    backgroundColor: "#841584",
  }
});





