// src/screens/DetalhesVeiculo/index.tsx
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import PreditivaCard from "../../../components/PreditivaCard";
import CorretivaCard from "../../../components/CorretivaCard";
import PreventivaCard from "../../../components/PreventivaCard";
import DetectivaCard from "../../../components/DetectivaCard";

export default function DetalhesVeiculo({ route }) {
  const { veiculo } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.value}>{veiculo.marca} {veiculo.modelo}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.subInfo}>{veiculo.placa}</Text>
      </View>
      <View style={styles.valueStatusBagde}>
        <Text style={styles.infoStatus}>{veiculo.status}</Text>
      </View>

      <View style={styles.divider} />

      <Text style={styles.subtitle}>Últimas manutenções</Text>

      <View style={styles.cardContainer}>
        <PreditivaCard />
        <CorretivaCard />
        <PreventivaCard />
        <DetectivaCard />
      </View>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202024",
    padding: 20,
  },
  cardContainer:{
    marginBottom: 30
  },
  infoContainer: {
    flexDirection: "row",
  },
  value: {
    color: '#E1E1E6',
    fontSize: 32,
    fontWeight: 'bold',
  },
  subInfo: {
    color: '#E1E1E6',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 6
  },
  infoStatus: {
    fontSize: 16,
    fontWeight: 'bold',
    color: "#00B37E",
  },
  valueStatusBagde: {
    backgroundColor: "#00B37E50",
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },
  divider: {
    height: 2,
    backgroundColor: '#444',
    marginVertical: 20,
  },
  subtitle: {
    color: '#E1E1E6',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
