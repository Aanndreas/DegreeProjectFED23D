import "./styles/App.css";
import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layouts/Layout";
import HomePage from "./pages/Homepage";
import CardDetailsPage from "./pages/CardDetailsPage";
import FavoritesPage from "./pages/FavoritesPage";

function App() {
  const [filters, setFilters] = useState({
    searchTerm: "",
    color: "",
    type: "",
    manaCost: "",
  });

  const handleSearch = (term: string) => {
    setFilters((prevFilters) => ({ ...prevFilters, searchTerm: term }));
  };

  const handleFilterChange = (filterName: string, value: string) => {
    setFilters((prevFilters) => ({ ...prevFilters, [filterName]: value }));
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: (
            <HomePage
              filters={filters}
              handleSearch={handleSearch}
              handleFilterChange={handleFilterChange}
            />
          ),
        },
        {
          path: "/card/:id",
          element: <CardDetailsPage />,
        },
        {
          path: "/favorites",
          element: <FavoritesPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
