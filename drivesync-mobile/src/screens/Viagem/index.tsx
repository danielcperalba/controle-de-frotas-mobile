import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Veiculo(){
    return(
        <View style={styles.container}>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#202024'
    },
    text:{
        fontSize: 25,
        fontWeight: 'bold'
    }
});