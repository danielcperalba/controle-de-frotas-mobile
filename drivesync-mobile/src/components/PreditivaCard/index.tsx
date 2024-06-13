import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from '@expo/vector-icons'; // Importar o Ionicons

import styles from './styles';

export default function PreditivaCard() {
    const manutencaoPreditiva = {
        tipoManutencao: "Manutenção Preditiva",
        data: "25/05/2024",
        servico: "Troca de óleo e filtro",
        descricao: "Realizada inspeção detalhada dos freios, medição da espessura das pastilhas e verificação do fluio de freio.",
        dataRetorno: "10/09/2024"
    };

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.iconSquare}>
                    <Ionicons style={styles.icon} name="cog-outline" size={40} />
                </View>

                <View style={styles.content}>
                    <View style={styles.row}>
                        <Text style={styles.valueTitle}>{manutencaoPreditiva.tipoManutencao}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.value}>{manutencaoPreditiva.servico}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.valueDate}>Data: {manutencaoPreditiva.data}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.value}>Retorno: {manutencaoPreditiva.dataRetorno}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.valueDescricao}>{manutencaoPreditiva.descricao}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

