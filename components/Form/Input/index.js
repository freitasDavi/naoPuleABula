import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput, DefaultTheme } from "react-native-paper";

export default function Input(props) {
  const theme = {
    ...DefaultTheme,
    colors: {
      primary: "#318450",
      secondary: "#78C896",
      background: "#FCFCFC",
      surface: "#FFFFFF",
      text: "#318450",
      disabled: "#C2C2C2",
      placeholder: "#8B8B8B",
      backdrop: "#F37F7F",
      error: "#F37F7F",
    },
  };

  return (
    <View>
      <TextInput
        mode="outlined"
        // label={props.placeholder}
        placeholder={props.placeholder}
        theme={theme}
        {...props}
      />
      {console.log(props)}
      {props.errorText && <Text>{props.errorText}</Text>}
    </View>
  );
}
