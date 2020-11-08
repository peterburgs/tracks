import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const SignupScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={{ fontSize: 20 }}>Signup Screen</Text>
      <Button
        title="Go to Signin"
        onPress={() => navigation.navigate("Signin")}
      />
      <Button
        title="Go to Main Flow"
        onPress={() => navigation.navigate("mainFlow")}
      />
    </View>
  );
};
const styles = StyleSheet.create({});

export default SignupScreen;
