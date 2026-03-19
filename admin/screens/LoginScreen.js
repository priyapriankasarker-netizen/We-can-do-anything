import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Handle login logic
        console.log('Logging in with:', { username, password });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Admin Login</Text>
            <TextInput
                style={styles.input}
                placeholder='Username'
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder='Password'
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button title='Login' onPress={handleLogin} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 10,
    },
});

export default LoginScreen;