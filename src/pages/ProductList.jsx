
import { useCallback, useMemo } from "react";
import { useSearchParams } from "react-router";
import { fetchProducts } from "../api/productsApi";
import { useFetch } from "../hooks/useFetch";
import ProductCard from "../components/ProductCard";

export default function ProductList() {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("q") || "";
  const category = searchParams.get("category") || "";

  const loadProducts = useCallback(
    (signal) => fetchProducts(signal),
    []
  );

  const { loading, error, data } = useFetch(loadProducts);

  const categories = useMemo(() => {
    if (!data) return [];

    return [...new Set(data.map((product) => product.category))].sort();
  }, [data]);

  const filteredProducts = useMemo(() => {
    if (!data) return [];

    return data.filter((product) => {
      const matchesTitle = product.title
        .toLowerCase()
        .includes(query.toLowerCase());

      const matchesCategory =
        !category || product.category === category;

      return matchesTitle && matchesCategory;
    });
  }, [data, query, category]);

  function updateFilter(key, value) {
    const nextParams = new URLSearchParams(searchParams);

    if (value) {
      nextParams.set(key, value);
    } else {
      nextParams.delete(key);
    }

    setSearchParams(nextParams);
  }

  if (loading) return <p>Loading products...</p>;

  if (error) return <p>Error: {error}</p>;

  return (
    <section>
      <h1>Our Products</h1>

      <div className="filters">
        <input
          type="text"
          placeholder="Search products..."
          value={query}
          onChange={(event) => updateFilter("q", event.target.value)}
        />

        <select
          value={category}
          onChange={(event) =>
            updateFilter("category", event.target.value)
          }
        >
          <option value="">All categories</option>

          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      {filteredProducts.length === 0 ? (
        <p>No matching products found.</p>
      ) : (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}
