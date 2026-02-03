import React from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/theme/theme";
import Onboarding from "./src/screens/Onboarding/Onboarding";
import styled from "styled-components/native";
import type { DefaultTheme } from "styled-components";

interface AppContainerProps {
  theme: DefaultTheme;
}

interface StyledViewProps extends AppContainerProps {}

const AppContainer = styled.View<StyledViewProps>`
  flex: 1;
  background-color: ${(props : any) => props.theme.colors.bg};
`;

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Onboarding />
      </AppContainer>
    </ThemeProvider>
  );
}
