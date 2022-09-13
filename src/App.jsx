import { CustomThemeProvider } from '@contexts';
import { Profile } from '@pages';

import { FontStyles, GlobalStyles } from '@styles';

function App() {
  return (
    <CustomThemeProvider>
      <FontStyles />
      <GlobalStyles />
      <Profile />
    </CustomThemeProvider>
  );
}

export default App;
