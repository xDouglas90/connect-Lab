import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider, CustomThemeProvider } from '@contexts';
import { QueryClientProvider } from 'react-query';

import { queryClient } from '@service';

import { FontStyles, GlobalStyles } from '@styles';
import { Routes } from '@router';

function App() {
  return (
    <CustomThemeProvider>
      <FontStyles />
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <Router>
          <AuthProvider>
            <Routes />
          </AuthProvider>
        </Router>
      </QueryClientProvider>
    </CustomThemeProvider>
  );
}

export default App;
