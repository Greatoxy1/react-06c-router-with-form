import { BrowserRouter ,Route ,Routes } from 'react-router';
import { Home } from './components/pages/Home';
import { About } from './components/pages/About';
import { Contact } from './components/pages/Contact';
import { NavBar } from './components/NavBar';
import { Products } from './components/pages/Products';
import { ProductDetail } from './components/pages/ProductDetail';
import { AddProduct } from './components/pages/AddProducts';
import { uid } from 'uid';
import { useState } from 'react';


const initialProducts = [
    { "id": "13a5ad3a61d", "name": "Red Chair", "description": "A vibrant red chair perfect for modern interiors.", "price": "49.99" },
    { "id": "26ce549768a", "name": "Green Table", "description": "A sturdy green table for any family dinner.", "price": "89.99" },
    { "id": "3cc3e836056", "name": "Blue Sofa", "description": "A comfortable blue sofa that fits your living room perfectly.", "price": "299.99" }
];

export function App() {
  const [products, setProducts] = useState(initialProducts);

  function addProduct(newItem) {
    setProducts([...products, { id: uid(), ...newItem }]);
}

  return (
    <BrowserRouter>
      <div className="App">
        <h1 className="App-headline">Router Basics</h1>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products products={products} />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/products/:id" element={<ProductDetail products={products} />} />
          <Route path ="/useParams/:id" element={<useParams  />}/>
          <Route path ="/add-product" element ={<AddProduct/>}/>
          <Route path="/add-product" element={<AddProduct onAddProduct={(newItem) => addProduct(newItem)} />} />
          </Routes>  
                        </div>
    </BrowserRouter>
  );
}
