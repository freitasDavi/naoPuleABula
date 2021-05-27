import React from "react";
import { View, Text, TouchableOpacity, Button } from "react-native";
import { logout } from "../../services/auth";
// import { Button } from "react-native-paper";

export default function HomePage({ navigation }) {
  const onClickLogout = () => {
    console.log("entrou");
    logout();
    navigation.navigate("Home");
    console.log("saiu");
  };

  return (
    <View>
      <Text>VAI TOMAR NO RABO</Text>
      {/* <TouchableOpacity onPress={() => onClickLogout()}>
          
        <Text>LOGOUT</Text>
      </TouchableOpacity> */}
      <Button
        onPress={onClickLogout}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}
