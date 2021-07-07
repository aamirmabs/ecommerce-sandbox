import "./App.css";
import Header from "./components/Structural/Header";
import Content from "./components/Structural/Content.js";
import Footer from "./components/Structural/Footer";

function App() {
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div className="container">
        <Content />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
