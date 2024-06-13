import React, { useState } from "react";
import { View, Text, TextInput, ScrollView, TouchableOpacity } from "react-native";
import CheckBox from 'react-native-check-box';
import styles from './styles';

export default function Atividades() {
    const [checkList, setCheckList] = useState({
        brakes: false,
        tires: false,
        lights: false,
        fuel: false,
    });

    const handleCheckBoxChange = (item) => {
        setCheckList({ ...checkList, [item]: !checkList[item] });
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.subtitle}>Informações da viagem</Text>

            <View style={styles.inputsContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Localização atual"
                    placeholderTextColor="#aaa"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Veículo"
                    placeholderTextColor="#aaa"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Passageiros"
                    placeholderTextColor="#aaa"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Quilometragem atual"
                    placeholderTextColor="#aaa"
                />
            </View>

            <View style={styles.divider} />

            <Text style={styles.subtitle}>Check-list</Text>
            <View style={styles.checkListContainer}>
                <View style={styles.checkListItem}>
                    <Text style={styles.checkListText}>Freios</Text>
                    <CheckBox
                        style={styles.checkBox}
                        checkBoxColor='#00875F'
                        isChecked={checkList.brakes}
                        onClick={() => handleCheckBoxChange('brakes')}
                    />
                </View>
                <View style={styles.checkListItem}>
                    <Text style={styles.checkListText}>Pneus</Text>
                    <CheckBox
                        style={styles.checkBox}
                        checkBoxColor='#00875F'
                        isChecked={checkList.tires}
                        onClick={() => handleCheckBoxChange('tires')}
                    />
                </View>
                <View style={styles.checkListItem}>
                    <Text style={styles.checkListText}>Luzes</Text>
                    <CheckBox
                        style={styles.checkBox}
                        checkBoxColor='#00875F'
                        isChecked={checkList.lights}
                        onClick={() => handleCheckBoxChange('lights')}
                    />
                </View>
                <View style={styles.checkListItem}>
                    <Text style={styles.checkListText}>Combustível</Text>
                    <CheckBox
                        style={styles.checkBox}
                        checkBoxColor='#00875F'
                        isChecked={checkList.fuel}
                        onClick={() => handleCheckBoxChange('fuel')}
                    />
                </View>
            </View>

            <View style={styles.divider} />

            <Text style={styles.subtitle}>Observações</Text>
                <TextInput
                    editable
                    multiline
                    numberOfLines={4}
                    maxLength={40}
                    style={styles.obsInput}
                    placeholder="Digite suas observações aqui"
                    placeholderTextColor="#aaa"
                />

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Iniciar</Text>
                </TouchableOpacity>
        </ScrollView>
    );
}
