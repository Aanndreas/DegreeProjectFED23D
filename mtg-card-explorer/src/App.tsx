import "./styles/App.css";
import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layouts/Layout";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/Homepage";
import CardDetailsPage from "./pages/CardDetailsPage";
import FavoritesPage from "./pages/FavoritesPage";
import IntegrityPolicy from "./pages/IntegrityPolicy";
import AboutUs from "./pages/AboutUs";

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

  const handleResetFilters = () => {
    setFilters({
      searchTerm: "",
      color: "",
      type: "",
      manaCost: "",
    });
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/home",
      element: (
        <Layout>
          <HomePage
            filters={filters}
            handleSearch={handleSearch}
            handleFilterChange={handleFilterChange}
            handleResetFilters={handleResetFilters}
          />
        </Layout>
      ),
    },
    {
      path: "/card/:id",
      element: (
        <Layout>
          <CardDetailsPage />
        </Layout>
      ),
    },
    {
      path: "/favorites",
      element: (
        <Layout>
          <FavoritesPage />
        </Layout>
      ),
    },
    {
      path: "/integrity-policy",
      element: (
        <Layout>
          <IntegrityPolicy />
        </Layout>
      ),
    },
    {
      path: "/about-us",
      element: (
        <Layout>
          <AboutUs />
        </Layout>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
