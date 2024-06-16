import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import ManutencaoCard from "../../../components/ManutencaoCard";

export default function DetalhesVeiculo({ route }) {
  const { veiculo } = route.params;

  // Ordenar manutenções por data (mais recente primeiro)
  const manutencoesOrdenadas = veiculo.manutencoes.sort((a, b) => new Date(b.dt_manutencao).getTime() - new Date(a.dt_manutencao).getTime());

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
        {manutencoesOrdenadas.map((manutencao) => (
          <ManutencaoCard key={manutencao.id} manutencao={manutencao} />
        ))}
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
  cardContainer: {
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
