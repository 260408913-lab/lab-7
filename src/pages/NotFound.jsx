
import { Link } from "react-router";

export default function NotFound() {
  return (
    <section>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/">Return Home</Link>
    </section>
  );
}
