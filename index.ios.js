import React, { Component } from 'react';
import {
    AppRegistry,
    Button,
    Text,
    View
} from 'react-native'; 


class jokepo extends Component {

    constructor(props) {
        super(props);
        this.state = { escolhaUsuario: '' };
    }

    jokenpo(escolhaUsuario) {
        this.setState({ escolhaUsuario: escolhaUsuario });
    }

    render() {
        return (
           <View style={{ marginTop: 100 }}>
                <Text>Escolha do computador</Text>
                <Text>Escolha do usuario: {this.state.escolhaUsuario}</Text>
                <Text>Resultado</Text>
                <Button title="pedra" onPress={() => this.jokenpo('pedra')} />
                <Button title="papel" onPress={() => this.jokenpo('papel')}/>
                <Button title="tesoura" onPress={() => this.jokenpo('tesoura')}/>
           </View>
        );
    }
}

AppRegistry.registerComponent('jokepo', () => jokepo);
