import LogForm from "./LogForm"
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';



export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Text style={styles.title}> Welcome to Epade </Text>
          <Text style ={styles.subTitle}> Please sign in </Text>
        </View>
        <LogForm/>
      </View>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee'
  },

  logoContainer:{
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },

  title:{
    color: 'black',
    marginTop: 10,
    fontSize: 25,
    width: 150,
    textAlign: 'center',    
  },

  subTitle:{
    fontStyle: 'normal',
    marginTop: 20

  }

});





