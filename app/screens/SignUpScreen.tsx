import { useAuthStore } from "@/app/hooks/useStore";
import React, { useState } from "react";
import { View } from "react-native";
import { Button, TextInput } from "react-native-paper";

const SignUpScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useAuthStore();

  const handleSignUp = async () => {
    const { user, error } = await signUp(email, password);
    if (error) {
      console.error("Error signing up:", error.message);
    } else {
      console.log("User signed up:", user);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        mode="outlined"
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        mode="outlined"
      />
      <Button onPress={handleSignUp} mode="contained">
        Sign Up
      </Button>
    </View>
  );
};

export default SignUpScreen;
