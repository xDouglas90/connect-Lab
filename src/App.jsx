import { CustomThemeProvider } from '@contexts';
import { QueryClientProvider } from 'react-query';

import { queryClient } from '@service';

import { FontStyles, GlobalStyles } from '@styles';
import { AppRoutes } from '@router';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

function App() {
  return (
    <CustomThemeProvider>
      <FontStyles />
      <GlobalStyles />
      <ToastContainer />
      <QueryClientProvider client={queryClient}>
        <AppRoutes />
      </QueryClientProvider>
    </CustomThemeProvider>
  );
}

export default App;
