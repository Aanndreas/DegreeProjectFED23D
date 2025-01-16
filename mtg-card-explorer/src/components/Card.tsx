import React, { useState, useEffect } from "react";

interface CardProps {
  card: {
    id: string;
    name: string;
    image_uris?: { normal: string };
    mana_cost: string;
    type_line: string;
    oracle_text?: string;
  };
}

const Card: React.FC<CardProps> = ({ card }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isEnlarged, setIsEnlarged] = useState(false);

  // Load favorites from localStorage
  useEffect(() => {
    const storedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    setIsFavorite(storedFavorites.some((fav: any) => fav.id === card.id));
  }, [card.id]);

  // Toggle favorite status
  const toggleFavorite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation(); // Prevent card click from triggering enlarge
    let storedFavorites = JSON.parse(localStorage.getItem("favorites") || "[]");

    if (isFavorite) {
      storedFavorites = storedFavorites.filter(
        (fav: any) => fav.id !== card.id
      );
    } else {
      storedFavorites.push(card);
    }

    localStorage.setItem("favorites", JSON.stringify(storedFavorites));
    setIsFavorite(!isFavorite);
  };

  const toggleEnlarge = () => {
    if (window.innerWidth <= 600) {
      // Mobile: enlarge card
      setIsEnlarged(!isEnlarged);
    } else {
      // Desktop: open in a new tab
      const url = `/card/${card.id}`;
      window.open(url, "_blank");
    }
  };

  return (
    <>
      {/* Overlay when enlarged - outside card div to cover whole screen */}
      {isEnlarged && (
        <div className="overlay" onClick={() => setIsEnlarged(false)}></div>
      )}

      {/* Card that can be enlarged */}
      <div
        className={`card ${isEnlarged ? "enlarged" : ""}`}
        onClick={toggleEnlarge}
      >
        <h3 className="card-name">{card.name}</h3>
        <img
          className="card-image"
          src={card.image_uris?.normal || "https://via.placeholder.com/200x278"}
          alt={card.name}
        />
        <p className="card-mana">
          {card.mana_cost ? card.mana_cost : "No mana cost available"}
        </p>
        <p className="card-type">
          {card.type_line ? card.type_line : "No type available"}
        </p>
        <p className="card-text">
          {card.oracle_text ? card.oracle_text : "No text available"}
        </p>
        {/* Favorite button */}
        <button
          className={`favorite-button ${isFavorite ? "favorited" : ""}`}
          onClick={toggleFavorite}
        >
          {isFavorite ? "★ Favorited" : "☆ Add to Favorites"}
        </button>
      </div>
    </>
  );
};

export default Card;
