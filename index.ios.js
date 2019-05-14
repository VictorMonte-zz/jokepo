import React, { Component } from 'react';
import {
    AppRegistry,
    Button,
    Text,
    View,
    Image,
    StyleSheet
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

                <Text>Escolha do computador: {this.state.escolhaComputador}</Text>
                <Text>Escolha do usuario: {this.state.escolhaUsuario}</Text>

            </View>
            
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
        fontSize: 25,
        fontWeight: 'bold',
        color: 'red',
        height: 60
    }
}); 

AppRegistry.registerComponent('jokepo', () => jokepo);
