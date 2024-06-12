// src/screens/Veiculos/index.tsx
import React, { useEffect, useState } from "react";
import { View, Text, TextInput, FlatList, ActivityIndicator } from "react-native";
import styles from './styles';
import VeiculoCard from "../../components/VeiculoCard";
import api from "../../services/api";

export default function Veiculo() {
  const [veiculos, setVeiculos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchVeiculos() {
      try {
        const response = await api.get('/api/Veiculos');
        setVeiculos(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }

    fetchVeiculos();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Pesquise aqui"
          placeholderTextColor="#aaa"
        />
      </View>
      <FlatList
        data={veiculos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <VeiculoCard veiculo={item} />}
        contentContainerStyle={styles.cardContainer}
      />
    </View>
  );
}
