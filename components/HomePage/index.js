import React from "react";
import { View, Button } from "react-native";
import { Text } from "react-native-paper";
import { logout } from "../../services/auth";
import SearchBar from "../Searchbar";

export default function HomePage({ navigation }) {
  const onClickLogout = () => {
    console.log("entrou");
    logout();
    navigation.navigate("Home");
    console.log("saiu");
  };

  return (
    <View style={{ marginTop: 40, backgroundColor: "#FCFCFC"}}>
      {/* <Button
        onPress={onClickLogout}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Logout"
      /> */}
      <SearchBar/>
    </View>
  );
}
