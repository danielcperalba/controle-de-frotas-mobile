import React from "react";
import { View, Text, TextInput } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

import VeiculoCard from "../../components/VeiculoCard";

import axios from "axios";

export default function Veiculo() {

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Pesquise aqui"
          placeholderTextColor="#aaa"
        />
      </View>
      <View style={styles.cardContainer}>
        <VeiculoCard />
        <VeiculoCard />
        <VeiculoCard />
        <VeiculoCard />

        
      </View>
    </View>
  );
}