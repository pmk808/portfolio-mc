// src/App.tsx
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeProvider as CustomThemeProvider } from './context/ThemeContext';
import { lightTheme, darkTheme } from './styles/theme/theme';
import { GlobalStyles } from './styles/GlobalStyles';
import { MainLayout } from './layouts/MainLayout/MainLayout';
import { Home } from './pages/Home';
import { useTheme } from './context/ThemeContext';
import { StyleSheetManager } from 'styled-components';

const ThemedApp = () => {
  const { isDark } = useTheme();
  const currentTheme = isDark ? darkTheme : lightTheme;

  return (
    <StyledThemeProvider theme={currentTheme}>
      <>
        <GlobalStyles />
        <MainLayout>
          <Home />
        </MainLayout>
      </>
    </StyledThemeProvider>
  );
};

const App = () => {
  return (
    <StyleSheetManager shouldForwardProp={() => true}>
      <CustomThemeProvider>
        <ThemedApp />
      </CustomThemeProvider>
    </StyleSheetManager>
  );
};

export default App;