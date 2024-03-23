import React from 'react';
import { View, Text} from 'react-native';

import {styles} from './stylesExpense';
import { TouchableOpacity } from 'react-native';


export function Expense(){
    return(
        <View style={styles.container}>

            <View style={styles.textContainer}>
                <Text style={styles.name}>Estacionamento</Text>
                <Text style={styles.subTitle}>R$20,00</Text>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} >
                    <Text style={styles.buttonText}>
                        D
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} >
                    <Text style={styles.buttonText}>
                        E
                    </Text>
                </TouchableOpacity>
            </View>
            
        </View>


    )
}