import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ThemeProvider, DefaultTheme } from "styled-components/native";
import styled from "styled-components/native";

import { theme } from "./src/theme/theme";
import Onboarding from "./src/screens/Onboarding/Onboarding";
import Home from "./src/screens/Home/Home";

const Stack = createNativeStackNavigator();

const AppContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.bg};
`;

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AppContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
              contentStyle: { backgroundColor: theme.colors.bg },
            }}
          >
            <Stack.Screen name="Onboarding" component={Onboarding} />
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
        </AppContainer>
      </NavigationContainer>
    </ThemeProvider>
  );
}
