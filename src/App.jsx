import { Route, Routes } from "react-router-dom";
import "./App.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Product from "./pages/Product.jsx";
import Contact from "./pages/Contact.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import Navbar from "./components/Navbar.jsx";

const App = () => {
  
  return (
    <>
    <Navbar />
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="product" element={<Product />} />
      <Route path="About" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<PageNotFound />} />

    </Routes>
    </>
  );
};

export default App;
