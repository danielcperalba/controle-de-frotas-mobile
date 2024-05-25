import React from 'react';
import { StatusBar, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Viagem from '../screens/Viagem';
import MinhaConta from '../screens/Conta';
import Atividades from '../screens/Atividades';
import Veiculo from '../screens/Veiculos';
import Home from '../screens/Home';

const Tab = createBottomTabNavigator();

const AppRoutes: React.FC = () => (
  <>
    <StatusBar backgroundColor="#202024" barStyle="light-content" />
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#00B37E',
        tabBarInactiveTintColor: '#aaaaaa',
        tabBarStyle: {
          backgroundColor: '#29292E',
        },
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Início"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={25} color={color} />
          ),
          headerStyle: { backgroundColor: '#29292E' }, // Cor de fundo do cabeçalho
          headerTintColor: '#FFFFFF', // Cor do texto do cabeçalho
        }}
      />
      <Tab.Screen
        name="Atividades"
        component={Atividades}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list" size={25} color={color} />
          ),
          headerStyle: { backgroundColor: '#29292E' }, // Cor de fundo do cabeçalho
          headerTintColor: '#FFFFFF', // Cor do texto do cabeçalho
        }}
      />
      <Tab.Screen
        name="Nova Viagem"
        component={Viagem}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add-outline" size={40} color={color} />
          ),
          headerStyle: { backgroundColor: '#29292E' }, // Cor de fundo do cabeçalho
          headerTintColor: '#FFFFFF', // Cor do texto do cabeçalho
        }}
      />
      <Tab.Screen
        name="Veículos"
        component={Veiculo}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="car" size={25} color={color} />
          ),
          headerStyle: { backgroundColor: '#29292E' }, // Cor de fundo do cabeçalho
          headerTintColor: '#FFFFFF', // Cor do texto do cabeçalho
        }}
      />
      <Tab.Screen
        name="Minha Conta"
        component={MinhaConta}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={25} color={color} />
          ),
          headerStyle: { backgroundColor: '#29292E' }, // Cor de fundo do cabeçalho
          headerTintColor: '#FFFFFF', // Cor do texto do cabeçalho
        }}
      />
    </Tab.Navigator>
  </>
);

export default AppRoutes;
