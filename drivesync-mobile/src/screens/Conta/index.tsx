import React from "react";
import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useAuth } from "../../contexts/auth";

const MinhaConta: React.FC = () => {
  const { user, signOut } = useAuth();

  function handleSignOut() {
    signOut();
  }

  // Função para extrair as iniciais do nome do usuário
  const getUserInitials = (name: string) => {
    const initials = name.split(' ').map(part => part.charAt(0)).join('');
    return initials.toUpperCase().slice(0, 2);
  };

  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Text style={styles.initials}>{getUserInitials(user?.name || '')}</Text>
      </View>
      <View style={styles.userInfo}>
        <Text style={styles.info}>{user?.name}</Text>
      </View>
      <View style={styles.userInfo}>
        <Text style={styles.label}>E-mail:</Text>
        <Text style={styles.info}>{user?.email}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSignOut}>
        <Text style={styles.buttonText}>Desconectar</Text>
        <Ionicons name="log-out-outline" size={25} color="white" />
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
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#00875F',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  initials: {
    fontSize: 40,
    color: '#fff',
    fontWeight: 'bold',
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
    backgroundColor: '#00875F',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    marginRight: 10, // Espaçamento entre o texto e o ícone
  },
});

export default MinhaConta;
