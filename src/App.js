import './App.css';
import Navbar from './components/Navbar';
import DataStore from './context/ContextState';
import Banner from './components/Banner';
import Cart from './components/Cart';
import Footer from './components/Footer';
import {  HashRouter as Router, Routes, Route } from "react-router-dom";
import CartItems from './components/CartItems';




function App() {
  return (
    <>
      <DataStore>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Banner />} />
            <Route path="/items" element={<CartItems />} />
            <Route path="/" element={<CartItems />} />
          </Routes>
          <Footer />
        </Router>
      </DataStore>


    </>
  );
}

export default App;
