import { FontStyles, GlobalStyles } from '@styles';
import { Logo } from '@images';

function App() {
  return (
    <>
      <FontStyles />
      <GlobalStyles />
      <h1>ConnectLab</h1>
      <img src={Logo} alt="" />
    </>
  );
}

export default App;
