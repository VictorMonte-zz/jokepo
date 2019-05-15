import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet
} from 'react-native';

const imagemPedra = require('../../imgs/pedra.png');
const imagemPapel = require('../../imgs/papel.png');
const imagemTesoura = require('../../imgs/tesoura.png');

class Icone extends Component {
    render() {
        switch (this.props.escolha) {
            case 'pedra':
                return (
                    <View style={styles.icone}>
                        <Text style={styles.txtJogador}>{this.props.jogador}</Text>
                        <Image source={imagemPedra} />
                    </View>
                );
            case 'papel':
                return (
                    <View style={styles.icone}>
                        <Text style={styles.txtJogador}>{this.props.jogador}</Text>
                        <Image source={imagemPapel} />
                    </View>
                );
            case 'tesoura':
                return (
                    <View style={styles.icone}>
                        <Text style={styles.txtJogador}>{this.props.jogador}</Text>
                        <Image source={imagemTesoura} />
                    </View>
                );
            default:
                return false;
        }
    }
}

const styles = StyleSheet.create({
    icone: {
        alignItems: 'center'
    },
    txtJogador: {
        fontSize: 23
    }
});

export default Icone;
