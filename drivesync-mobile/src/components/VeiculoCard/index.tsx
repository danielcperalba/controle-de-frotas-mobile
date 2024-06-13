// src/components/VeiculoCard/index.tsx
import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../@type/navigation';

type NavigationProp = StackNavigationProp<RootStackParamList, 'DetalhesVeiculo'>;

interface VeiculoCardProps {
  veiculo: {
    id: number;
    marca: string;
    modelo: string;
    ano: number;
    placa: string;
    quilometragem: number;
    tp_combustivel: string;
    dt_aquisicao: string;
    status: string;
  };
}

export default function VeiculoCard({ veiculo }: VeiculoCardProps) {
  const navigation = useNavigation<NavigationProp>();

  const handleCardPress = () => {
    navigation.navigate('DetalhesVeiculo', { veiculo });
  };

  return (
    <TouchableOpacity onPress={handleCardPress}>
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.leftBorder}></View>
          <View style={styles.iconSquare}>
            <Ionicons style={styles.icon} name="car-outline" size={40} color="white" />
          </View>

          <View style={styles.content}>
            <View style={styles.row}>
              <Text style={styles.valueTitle}>{veiculo.marca}</Text>
              <Text style={styles.valueTitle}>{veiculo.modelo}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.valueSubtitle}>{veiculo.placa}</Text>
            </View>
            <View style={styles.valueStatusBadge}>
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
