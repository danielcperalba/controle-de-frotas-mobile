import React from "react";
import { View, Text, TextInput } from "react-native";
import styles from './styles';
import axios from "axios";
import ViagemCard from "../../components/ViagemCard";
import ViagemStatus from "../../components/ViagemStatus";
import { useAuth } from "../../contexts/auth";

export default function Atividades() {
    const { user } = useAuth();

    return (
        <View style={styles.container}>

            <View style={styles.userInfo}>
                <Text style={styles.info}> Olá, {user?.email}!</Text>
            </View>

            <ViagemStatus />

            <View style={styles.divider} />

            <Text style={styles.subtitle}>Atualizações</Text>

        </View>
    );
}
