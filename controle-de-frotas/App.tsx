import { ThemeProvider } from "styled-components/native";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";

import { SignIn } from "./src/screens/SignIn";
import { Loading } from "./src/components/Loading";
import { StatusBar } from "react-native";
import theme from "./src/theme";

import { NavigationContainer } from "@react-navigation/native";
import * as React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import Login from './src/screens/Login/index';
import Home from './src/screens/Home/index';

const Stack = createStackNavigator();

export default function App() {
    //const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

    //if (!fontsLoaded) {
      //  return (
        //    <Loading />
        //);
    //}

    return (
        //<ThemeProvider theme={theme}>
          //  <SignIn />
        //</ThemeProvider>

        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}