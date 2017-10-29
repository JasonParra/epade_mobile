import React, { Component } from 'react';

import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
    Picker,
    TextInput,
    TouchableOpacity
} from 'react-native';


import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';



export default class Ver_clientes extends Component {

    render() {
   
        var names = ["jason","jorge", "julio","Paola","Rafael","Manuel","Maria","Juan"];

        var name = new Array();
        
        for(let i=0; i<8; i++)
        {
        name.push(<Text style={styles.link}
            onPress={() => Linking.openURL('http://google.com')}>
            {
             names[i]
            }
        </Text>);
        
    }

        var visitado = <TouchableOpacity style={styles.btn} onPress={null}>
            <Text style={styles.btnText}> no </Text>
        </TouchableOpacity>;


        const tableHead = ['Nombre', 'Direccion', 'Telefono', 'visitado'];
        const tableData = [
            [name[0], 'Direccion#1', '000.000.0000', visitado],
            [name[1], 'Direccion#2', '000.000.0000', visitado],
            [name[2], 'Direccion#3', '000.000.0000', visitado],
            [name[3], 'Direccion#4', '000.000.0000', visitado],
            [name[4], 'Direccion#5', '000.000.0000', visitado],
            [name[5], 'Direccion#6', '000.000.0000', visitado],
            [name[6], 'Direccion#7', '000.000.0000', visitado],
            [name[7], 'Direccion#8', '000.000.0000', visitado]
        ];

        return (

            <View style={styles.container}>

                <Text style={styles.title}> Lista de Clientes:</Text>

                <Table style={styles.table} borderStyle={{ borderWidth: 0.5, borderColor: '#c8e1ff' }}>
                    <Row data={tableHead} style={styles.head} textStyle={styles.text} flexArr={[1.1, 1.5, 1.3, 0.8]} />
                    <Rows data={tableData} style={styles.head} textStyle={styles.text} flexArr={[1.1, 1.5, 1.3, 0.8]} />
                </Table>
                <Text></Text>
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
        marginBottom: 10,
        fontSize: 18,
        width: 325,
        textAlign: 'center',
    },

    button: {
        height: 40,
        width: 220,
        backgroundColor: "#841584",
        paddingHorizontal: 100,
        marginTop: 30
    },
    table: {
        width: 350,
        height: 400,
        marginBottom: 5
    },
    head: {
        height: 40,
        backgroundColor: '#f1f8ff'
    },

    text: {
        textAlign: 'center'
    },
    btnText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16

    },
    btn: {
        backgroundColor: "#e74c3c"

    },
    link:{
        color: 'blue',
        textAlign: 'center'        
        
    }

});





