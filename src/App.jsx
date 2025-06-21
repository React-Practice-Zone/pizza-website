import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Footer } from "./components/Footer";

function App() {
  return (
    <h1 className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </h1>
  );
}

export default App;
