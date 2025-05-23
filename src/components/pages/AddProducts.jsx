import { ProductForm } from '../ProductForm';
import { useNavigate } from 'react-router';


export function AddProduct({ onAddProduct }) {
  const navigate = useNavigate();
  function handleAddProduct(productData) {
    onAddProduct(productData);
    navigate('/products');
}
  return (
    <div>
      <h2>Add a new Product</h2>
           <p>
    <Link to="/add-product">Add a new product</Link>
</p>
      <ProductForm onAddProduct={(newItem) => onAddProduct(newItem)} />
      <ProductForm onAddProduct={(productData) => handleAddProduct(productData)} />
    </div>
  );
}