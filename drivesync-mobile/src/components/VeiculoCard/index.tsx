import React from "react";
import { View, Text} from "react-native";
import { Ionicons } from '@expo/vector-icons'; // Importar o Ionicons

import styles from './styles';

export default function VeiculoCard() {
    const veiculoExemplo = {
        placa: "ABC-1234",
        marca: "Toyota",
        modelo: "Corolla",
        status: "Disponível",
    };

    return (

        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.iconSquare}>
                    <Ionicons style={styles.icon} name="car" size={40} color="white" />
                </View>

                <View style={styles.content}>
                    <View style={styles.row}>
                        <Text style={styles.valueTitle}>{veiculoExemplo.marca}</Text>
                        <Text style={styles.valueTitle}>{veiculoExemplo.modelo}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.valueSubtitle}>{veiculoExemplo.placa}</Text>
                    </View>
                    <View style={styles.valueStatusBagde}>
                        <Text style={styles.valueStatus}>{veiculoExemplo.status}</Text>
                    </View>
                </View>

                <View style={styles.iconChevron}>
                    <Ionicons name="chevron-forward-outline" size={30} color="#8D8D99" />
                </View>
            </View>
        </View>
    );
}

