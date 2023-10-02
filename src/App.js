import './App.css';

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import { Cart } from './components/Cart/Cart';


function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/cart" element={<Cart />}/>
            <Route path="/" element={<ItemListContainer greeting={'Bienvenidos!!!'} />} />
            <Route path="/category/:categoryId" element={<ItemListContainer greeting={'Bienvenidos!!!'} />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />

          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
