import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';



export default class Menu_chofer extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.title} > Bienvenido Chofer</Text>
      <View style={styles.buttonGroups}>
      <Button style={styles.button} title="Ver Ordenes" onPress={null}/>
      <Button style={styles.button} title="Ver Ruta" onPress={null}/>
      <Button style={styles.button} title="Realizar Reporte" onPress={null}/>
      <Button style={styles.button} title="Info Camion" onPress={null}/>
      </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    padding:20
  },

  title:{
    color: 'black',
    marginTop: 20,
    fontSize: 20,
    width: 350,
    textAlign: 'center',   
  },
  
  buttonGroups:{
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    justifyContent: 'space-around',
    marginVertical: 160,
    paddingHorizontal:15
  },

  button:{
    height: 80,
    width:100,
    backgroundColor: "#841584",
      
  }

});





