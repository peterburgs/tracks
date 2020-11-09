import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";
const SignupScreen = ({ navigation }) => {
  return (
    <View>
      <Text h3>Sign Up for Tracker</Text>
      <Input label="Email" />
      <Input label="Password" />
      <Button title="Sign Up" />
    </View>
  );
};
const styles = StyleSheet.create({});

export default SignupScreen;