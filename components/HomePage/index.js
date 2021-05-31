import React, { useState } from "react";
import { View, TouchableOpacity, Button, FlatList } from "react-native";
import { Text } from "react-native-paper";
import { logout } from "../../services/auth";
import SearchBar from "../Searchbar";
import axios from "axios";
import Input from "../Form/Input";
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
      <Text>AXIOS RUIIM</Text>
      {/* <TouchableOpacity onPress={() => onClickLogout()}>
          
        <Text>LOGOUT</Text>
      </TouchableOpacity> */}
      <Button
        onPress={onClickLogout}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <SearchBar />
    </View>
  );
}
