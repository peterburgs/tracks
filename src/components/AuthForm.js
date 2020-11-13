import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import { Text, Button, Input } from "react-native-elements";
import Spacer from "./Spacer";
const AuthForm = ({
  headerText,
  errorMessage,
  onSubmit,
  submitButtonText,
}) => {
  // States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text h2>{headerText}</Text>
      <Spacer />
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Input
        label="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
      />

      {/* Display error when signup fails */}
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
      <Button
        title={submitButtonText}
        titleStyle={styles.button}
        onPress={() => onSubmit({ email, password })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // borderColor: "#cc0e74",
    // borderRadius: 10,
    // borderWidth: 5,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    fontSize: 20,
  },
  errorMessage: {
    fontSize: 16,
    color: "#ea2c62",
    marginBottom: 10,
  },
  link: {
    color: "#28abb9",
    marginTop: 10,
  },
});

export default AuthForm;
