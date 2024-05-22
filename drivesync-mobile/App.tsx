import { ThemeProvider } from "styled-components";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";

import theme from './src/theme';

import LoginScreen from "./src/screens/SignIn"; // Ajuste aqui
import HomeScreen from "./src/screens/Home";

import { NavigationContainer } from "@react-navigation/native";

import {Loading} from "./src/components/Loading"; // Supondo que Loading seja um componente padrão
import { StatusBar } from "react-native";

//const Stack = createStackNavigator();


export default function App(){
  const[fontsLoaded] = useFonts ({Roboto_400Regular, Roboto_700Bold});

  if(!fontsLoaded){
    return(
      <Loading />
    );
  }

  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <LoginScreen/>
    </NavigationContainer>
  );
}
