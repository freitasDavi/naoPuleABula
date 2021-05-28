import React, { useState } from "react";
import { View, TouchableOpacity, Button, FlatList } from "react-native";
import { Text, Searchbar } from 'react-native-paper';
import { Controller, useForm } from 'react-hook-form';
import { logout } from "../../services/auth";
import axios from 'axios';
import Input from "../Form/Input";
// import { Button } from "react-native-paper";

export default function HomePage({ navigation }) {
  const { control, formState: { errors }, register, getValues } = useForm();
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);

  const onClickLogout = () => {
    console.log("entrou");
    logout();
    navigation.navigate("Home");
    console.log("saiu");
  };

  async function fetchData(text) {
    const search = text;
  
    await axios.post("http://192.168.2.137:5000/api/bulas/find", search)
                                .then((response) => {
                                  console.log(response);
                                  setResults(response);
                                })
                                .catch((err) => console.log(err));
  }

  const potato = () => {
    let x = getValues();

    console.log(x);

    let payload = {
      search: text
    }
    axios.post("http://192.168.2.137:5000/api/bulas/find", payload)
          .then((response) => {
            if(response.status === 200) {
              console.log('Tamo em casa');
              console.log(response.Content);
            }
          });
  }

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

      {/* <Controller 
        defaultValue=""
        name="search"
        control={control}
        {...register('search')}
        onChange={potato}
        render ={({ field: { onChange, value } }) => (
          <Input 
            onChangeText={(text) => onChange(text)}
            value={value}
            error={errors.search}
            errorText={errors?.search?.message}
            placeholder="Digite sua pesquisa"
          />
        )}
      /> */}

      <Searchbar placeholder="Digite sua pesquisa" onChangeText={(text) => {
        fetchData();
        setInput(text);}} value={input} />
      <FlatList data={results} renderItem={({ item }) => (
        <View>
          <Text>{item.nome_usuario}</Text>
        </View>
      )}
        keyExtractor={(item) => "" + item.id}   
      />

    </View>
  );
}
