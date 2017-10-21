import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
    Picker
} from 'react-native';



export default class Realizar_orden extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}> Realizar Orden</Text>
                <View style={styles.nombreClientes}>
                    <Text> Nombre de Cliente: </Text>
                    <Picker ></Picker>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee'
    },

    title: {
        color: 'black',
        marginTop: 20,
        fontSize: 20,
        width: 375,
        textAlign: 'center',
    },

    nombreClientes: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start'
        

    }


});





