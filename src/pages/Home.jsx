
import { Link } from "react-router";

export default function Home() {
  return (
    <section className="home-page">
      <h1>Welcome to My Shop!</h1>

      <p>
        Discover our products and find something you love.
      </p>

      <Link className="primary-button" to="/products">
        Explore Products
      </Link>
    </section>
  );
}
