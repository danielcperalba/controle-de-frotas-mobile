// app.routes.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Viagem from '../screens/Viagem';
import MinhaConta from '../screens/Conta';
import Atividades from '../screens/Atividades';
import Veiculo from '../screens/Veiculos'; // Corrigido de '../screens/Viagem'
import Home from '../screens/Home';

const Tab = createBottomTabNavigator();

const AppRoutes: React.FC = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Atividades" component={Atividades} />
    <Tab.Screen name="Viagens" component={Viagem} />
    <Tab.Screen name="Veículos" component={Veiculo} />
    <Tab.Screen name="Minha Conta" component={MinhaConta} />
  </Tab.Navigator>
);

export default AppRoutes;
