import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

export default function VeiculoCard({ veiculo }) {
  const navigation = useNavigation();

  const handleCardPress = () => {
    navigation.navigate('DetalhesVeiculo', { veiculo });
  };

  return (
    <TouchableOpacity onPress={handleCardPress}>
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.iconSquare}>
            <Ionicons style={styles.icon} name="car" size={40} color="white" />
          </View>

          <View style={styles.content}>
            <View style={styles.row}>
              <Text style={styles.valueTitle}>{veiculo.marca}</Text>
              <Text style={styles.valueTitle}>{veiculo.modelo}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.valueSubtitle}>{veiculo.placa}</Text>
            </View>
            <View style={styles.valueStatusBagde}>
              <Text style={styles.valueStatus}>{veiculo.status}</Text>
            </View>
          </View>

          <View style={styles.iconChevron}>
            <Ionicons name="chevron-forward-outline" size={30} color="#8D8D99" />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
