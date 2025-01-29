import React, { useState, useEffect } from "react";
import Card from "../components/Card";

const FavoritesPage: React.FC = () => {
  const [favorites, setFavorites] = useState<any[]>([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    setFavorites(storedFavorites);
  }, []);

  const removeFavorite = (id: string) => {
    const updatedFavorites = favorites.filter((fav) => fav.id !== id);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
  };

  if (favorites.length === 0) {
    return (
      <div>
        <h2>No favorites saved yet.</h2>
      </div>
    );
  }

  return (
    <div className="favorites-container">
      <h1>Your Favorite Cards</h1>
      <div className="card-grid">
        {favorites.map((card) => (
          <div key={card.id} className="favorite-card">
            <Card card={card} />
            <button
              className="btn-remove-favorite"
              onClick={() => removeFavorite(card.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
