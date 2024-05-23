import React from "react";
import { View, Button, StyleSheet, TextInput, TouchableOpacity, Text } from "react-native";
import { useAuth } from "../../contexts/auth";

const SignIn: React.FC = () => {
  const { signIn } = useAuth();

  function handleSign() {
    signIn();
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="#aaa"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#aaa"
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleSign}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#202024",
    paddingHorizontal: 20,
  },
  input: {
    width: "100%",
    height: 45,
    backgroundColor: "#29292E",
    borderRadius: 6,
    marginBottom: 10,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  button: {
    width: "100%",
    height: 40,
    backgroundColor: "#00875F",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});

export default SignIn;
