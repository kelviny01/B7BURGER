// RRD:
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components:
import Header from "./components/Header/Header";
/* import Search from "./components/Search/Search"; */
/* import CardBurger from "./components/CardBurger/CardBurger"; */
/* import Footer from "./components/Footer/Footer"; */

// Pages:
import Home from "./pages/Home/Home";
import Burgers from "./pages/Burgers/Burgers";
import Contact from "./pages/Contact/Contact";

// CSS:
import "./App.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/burgers" element={<Burgers />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
