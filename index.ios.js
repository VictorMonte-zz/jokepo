import React, { Component } from 'react';
import {
    AppRegistry,
    Button,
    Text,
    View,
    Image
} from 'react-native'; 


class jokepo extends Component {

    constructor(props) {
        super(props);
        this.state = { escolhaUsuario: '', escolhaComputador: '', resultado: '' };
    }

    jokenpo(escolhaUsuario) {
        const numeroAleatorio = Math.floor(Math.random() * 3);
        let escolhaComputador = '';

        switch (numeroAleatorio) {
            case 0: escolhaComputador = 'pedra'; break;
            case 1: escolhaComputador = 'papel'; break;
            case 2: escolhaComputador = 'tesoura'; break;
            default: break;
        }

        let resultado = '';

        if (escolhaComputador === 'pedra') {
            if (escolhaUsuario === 'pedra') {
                resultado = 'Empate';
            }

            if (escolhaUsuario === 'papel') {
                resultado = 'Usuario ganhou';
            }

            if (escolhaUsuario === 'tesoura') {
                resultado = 'Computador ganhou';
            }
        }

        if (escolhaComputador === 'papel') {
            if (escolhaUsuario === 'papel') {
                resultado = 'Empate';
            }

            if (escolhaUsuario === 'tesoura') {
                resultado = 'Usuario ganhou';
            }

            if (escolhaUsuario === 'pedra') {
                resultado = 'Computador ganhou';
            }
        }

        if (escolhaComputador === 'tesoura') {
            if (escolhaUsuario === 'tesoura') {
                resultado = 'Empate';
            }

            if (escolhaUsuario === 'pedra') {
                resultado = 'Usuario ganhou';
            }

            if (escolhaUsuario === 'papel') {
                resultado = 'Computador ganhou';
            }
        }

        this.setState({ escolhaUsuario, escolhaComputador, resultado });
    }

    render() {
        return (
           <View style={{ marginTop: 50 }}>
           
            <Topo />
            <View></View>
            <View></View>
            
            <Text>Escolha do computador: {this.state.escolhaComputador}</Text>
            <Text>Escolha do usuario: {this.state.escolhaUsuario}</Text>
            <Text>Resultado: {this.state.resultado}</Text>
            <Button title="pedra" onPress={() => this.jokenpo('pedra')} />
            <Button title="papel" onPress={() => this.jokenpo('papel')} />
            <Button title="tesoura" onPress={() => this.jokenpo('tesoura')} />
           </View>
        );
    }
}

class Topo extends Component {
    render() {
        return (
        <View>
            <Image source={require('./imgs/jokenpo.png')} />
        </View>);
    }
}

AppRegistry.registerComponent('jokepo', () => jokepo);
