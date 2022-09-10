import { FontStyles, GlobalStyles } from '@styles';

import { Button, Logo } from '@atoms';
import { TopBar } from '@organisms';

function App() {
  return (
    <>
      <FontStyles />
      <GlobalStyles />
      <TopBar>
        <Logo />
        <Button text="login" />
      </TopBar>
    </>
  );
}

export default App;
