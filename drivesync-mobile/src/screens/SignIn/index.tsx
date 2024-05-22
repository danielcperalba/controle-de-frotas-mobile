import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const LoginPage: React.FC = () => {
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const login = async () => {
        try {
            const response = await axios.post('http://localhost:5249/api/Account/LoginUser', { email, senha });

            // Salva o token de autenticação no armazenamento local
            // (não esqueça de adicionar a biblioteca AsyncStorage se necessário)
            // AsyncStorage.setItem('token', response.data.token);

            // Navega para a tela Home após o login bem-sucedido
        } catch (error) {
            // Exibe um alerta se o login falhar
            Alert.alert('Erro', 'O login falhou.');
        }
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Entre na sua conta</Text>
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                style={{ borderWidth: 1, borderColor: 'gray', borderRadius: 5, padding: 10, marginVertical: 10, width: '80%' }}
            />
            <TextInput
                placeholder="Senha"
                value={senha}
                onChangeText={setSenha}
                secureTextEntry
                style={{ borderWidth: 1, borderColor: 'gray', borderRadius: 5, padding: 10, marginVertical: 10, width: '80%' }}
            />
            <Button title="Entrar" onPress={login} />
        </View>
    );
};

export default LoginPage;
