import { CustomThemeProvider } from '@contexts';
import { Home } from '@pages';

import { FontStyles, GlobalStyles } from '@styles';

function App() {
  return (
    <CustomThemeProvider>
      <FontStyles />
      <GlobalStyles />
      <Home />
    </CustomThemeProvider>
  );
}

export default App;
