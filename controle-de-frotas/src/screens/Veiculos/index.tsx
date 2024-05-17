import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';
import api from '../../services/api';

const VehicleListScreen = () => {
  const [veiculos, setVeiculos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filtro, setFiltro] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    fetchVehicles();
  }, []);

  const fetchVehicles = async () => {
    try {
      const response = await api.get('api/veiculos');
      setVeiculos(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching vehicles:', error);
      setLoading(false);
    }
  };

  const searchVeiculos = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== '') {
      const dadosFiltrados = veiculos.filter((item) => {
        return Object.values(item).join('').toLocaleLowerCase()
          .includes(searchInput.toLocaleLowerCase())
      });
      setFiltro(dadosFiltrados);
    }
    else {
      setFiltro(veiculos);
    }
  }

  const renderVehicleItem = ({ item }) => (
    <View style={styles.vehicleItem}>
      <Text style={styles.vehicleText}>{item.marca} - {item.modelo}</Text>
      <Text style={styles.vehicleText}>Placa: {item.placa}</Text>
      <Text style={styles.vehicleText}>Ano: {item.ano}</Text>
    </View>
  );

  return (

    <View style={styles.container}>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={veiculos}
          renderItem={renderVehicleItem}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  vehicleItem: {
    marginBottom: 10,
  },
  vehicleText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default VehicleListScreen;
