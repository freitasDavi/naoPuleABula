import AsyncStorage from "@react-native-async-storage/async-storage";

export const TOKEN_KEY = "&app-token";
export const ID_USUARIO = "&id-usuario";
export const NOME_USUARIO = "&nome-usuario";
export const ALERGIA_USUARO = "&alergia-usuario";

export const login = async (token) => {
  try {
    await AsyncStorage.setItem(TOKEN_KEY, token);
  } catch (e) {
    console.log(e);
    // saving error
  }
};

export const logout = async () => {
  await AsyncStorage.removeItem(TOKEN_KEY, function (error) {
    if (error) {
      return console.log(error);
    }
    return;
  });
};

export const setIdUsuario = async (id) => {
  try {
    await AsyncStorage.setItem(ID_USUARIO, id);
  } catch (e) {
    console.log(e);
    // saving error
  }
};

export const getIdUsuario = async () => {
  try {
    const value = await AsyncStorage.getItem(ID_USUARIO);
    if (value !== null) {
      // value previously stored
    }
    return value;
  } catch (e) {
    // error reading value
  }
};

export const setNomeUsuario = async (nome) => {
  try {
    await AsyncStorage.setItem(NOME_USUARIO, nome);
  } catch (e) {
    console.log(e);
    // saving error
  }
};

export const getNomeUsuario = async () => {
  try {
    const value = await AsyncStorage.getItem(NOME_USUARIO);
    if (value !== null) {
      // value previously stored
    }
    return value;
  } catch (e) {
    // error reading value
  }
};

export const setAlergiaUsuario = async (alergia) => {
  try {
    await AsyncStorage.setItem(ALERGIA_USUARO, alergia);
  } catch (e) {
    console.log(e);
    // saving error
  }
};

export const getAlergiaUsuario = async () => {
  try {
    const value = await AsyncStorage.getItem(ALERGIA_USUARO);
    if (value !== null) {
      // value previously stored
    }
    return value;
  } catch (e) {
    // error reading value
  }
};
