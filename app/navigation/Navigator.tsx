import { StackParamList, StackScreens } from "@/app/navigation/NavigationTypes";
import SignUpScreen from "@/app/screens/SignUpScreen";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

const Stack = createStackNavigator<StackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={StackScreens.SignUpScreen}>
      <Stack.Screen name={StackScreens.SignUpScreen} component={SignUpScreen} />
    </Stack.Navigator>
  );
};

export { AppNavigator };
