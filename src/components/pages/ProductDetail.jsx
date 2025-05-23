import { useParams } from 'react';

export function ProductDetail({Products }) {
  const { id } = useParams();
  const product = Products.find((p) => p.id === id);

  if (!product) 

  return (
    <div>
        return (
    <div>
      <h2>Product Detail</h2>
      <p>Product description here</p>
      <p>Price: 0 €</p>

        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>Price: {product.price} €</p>
    </div>
);
    </div>
  );
}