import React from "react";
import { TouchableOpacity, Text } from "react-native";

export default function Button({ label, ...props }) {
  return (
    <TouchableOpacity {...props}>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
}
