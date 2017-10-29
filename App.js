/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import Login from "./src/components/login/Login";
import Menu_chofer from "./src/components/dashboard_chofer/Menu_chofer";
import Menu_vendedor from "./src/components/dashboard_vendedor/Menu_vendedor";
import Realizar_orden from "./src/components/realizar_orden/Realizar_orden";
import Ver_clientes from "./src/components/ver_clientes/Ver_clientes";
import Ver_ordenes from "./src/components/ver_ordenes/Ver_ordenes";

import React, { Component } from 'react';
import {

  Platform,
  StyleSheet,
  Text,
  View

} from 'react-native';


export default class App extends Component {
  render() {
    return (
      <Ver_clientes/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
