import { FontStyles, GlobalStyles } from '@styles';
import { Logo } from '@images';

function App() {
  return (
    <>
      <FontStyles />
      <GlobalStyles />
      <h1>Connect Lab</h1>
      <h2>Connect Lab</h2>
      <img src={Logo} alt="" />
      <p>Testando fonte styling</p>
    </>
  );
}

export default App;
