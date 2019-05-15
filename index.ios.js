/* eslint-disable react/no-multi-comp */
/* eslint-disable global-require */
import React, { Component } from 'react';
import {
    AppRegistry,
    Button,
    Text,
    View,
    StyleSheet
} from 'react-native';
import Topo from './src/components/topo';
import Icone from './src/components/icone';

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
                resultado = 'Você ganhou';
            }

            if (escolhaUsuario === 'tesoura') {
                resultado = 'Você perdeu';
            }
        }

        if (escolhaComputador === 'papel') {
            if (escolhaUsuario === 'papel') {
                resultado = 'Empate';
            }

            if (escolhaUsuario === 'tesoura') {
                resultado = 'Você ganhou';
            }

            if (escolhaUsuario === 'pedra') {
                resultado = 'Você perdeu';
            }
        }

        if (escolhaComputador === 'tesoura') {
            if (escolhaUsuario === 'tesoura') {
                resultado = 'Empate';
            }

            if (escolhaUsuario === 'pedra') {
                resultado = 'Você ganhou';
            }

            if (escolhaUsuario === 'papel') {
                resultado = 'Você perdeu';
            }
        }

        this.setState({ escolhaUsuario, escolhaComputador, resultado });
    }

    render() {
        return (
           <View style={styles.background}>
           
            <Topo />
            <View style={styles.painelAcoes}>

                <View style={styles.btnEscolha}>
                    <Button title="pedra" onPress={() => this.jokenpo('pedra')} />
                </View>

                <View>
                    <Button title="papel" onPress={() => this.jokenpo('papel')} />
                </View>

                <View>
                    <Button title="tesoura" onPress={() => this.jokenpo('tesoura')} />
                </View>

            </View>

            <View style={styles.palco}>

                <Text style={styles.txtResultado}>{this.state.resultado}</Text>

                <Icone escolha={this.state.escolhaUsuario} jogador='Usuario' />
                <Icone escolha={this.state.escolhaComputador} jogador='Computador' />

            </View>
            
           </View>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        marginTop: 50
    },
    btnEscolha: {
        width: 90
    },
    painelAcoes: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    palco: {
        alignItems: 'center',
        marginTop: 10
    },
    txtResultado: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'red',
        height: 60
    }
});

AppRegistry.registerComponent('jokepo', () => jokepo);
