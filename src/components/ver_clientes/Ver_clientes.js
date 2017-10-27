import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
    Picker,
    TextInput
} from 'react-native';

import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';



export default class Ver_clientes extends Component {


    render() {

        const tableHead = ['Nombre', 'Apellido', 'Direccion','Visitado'];
        const tableData = [
            ['Nombre#1', 'Nombre#2', 'Nombre#3', 'Nombre#4', 'Nombre#5', 'Nombre#6', 'Nombre#7', 'Nombre#8'],
            ['Apellido#1', 'Apellido#2', 'Apellido#3', 'Apellido#4', 'Apellido#5', 'Apellido#6', 'Apellido#7', 'Apellido#8'],
            ['Direccion#1', 'Direccion#2', 'Direccion#3', 'Direccion#4', 'Direccion#5', 'Direccion#6', 'Direccion#7', 'Direccion#8'],
            ['no', 'no', 'no', 'no', 'no', 'no', 'no', 'no']
           
            
        ]

        return (

            <View style={styles.container}>

                <Text style={styles.title}> Lista de Clientes:</Text>

                <Table style={styles.table} borderStyle={{ borderWidth: 0.5, borderColor: '#c8e1ff' }}>
                    <Row data={tableHead} style={styles.head} textStyle={styles.text} flexArr={[1, 1, 1, 1]} />
                    <Cols data={tableData} textStyle={styles.text} heightArr={[20, 50]} flexArr={[1, 1, 1, 1]} />
                </Table>

                <Button style={styles.button} title="Salir" onPress={null} />

            </View>

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

    button: {
        height: 40,
        width: 250,
        backgroundColor: "#841584",
        paddingHorizontal: 100,
        marginTop: 20,
        marginBottom: 30
    },
    table: { 
        width: 320,
        height:380         
    },
    head: { 
        height: 40, 
        backgroundColor: '#f1f8ff' 
    },

    text: { 
        textAlign: 'center'
    }

});





