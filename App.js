import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, Lato_300Light, Lato_400Regular, Lato_900Black } from '@expo-google-fonts/lato' ; 

export default function App() {
  let [fontsLoaded] = useFonts({
    'Lato_900Black': require('./assets/fonts/Lato Black.ttf'),
    'Lato_Light': require('./assets/fonts/Lato-Thin.ttf')
  });

  return (
    <View>
    <View style={styles.container}>
      <Text style={styles.tituloNao}>NÃO PULE</Text>
      <Text style={styles.titloBula}>A BULA</Text>
    </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 150
  },

  tituloNao: {
    color: '#318450',
    fontFamily: `Lato_900Black`,
    fontWeight: '900',
    fontSize: 39
  },

  titloBula: {
    color: '#78c896',
    fontFamily: 'Lato_Light',
    fontSize: 52
  }
});
