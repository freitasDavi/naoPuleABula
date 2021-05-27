import React from "react";
import Button from "../Form/Button";
import Input from "../Form/Input";
import { Text, View, SafeAreaView, Alert } from "react-native";
import Logo from "../Logo";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import { login, setIdUsuario, setNomeUsuario } from "../../services/auth";

const EMAIL_REGEX =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default function Login({ navigation }) {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    let payload = {
      email: data.email,
      senha: data.senha,
    };

    console.log(payload);

    axios
      // .post("http://192.168.1.3:5000/api/usuarios/login", payload)
      .post("http://192.168.2.137:5000/api/usuarios/login", payload)
      .then((response) => {
        if (response.status === 200) {
          console.log("Ta on, ta em casa");
          login(response.data.token);
          setIdUsuario(response.data.id_client);
          setNomeUsuario(response.data.user_name);
          navigation.navigate("HomePage");
        } else {
          Alert.alert("Atenção", `Deu bosta ${response.message}`);
        }
      });
  };

  return (
    <SafeAreaView>
      <View>
        <Logo />
        <Text>Email</Text>
        <Controller
          defaultValue=""
          name="email"
          control={control}
          rules={{
            required: {
              value: true,
              message: "Insira um email para fazer login",
            },
          }}
          render={({ field: { onChange, value } }) => (
            <Input
              onChangeText={(text) => onChange(text)}
              value={value}
              error={errors.email}
              errorText={errors?.email?.message}
              placeholder="Email"
            />
          )}
        />
        <Text>Senha</Text>
        <Controller
          defaultValue=""
          name="senha"
          control={control}
          rules={{
            required: {
              value: true,
              message: "Insira sua senha para fazer login",
            },
          }}
          render={({ field: { onChange, value } }) => (
            <Input
              onChangeText={(text) => onChange(text)}
              value={value}
              error={errors.senha}
              errorText={errors?.senha?.message}
              placeholder="Senha"
            />
          )}
        />

        <Button onPress={handleSubmit(onSubmit)} label="Login" />
        {/* <Button
        title="Cadastre-se"
        onPress={() => navigation.navigate("Cadastro")}
      /> */}
      </View>
    </SafeAreaView>
  );
}
