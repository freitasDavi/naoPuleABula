import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, Lato_300Light, Lato_400Regular, Lato_900Black } from '@expo-google-fonts/lato' ; 
import Logo from './components/Logo';

export default function App() {
  let [fontsLoaded] = useFonts({
    'Lato_900Black': require('./assets/fonts/Lato Black.ttf'),
    'Lato_Light': require('./assets/fonts/Lato-Thin.ttf')
  });

  return (
    <View style={styles.container}>
      <Logo />
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
  },
});
