import { FontStyles, GlobalStyles } from '@styles';

import { Logo } from '@atoms';
import { TopBar } from '@organisms';
import { NavBar } from '@molecules';

function App() {
  return (
    <>
      <FontStyles />
      <GlobalStyles />
      <TopBar>
        <Logo />
        <NavBar />
      </TopBar>
    </>
  );
}

export default App;
