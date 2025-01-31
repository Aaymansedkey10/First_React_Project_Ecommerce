
import Navbar from './components/Navbar';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Footer from './components/Footer';
import Slider from './components/Slider';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Slider />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
