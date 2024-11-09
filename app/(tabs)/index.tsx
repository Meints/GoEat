import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack';  
import Cadastro from '@/src/pages/cadastro';  
import Login from '@/src/pages/login'; 
import AlterarPerfil from '@/src/pages/alterarPerfil'; 
import { propsNavigationStack } from '@/src/modules';

const Stack = createStackNavigator<propsNavigationStack>(); 

export default function App() {
  return (
    <NavigationContainer independent={true}> 
      <Stack.Navigator initialRouteName="Login">  
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />  
        <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }} /> 
        <Stack.Screen name="AlterarPerfil" component={AlterarPerfil} options={{ headerShown: false }} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

