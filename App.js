import React from "react";
import Login from "./components/Login";
import Cadastro from "./components/Cadastro";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const AuthStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AuthStack.Navigator>
        <AuthStack.Screen name="Login" component={Login} />
        <AuthStack.Screen name="Cadastro" component={Cadastro} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}
