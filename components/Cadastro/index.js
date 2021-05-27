import React from "react";
import Button from "../Form/Button";
import Input from "../Form/Input";
import { StyleSheet, Text, View } from "react-native";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";

const EMAIL_REGEX =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default function Cadastro() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data);

    let payload = {
      nome_usuario: data.name,
      email_usuario: data.email,
      tipo_usuario: 1,
      senha_usuario: data.senha,
      alergia_usuario: data.alergia,
      nascimento_usuario: "1998-08-09",
    };

    console.log("VAI TOMAR NO CU");

    // let content = JSON.stringify(payload);

    axios
      .post("http://192.168.1.3:5000/api/usuarios", payload)
      .then((response) => {
        if (response.status === 200) {
          console.log("tu é bom demais maluco");
        }
      });

    console.log("VAI TOMAR NO CU");
  };

  return (
    <View>
      <Text>Teste de navegação</Text>
      <Controller
        defaultValue=""
        name="name"
        control={control}
        rules={{
          required: { value: true, message: "Name is required" },
        }}
        render={({ field: { onChange, value } }) => (
          <Input
            onChangeText={(text) => onChange(text)}
            value={value}
            error={errors.name}
            errorText={errors?.name?.message}
            placeholder="Name"
          />
        )}
      />

      <Controller
        defaultValue=""
        name="email"
        control={control}
        rules={{
          required: { value: true, message: "Email is required" },
          pattern: {
            value: EMAIL_REGEX,
            message: "Not a valid email",
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

      <Controller
        defaultValue=""
        name="senha"
        control={control}
        rules={{
          required: { value: true, message: "Password is required" },
        }}
        render={({ field: { onChange, value } }) => (
          <Input
            onChangeText={(text) => onChange(text)}
            value={value}
            error={errors.senha}
            errorText={errors?.senha?.message}
            placeholder="senha"
          />
        )}
      />

      <Controller
        defaultValue=""
        name="alergia"
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            onChangeText={(text) => onChange(text)}
            value={value}
            error={errors.alergia}
            errorText={errors?.alergia?.message}
            placeholder="alergia"
          />
        )}
      />

      <Button onPress={handleSubmit(onSubmit)} label="Cadastrar" />
    </View>
  );
}
