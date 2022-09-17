import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider, CustomThemeProvider } from '@contexts';

import { FontStyles, GlobalStyles } from '@styles';
import { Routes } from '@router';

function App() {
  return (
    <CustomThemeProvider>
      <FontStyles />
      <GlobalStyles />
      <Router>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </Router>
    </CustomThemeProvider>
  );
}

export default App;
