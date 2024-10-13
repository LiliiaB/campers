import { Routes, Route } from "react-router-dom";

import "./App.css";
import { HomePage } from "./pages/HomePage.jsx";
import { FavoritePage } from "./pages/FavoritesPage";
import { CatalogPage } from "./pages/CatalogPage";
import { NavBar } from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<FavoritePage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
