import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import AppLoading from "expo-app-loading";
import Logo from "./components/Logo";
import Cadastro from "./components/Cadastro";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Provider as PaperProvider,
  DefaultTheme,
  configureFonts,
} from "react-native-paper";
import {
  useFonts,
  Lato_100Thin,
  Lato_300Light,
  Lato_400Regular,
  Lato_700Bold,
  Lato_900Black,
} from "@expo-google-fonts/lato";

function HomeScreen({ navigation }) {
  let [fontsLoaded] = useFonts({
    Lato_100Thin,
    Lato_300Light,
    Lato_400Regular,
    Lato_700Bold,
    Lato_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    const fontConfig = {
      default: {
        regular: {
          fontFamily: "Lato_400Regular",
          fontWeight: "normal",
        },
        medium: {
          fontFamily: "Lato_700Bold",
          fontWeight: "normal",
        },
        light: {
          fontFamily: "Lato_300Light",
          fontWeight: "normal",
        },
        thin: {
          fontFamily: "Lato_100Thin",
          fontWeight: "normal",
        },
      },
    };

    fontConfig.ios = fontConfig.default;
    fontConfig.android = fontConfig.default;

    const theme = {
      ...DefaultTheme,
      colors: {
        primary: "#318450",
        secondary: "#78C896",
        background: "#FCFCFC",
        surface: "#FFFFFF",
        text: "#318450",
        disabled: "#C2C2C2",
        placeholder: "#8B8B8B",
        backdrop: "#F37F7F",
        error: "#F37F7F",
      },
    };

    return (
      <PaperProvider theme={theme}>
        <View style={styles.container}>
          <Logo />
          <Button
            title="Cadastre-se"
            onPress={() => navigation.navigate("Cadastro")}
          />
          <StatusBar style="auto" />
        </View>
      </PaperProvider>
    );
  }
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
