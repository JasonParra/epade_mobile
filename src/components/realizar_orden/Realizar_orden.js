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



export default class Realizar_orden extends Component {


    render() {

        return (

            <View style={styles.container}>
                <Text style={styles.title}> Realizar Orden</Text>
                <Text style={styles.titleInput}> Nombre de Cliente: </Text>
                <Picker style={styles.picker}
                    selectedValue={null}
                    onValueChange={(lang) => this.setState({ language: lang })}>
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>
                <Text style={styles.titleInput}> Nombre de Producto: </Text>
                <Picker style={styles.picker}
                    selectedValue={null}
                    onValueChange={(lang) => this.setState({ language: lang })}>
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>
                <Text style={styles.titleInput}> Metodo de Pago: </Text>
                <Picker style={styles.picker}
                    selectedValue={null}
                    onValueChange={(lang) => this.setState({ language: lang })}>
                    <Picker.Item label="Cheque" value="java" />
                    <Picker.Item label="Efectivo" value="js" />
                </Picker>
                <Text style={styles.titleInput}> Cantidad de Producto: </Text>
                <TextInput
                    keyboardType='numeric'
                    onChangeText={(text) => this.onChanged(text)}
                    value={null /*this.state.myNumber*/}
                    maxLength={10}  //setting limit of input
                />

                <TouchableOpacity style={styles.btn} onPress={null}>
                <Text style = {styles.btnText}> Confirmar </Text>
                </TouchableOpacity>
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

    titleInput: {
        color: 'black',
        marginTop: 15,
        fontSize: 15,
        width: 335,
        textAlign: 'center'
    },

    picker: {
        width: 100,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal:140
    },
    btnText:{
        color:'white',
        textAlign:'center',
        fontSize: 16
        
    },

    btn:{
        marginTop: 40,
        paddingVertical: 10,    
        backgroundColor: "#3498db"
    }
});





