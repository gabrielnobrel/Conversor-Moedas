import React from "react";
import RNPickerSelect from "react-native-picker-select";

export default function Picker() {
  const placeholder = {
    label: "Selecione uma moeda",
    value: null,
    color: "#000",
  };
  return (
    <RNPickerSelect
      placeholder={placeholder}
      items={[
        { key: "1", label: "USD", value: "USD" },
        { key: "2", label: "EUR", value: "EUR" },
      ]}
      onValueChange={(valor) => console.log(valor)}
      style={{
        inputIOS: { fontSize: 20, color: "#000" },
        inputAndroid: { fontSize: 20, color: "#000" },
      }}
    />
  );
}
