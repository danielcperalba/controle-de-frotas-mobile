import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import styles from "./styles";

interface Manutencao {
  id: number;
  dt_manutencao: string;
  tp_manutencao: string;
  veiculoId: number;
  servico: string;   
  descricao: string;
  custo: number;
}

interface CorretivaCardProps {
  manutencoes: Manutencao[];
}

export default function CorretivaCard({ manutencoes }: CorretivaCardProps) {
  const manutencoesFiltradas = manutencoes
    .filter(manutencao => manutencao.tp_manutencao === 'Corretiva')
    .sort((a, b) => new Date(b.dt_manutencao).getTime() - new Date(a.dt_manutencao).getTime());

  return (
    <View style={styles.card}>
      <View style={styles.iconSquare}>
        <Ionicons style={styles.icon} name="build-outline" size={40} color="white" />
      </View>

      <View style={styles.content}>
        {manutencoesFiltradas.length > 0 ? (
          manutencoesFiltradas.map(manutencao => (
            <View key={manutencao.id}>
              <Text style={styles.valueTitle}>{manutencao.tp_manutencao}</Text>
              <Text style={styles.value}>{manutencao.descricao}</Text>
              <Text style={styles.valueDate}>{new Date(manutencao.dt_manutencao).toLocaleDateString()}</Text>
            </View>
          ))
        ) : (
          <Text style={styles.value}>Nenhuma manutenção corretiva encontrada.</Text>
        )}
      </View>
    </View>
  );
}
