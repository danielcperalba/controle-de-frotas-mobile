import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons'; // ou outro conjunto de ícones que preferir
import Home from '../../screens/Home/index'; // importe suas telas aqui
import Veiculos from '../../screens/Veiculos/index';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false, // Esconda os rótulos dos ícones
        style: { backgroundColor: '#ffffff' } // Personalize o estilo da barra inferior
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" size={size} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="VehicleList"
        component={Veiculos}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="directions-car" size={size} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
