import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/Components/Home";
import Mongagua from "./src/Components/Mongagua";
export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Mongagua" component={Mongagua} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
