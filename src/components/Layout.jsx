
import { Outlet } from "react-router";
import NavBar from "./NavBar";
import { useLocalStorage } from "../hooks/useLocalStorage";

export default function Layout() {
  const [theme, setTheme] = useLocalStorage("shop-theme", "light");

  return (
    <div className={`app ${theme}`}>
      <NavBar theme={theme} setTheme={setTheme} />

      <main className="main-content">
        <Outlet />
      </main>

      <footer>
        <p>My Shop - Assignment 7</p>
      </footer>
    </div>
  );
}
