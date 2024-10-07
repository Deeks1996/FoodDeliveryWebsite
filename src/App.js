import React from "react";
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
import Home from "./pages/home/home";
import About from "./pages/about";
import Menu from "./pages/menu";
import Shop from "./pages/shop";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import Cart from "./pages/cart";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="/about" element = {<About/>} />
        <Route path="/menu" element = {<Menu/>} />
        <Route path="/shop" element = {<Shop/>} />
        <Route path="/blog" element = {<Blog/>} />
        <Route path="/contact" element = {<Contact/>} />
        <Route path="/cart" element = {<Cart/>} />
      </Routes>
    </Router>
  );
}

export default App;

