
import { useCallback } from "react";
import { useNavigate, useParams } from "react-router";
import { fetchProduct } from "../api/productsApi";
import { useFetch } from "../hooks/useFetch";
import { useCartStore } from "../store/cartStore";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const addItem = useCartStore((state) => state.addItem);

  const loadProduct = useCallback(
    (signal) => fetchProduct(id, signal),
    [id]
  );

  const { loading, error, data: product } = useFetch(loadProduct);

  if (loading) return <p>Loading product...</p>;

  if (error || !product) {
    return (
      <section>
        <h1>Product not found</h1>
        <p>{error || "This product does not exist."}</p>
        <button onClick={() => navigate("/products")}>
          Back to products
        </button>
      </section>
    );
  }

  return (
    <section className="product-detail">
      <button onClick={() => navigate("/products")}>
        Back
      </button>

      <img src={product.thumbnail} alt={product.title} />

      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>Category: {product.category}</p>
      <h2>${product.price.toFixed(2)}</h2>

      <button onClick={() => addItem(product)}>
        Add to cart
      </button>
    </section>
  );
}
