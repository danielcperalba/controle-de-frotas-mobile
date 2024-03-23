import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function App(){
    return(
        <View style={styles.container}>
            <Text style={styles.eventName}>
                Gastos
            </Text>

            <Text style={styles.eventDescribe}>
                Adicione os gastos que você teve durante a viagem
            </Text>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding:24
    },

    eventName: {
        color: '#FDFCFE',
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 48
    },

    eventDescribe:{
        color: '#6B6B6B',
        fontSize: 12
    }
});