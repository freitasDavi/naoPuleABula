import React from "react";
import Button from "../Form/Button";
import Input from "../Form/Input";
import {
  Text,
  View,
  SafeAreaView,
  Alert,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
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
      // .post("http://192.168.2.137:5000/api/usuarios/login", payload)
      .post("https://api-npab.herokuapp.com/api/usuarios/login", payload)
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
      <View style={styles.container}>
        <Logo style={styles.logo} />
        <View style={styles.inputContainer}>
          <Text style={styles.label}>E-mail</Text>
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
        </View>
        <View style={styles.inputContainer2}>
          <Text style={styles.label}>Senha</Text>
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
        </View>

        <View style={styles.buttonBox}>
          <TouchableOpacity
            onPress={handleSubmit(onSubmit)}
            style={styles.buttonLogin}
          >
            <Text style={styles.buttonLoginText}>ENTRAR</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonBox2}>
          <Text style={{ fontSize: 16 }}>Não possui uma conta?</Text>
          <Button
            style={{ marginTop: 10, fontFamily: "Lato_700Bold" }}
            label="Cadastre-se"
            onPress={() => navigation.navigate("Cadastro")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
  },

  logo: {
    marginBottom: 30,
  },

  inputContainer: {
    marginTop: 40,
    paddingHorizontal: 20,
  },

  inputContainer2: {
    marginTop: 20,
    paddingHorizontal: 20,
  },

  label: {
    color: "#318450",
    fontSize: 16,
    fontFamily: "Lato_700Bold",
  },

  buttonBox: {
    marginTop: 60,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonBox2: {
    marginTop: 60,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonLogin: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#318450",
    padding: 10,
    width: 180,
    borderRadius: 4,
  },

  buttonLoginText: {
    color: "#fff",
  },
});
