import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
    Picker,
    TextInput,
    TouchableOpacity,
    ScrollView
} from 'react-native';



export default class Ver_ordenes extends Component {

    render() {

        var payments = [];

        for (let i = 0; i < 30; i++) {

            payments.push(
                <View key={i}>
                   
                    <TouchableOpacity style={styles.btn} onPress={null}>
                        <Text style={styles.btnText}> Orden # {i} </Text>
                    </TouchableOpacity>

                </View>
            )
        }

        return (
            <ScrollView contentContainerStyle={styles.contentContainer}>

            <View style={styles.container}>

                {payments}


            </View>
            </ScrollView>



        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        backgroundColor: '#eee',

    },

    title: {
        color: 'black',
        marginTop: 20,
        marginBottom: 30,
        fontSize: 20,
        width: 325,
        textAlign: 'center',
    },

    btnText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16

    },

    btn: {
        marginBottom: 10,
        paddingVertical: 10,
        backgroundColor: "#3498db"
    },

    contentContainer:{
        paddingVertical:0


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





