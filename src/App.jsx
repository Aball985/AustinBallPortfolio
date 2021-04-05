import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import { AppContainer, GlobalStyles, colors } from "./components/GlobalStyles";
import { Scrollbars } from "react-custom-scrollbars";

const renderThumb = () => {
  const thumbStyle = {
    borderRadius: 6,
    width: "0.45rem",
    backgroundColor: `${colors.white}`,
  };
  return <div style={{ ...thumbStyle }} />;
};

function App() {
  return (
    <Scrollbars
      renderThumbHorizontal={renderThumb}
      renderThumbVertical={renderThumb}
      thumbSize={200}
      autoHide
      autoHideTimeout={1000}
      style={{ height: "100vh" }}
      universal
    >
      <AppContainer>
        <GlobalStyles />
        <Navbar />
        <Main />
      </AppContainer>
    </Scrollbars>
  );
}

export default App;
