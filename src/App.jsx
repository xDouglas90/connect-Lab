import { CustomThemeProvider } from '@contexts';
import { Devices } from '@pages';

import { FontStyles, GlobalStyles } from '@styles';

function App() {
  return (
    <CustomThemeProvider>
      <FontStyles />
      <GlobalStyles />
      <Devices />
    </CustomThemeProvider>
  );
}

export default App;
