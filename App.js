import React from "react";
import Login from "./components/Login";
import Cadastro from "./components/Cadastro";
import HomePage from './components/HomePage';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Tabs from './components/navigation/tabs';

const AuthStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AuthStack.Navigator screenOptions={{
        headerShown: false
      }}
      initialRouteName={"Login"}
      >
        <AuthStack.Screen name="Login" component={Login} />
        <AuthStack.Screen name="Cadastro" component={Cadastro} />
        <AuthStack.Screen name="HomePage" component={Tabs} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}
