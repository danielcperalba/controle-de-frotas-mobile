import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gestão de Frota de Veículos</Text>
      
      {/* Botão para adicionar um novo veículo */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Adicionar Veículo</Text>
      </TouchableOpacity>
      
      {/* Lista de veículos */}
      <View style={styles.vehicleList}>
        {/* Exemplo de um item da lista */}
        <View style={styles.vehicleItem}>
          <Text style={styles.vehicleName}>Carro 1</Text>
          <Text style={styles.vehicleDetails}>Modelo: XYZ123</Text>
          <Text style={styles.vehicleDetails}>Ano: 2022</Text>
          {/* Adicione mais detalhes do veículo, se necessário */}
        </View>
        {/* Adicione mais veículos conforme necessário */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  vehicleList: {
    flex: 1,
  },
  vehicleItem: {
    backgroundColor: '#f0f0f0',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  vehicleName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  vehicleDetails: {
    fontSize: 14,
  },
});

export default HomeScreen;
