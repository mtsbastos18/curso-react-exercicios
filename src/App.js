import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Simples from './componentes/Simples';
import ParImpar from './componentes/ParImpar';
import { Inverter, MegaSena } from './componentes/Multi';


export default class App extends Component {
    render(){
        return(
            <View style={Styles.container}>
                <Simples texto="Alessandra"/>
                <ParImpar numero={32} />
                <Inverter texto="React Nativo" />
                <MegaSena numeros={6} />
            </View>
        )
    }
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#cae7e5'
    },
    f20: {
        fontSize: 40,
    }
})