import React from "react";
import Button from "../Form/Button";
import Input from "../Form/Input";
import { StyleSheet, Text, View } from "react-native";
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
    console.log(data);
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

      <Button onPress={handleSubmit(onSubmit)} label="Submit" />
    </View>
  );
}
