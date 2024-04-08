import React from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList } from "react-native";
import { styles } from './Veiculos.styles';
import { Veiculo } from "../../components/Veiculos/Veiculo.component";

export function Veiculos(){
    const veiculos = ['Passat', 'Gol', 'Up', 'Polo', 'Uno' , 'Fiat' , 'Corsa' , 'Volvo', 'Palio', 'Astra'];

    function HandleVeiculoAdd(){
        console.log("Você adicionou um veículo!");
    }

    function handleVeiculoRemove(name : string){
        console.log(`VocÊ removeu um veículo ${name}`);
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.textContainer}>
                    <Text style={styles.eventName}>Veículos</Text>
                    <Text style={styles.eventDescribe}>Consulte os veículos de sua frota</Text>
                </View>
            </View>
            
            
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Pesquisar pela placa."
                    placeholderTextColor="#6b6b6b"
                />
                <TouchableOpacity style={styles.buttonSearch}>
                    <Text style={styles.buttonText}>P</Text>
                </TouchableOpacity>
            </View>


            <FlatList 
                data={veiculos}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Veiculo
                        key={item} 
                        name={item} 
                        onRemove={() => handleVeiculoRemove("Passat")}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}>
                        Nenhum veículo disponível? Contate o seu gestor!
                    </Text>
                )}
            />
        </View>
    )
}