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
                <View >
                    <Text> Nombre de Cliente: </Text>
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


});





