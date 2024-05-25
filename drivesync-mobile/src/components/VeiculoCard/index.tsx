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
                        <Text style={styles.value}>{veiculoExemplo.placa}</Text>
                    </View>
                    <Text style={styles.valueStatus}>{veiculoExemplo.status}</Text>
                </View>
            </View>
        </View>
    );
}

