import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./Components/layout/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import WishList from "./pages/WishList";
import Cart from "./pages/Cart";
import MyAccount from "./pages/MyAccount";

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/account" element={<MyAccount />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
