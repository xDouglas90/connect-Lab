import { CustomThemeProvider } from '@contexts';
import { QueryClientProvider } from 'react-query';

import { queryClient } from '@service';

import { FontStyles, GlobalStyles } from '@styles';
import { AppRoutes } from '@router';

function App() {
  return (
    <CustomThemeProvider>
      <FontStyles />
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <AppRoutes />
      </QueryClientProvider>
    </CustomThemeProvider>
  );
}

export default App;
