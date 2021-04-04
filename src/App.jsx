import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import { GlobalStyles } from "./components/GlobalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
