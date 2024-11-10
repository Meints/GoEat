import React = require("react");
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; // Para navegação com Bottom Tabs
import { MaterialIcons } from "@expo/vector-icons";
import Cadastro from "../../src/pages/cadastro";
import Login from "../../src/pages/login";
import ListagemRestaurantes from "@/src/pages/ListagemRestaurantes";
import Perfil from "@/src/pages/Perfil";
import { propsNavigationStack } from "@/src/modules";
import store from "@/src/redux/store";
import { Provider } from "react-redux";
import Detalhes from "@/src/pages/detalhes/Detalhes";

// Criação dos tipos de navegadores
const Stack = createStackNavigator<propsNavigationStack>();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#878af6",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="Restaurantes"
        component={ListagemRestaurantes}
        options={{
          tabBarLabel: "Restaurantes",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons
              name="format-list-bulleted"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarLabel: "Perfil",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer independent={true}>
        <Stack.Navigator initialRouteName="ListagemRestaurantes">
           <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }} /> 
        <Stack.Screen
            name="Detalhes"
            component={Detalhes}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ListagemRestaurantes"
            component={HomeTabs}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
