import React from "react";
import Button from "../Form/Button";
import Input from "../Form/Input";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";

const EMAIL_REGEX =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default function Cadastro({ navigation }) {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    let payload = {
      nome_usuario: data.name,
      email_usuario: data.email,
      tipo_usuario: 1,
      senha_usuario: data.senha,
      alergia_usuario: data.alergia,
      nascimento_usuario: "1998-08-09",
    };

    axios
      .post("https://api-npab.herokuapp.com/api/usuarios", payload)
      .then((response) => {
        if (response.status === 200) {
          console.log("tu é bom demais maluco");
        }
      });
  };

  return (
    <ScrollView>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nome: </Text>
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
              placeholder="Digite aqui seu nome"
            />
          )}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Sobrenome: </Text>
        <Controller
          defaultValue=""
          name="sobrenome"
          control={control}
          rules={{
            required: { value: true, message: "Sobrenome é necessário" },
          }}
          render={({ field: { onChange, value } }) => (
            <Input
              onChangeText={(text) => onChange(text)}
              value={value}
              error={errors.sobrenome}
              errorText={errors?.sobrenome?.message}
              placeholder="Digite aqui seu sobrenome"
            />
          )}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>E-mail: </Text>
        <Controller
          defaultValue=""
          name="email"
          control={control}
          rules={{
            required: { value: true, message: "Email é obrigatório" },
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
              placeholder="exemplo@exemplo.com"
            />
          )}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Senha: </Text>

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
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Confirme sua senha: </Text>

        <Controller
          defaultValue=""
          name="senhaConfirm"
          control={control}
          rules={{
            required: { value: true, message: "As senhas devem ser iguais" },
          }}
          render={({ field: { onChange, value } }) => (
            <Input
              onChangeText={(text) => onChange(text)}
              value={value}
              error={errors.senhaConfirm}
              errorText={errors?.senhaConfirm?.message}
              placeholder="Digite sua senha novamente"
            />
          )}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Data de nscimento:</Text>

        <Controller
          defaultValue=""
          name="nascimento"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              onChangeText={(text) => onChange(text)}
              value={value}
              error={errors.nascimento}
              errorText={errors?.nascimento?.message}
              placeholder="00/00/0000"
            />
          )}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Medicamentos que faz uso contínuo:</Text>

        <Controller
          defaultValue=""
          name="medicamentos"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              onChangeText={(text) => onChange(text)}
              value={value}
              error={errors.medicamentos}
              errorText={errors?.medicamentos?.message}
              placeholder="Digite aqui os medicamentos"
            />
          )}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>
          Descreva suas alergias e intolerâncias:
        </Text>

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
              placeholder="Exemplo: Lactose, Dipirona...."
            />
          )}
        />
      </View>

      <Button onPress={handleSubmit(onSubmit)} label="Cadastrar" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },

  label: {
    color: "#005A3B",
    fontSize: 17,
    fontFamily: "Lato_700Bold",
  },
});
