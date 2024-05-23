import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function MinhaConta(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Minha Conta</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
        fontSize: 25,
        fontWeight: 'bold'
    }
});