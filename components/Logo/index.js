import React from "react";
import AppLoading from "expo-app-loading";
import { StyleSheet, Text, View } from "react-native";
import {
  useFonts,
  Lato_300Light,
  Lato_700Bold,
  Lato_900Black,
} from "@expo-google-fonts/lato";

export default function Logo() {
  let [fontsLoaded] = useFonts({
    Lato_900Black,
    Lato_700Bold,
    Lato_300Light,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else
    return (
      <View style={styles.container}>
        <Text style={styles.logoTop}>NÃO PULE</Text>
        <View style={styles.horizontalContainer}>
          <Text style={styles.logoBottomA}>A</Text>
          <Text style={styles.logoBottom}>BULA</Text>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  horizontalContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  container: {
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },

  logoTop: {
    color: "#318450",
    fontFamily: "Lato_900Black",
    fontWeight: "900",
    fontSize: 39,
  },

  logoBottom: {
    color: "#78c896",
    fontFamily: "Lato_300Light",
    fontSize: 52,
  },

  logoBottomA: {
    color: "#78c896",
    fontFamily: "Lato_300Light",
    fontSize: 52,
    marginRight: 30,
  },
});
