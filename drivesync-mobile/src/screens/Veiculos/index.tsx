import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import axios from "axios";

export default function Viagem() {
  const [veiculos, setVeiculos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:44344/")
      .then((response) => setVeiculos(response.data))
      .catch((err) => console.log(err));
  }, []);

  const renderVeiculoCard = ({ item }) => {
    return (
      <View style={styles.card}>
        <Text style={styles.placa}>Placa: {item.placa}</Text>
        <Text style={styles.marca}>Marca: {item.marca}</Text>
        <Text style={styles.modelo}>Modelo: {item.modelo}</Text>
        <Text style={styles.status}>Status: {item.status}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={veiculos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderVeiculoCard}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202024",
    padding: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    padding: 20,
    marginBottom: 20,
  },
  placa: {
    fontSize: 18,
    marginBottom: 5,
  },
  marca: {
    fontSize: 16,
    marginBottom: 5,
  },
  modelo: {
    fontSize: 16,
    marginBottom: 5,
  },
  status: {
    fontSize: 16,
  },
});
