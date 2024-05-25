import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { useAuth } from "../../contexts/auth";

const MinhaConta: React.FC = () => {
  const { user, signOut } = useAuth();

  function handleSignOut() {
    signOut();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Minha Conta</Text>
      <View style={styles.userInfo}>
        <Text style={styles.label}>Nome:</Text>
        <Text style={styles.info}>{user?.name}</Text>
      </View>
      <View style={styles.userInfo}>
        <Text style={styles.label}>E-mail:</Text>
        <Text style={styles.info}>{user?.email}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSignOut}>
        <Text style={styles.buttonText}>Desconectar</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: '#202024'
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 20,
    color: '#fff'
  },
  userInfo: {
    flexDirection: "row",
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 10,
    color: '#fff'
  },
  info: {
    fontSize: 18,
    color: '#fff'
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

export default MinhaConta;
