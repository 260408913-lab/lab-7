
import { NavLink, useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";
import { useCartStore } from "../store/cartStore";
import { useLocalStorage } from "../hooks/useLocalStorage";

export default function NavBar() {
  const { user, logoutUser } = useAuth();
  const navigate = useNavigate();

  const itemCount = useCartStore((state) =>
    state.items.reduce((total, item) => total + item.quantity, 0)
  );

  const [theme, setTheme] = useLocalStorage("shop-theme", "light");

  function handleLogout() {
    logoutUser();
    navigate("/", { replace: true });
  }

  return (
    <nav className="navbar">
      <NavLink to="/" className="brand">
        My Shop
      </NavLink>

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>

        <NavLink to="/cart">
          Cart ({itemCount})
        </NavLink>

        {user ? (
          <>
            <span>{user.username}</span>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}

        <button
          onClick={() =>
            setTheme(theme === "light" ? "dark" : "light")
          }
        >
          {theme === "light" ? "Dark mode" : "Light mode"}
        </button>
      </div>
    </nav>
  );
}
