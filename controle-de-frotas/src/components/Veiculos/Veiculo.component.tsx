import React from 'react';
import { View, Text, Image} from 'react-native';

import {styles} from './Veiculo.styles';
import { TouchableOpacity } from 'react-native';


type Props = {
    name : String;
    onRemove: () => void;
}

export function Veiculo({name, onRemove}: Props){
    return(
        <View style={styles.container}>

            <View style={styles.textContainer}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.subTitle}>R$20,00</Text>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={onRemove}>
                    <Text style={styles.buttonText}>
                        -
                    </Text>
                </TouchableOpacity>
            </View>
            
        </View>


    )
}