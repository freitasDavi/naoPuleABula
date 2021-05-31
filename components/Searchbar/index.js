import React, { useState } from "react";
import { FlatList, View, Text } from "react-native";
import { Searchbar as RNPSearchbar } from "react-native-paper";
import axios from "axios";

import Icon from "react-native-vector-icons/FontAwesome5";

export default function Searchbar() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);

  async function partialSearch(text) {
    const payload = {
        search: text,
      },
      uriCasa = "http://192.168.1.5:5000/api/bulas/find",
      uriJob = "http://192.168.2.137:5000/api/bulas/find";

    await axios
      .post(uriCasa, payload)
      .then((response) => {
        setResults(response.data);
      })
      .catch((err) => console.log(err));
  }

  return (
    <View>
      <RNPSearchbar
        placeholder="Digite sua pesquisa"
        onChangeText={(text) => {
          partialSearch(text);
          setInput(text);
        }}
        value={input}
      />
      <FlatList
        data={results}
        renderItem={({ item }) => {
          return <Text>{item.nome_bula}</Text>;
        }}
        keyExtractor={(item) => item._id}
      />
    </View>
  );
}
