import { CustomThemeProvider } from '@contexts';
import { SignUp } from '@pages';

import { FontStyles, GlobalStyles } from '@styles';

function App() {
  return (
    <CustomThemeProvider>
      <FontStyles />
      <GlobalStyles />
      <SignUp />
    </CustomThemeProvider>
  );
}

export default App;
