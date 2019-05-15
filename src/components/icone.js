import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet
} from 'react-native';

class Icone extends Component {
    render() {
        switch (this.props.escolha) {
            case 'pedra':
                return (
                    <View style={styles.icone}>
                        <Text style={styles.txtJogador}>{this.props.jogador}</Text>
                        <Image source={require('../../imgs/pedra.png')} />
                    </View>
                );
            case 'papel':
                return (
                    <View style={styles.icone}>
                        <Text style={styles.txtJogador}>{this.props.jogador}</Text>
                        <Image source={require('../../imgs/papel.png')} />
                    </View>
                );
            case 'tesoura':
                return (
                    <View style={styles.icone}>
                        <Text style={styles.txtJogador}>{this.props.jogador}</Text>
                        <Image source={require('../../imgs/tesoura.png')} />
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
