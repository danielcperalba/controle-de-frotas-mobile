// src/screens/DetalhesVeiculo/index.tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function DetalhesVeiculo({ route }) {
  const { veiculo } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Marca:</Text>
        <Text style={styles.value}>{veiculo.marca}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Modelo:</Text>
        <Text style={styles.value}>{veiculo.modelo}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Placa:</Text>
        <Text style={styles.value}>{veiculo.placa}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Status:</Text>
        <Text style={styles.value}>{veiculo.status}</Text>
      </View>
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
    color: "#E1E1E6",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  infoContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  label: {
    color: "#E1E1E6",
    fontSize: 18,
    fontWeight: "bold",
    width: 100,
  },
  value: {
    color: "#FFFFFF",
    fontSize: 18,
  },
});
