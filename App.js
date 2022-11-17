import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/screens/Home";
import city from "./src/screens/Citties";
import SelectCity from "./src/screens/SelectCity";
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
        <Stack.Screen name="Cidades" component={SelectCity} />
        <Stack.Screen name="Previsão do tempo" component={city} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
