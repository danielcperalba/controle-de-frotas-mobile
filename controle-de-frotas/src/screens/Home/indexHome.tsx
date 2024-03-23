import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from './stylesHome';
import { Expense } from "../../components/Expense/indexExpense";

export function Home(){

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.textContainer}>
                    <Text style={styles.eventName}>Gastos</Text>
                    <Text style={styles.eventDescribe}>Adicione os gastos</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Novo Gasto +</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Digite aqui"
                    placeholderTextColor="#6b6b6b"
                />
                <TouchableOpacity style={styles.buttonSearch}>
                    <Text style={styles.buttonText}>P</Text>
                </TouchableOpacity>
            </View>

            <Expense />
            <Expense />
            <Expense />


        </View>
    )
}