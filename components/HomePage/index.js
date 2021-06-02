import React from "react";
import { View, Button, Modal, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { logout } from "../../services/auth";
import SearchBar from "../Searchbar";
import Scanner from "../Scanner";

export default function HomePage({ navigation }) {
  const [modalVisibile, setModalVisible] = React.useState(false);
  const [type, setType] = React.useState();
  const [data, setData] = React.useState();

  const onClickLogout = () => {
    console.log("entrou");
    logout();
    navigation.navigate("Home");
    console.log("saiu");
  };

  const onCodeScanned = (type, data) => {
    setType(type);
    setData(data);
    setModalVisible(false);
  };

  return (
    <View style={{ marginTop: 40, backgroundColor: "#FCFCFC" }}>
      {/* <Button
        onPress={onClickLogout}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Logout"
      /> */}
      <SearchBar />
      <Modal
        visible={modalVisibile}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modal}>
          <Scanner onCodeScanned={onCodeScanned} />
          <Button title="Cancelar" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>

      <Text>Type: {type}</Text>
      <Text>Data: {data}</Text>
      <Button
        title="Escanear código de barras"
        onPress={() => setModalVisible(true)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  modal: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "lightgrey",
  },
});
