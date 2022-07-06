import Body from "./contexts/Body";
import Footer from "./contexts/Footer";
import ThemeContext from "./contexts/Theme";

function App() {
  return (
    <ThemeContext.Provider value="light">
      <Body />
      <Footer />
    </ThemeContext.Provider>
  );
}

export default App;
