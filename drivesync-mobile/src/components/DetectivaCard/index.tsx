import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from '@expo/vector-icons'; // Importar o Ionicons

import styles from './styles';

export default function DetectivaCard() {
    const manutencaoPreditiva = {
        tipoManutencao: "Manutenção Detectiva",
        data: "05/02/2024",
        servico: "Inspeção Geral",
        descricao: "Verificação minuciosa de todos os componentes do veículo, incluindo sistema elétrico, suspensão, escapamento e alinhamento. Nenhuma falha evidente.",
        dataRetorno: "Indefinido"
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

