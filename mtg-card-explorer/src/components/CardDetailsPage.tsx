import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

interface CardData {
  id: string;
  name: string;
  image_uris?: { normal: string };
  mana_cost: string;
  type_line: string;
  rarity?: string;
  oracle_text?: string;
  flavor_text?: string;
  set_name?: string;
  artist?: string;
}

const CardDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const [card, setCard] = useState<CardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const fetchCard = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/cards/${id}`
        );
        setCard(response.data);
      } catch (err) {
        setError("Failed to load card details.");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchCard();
    }
  }, [id]);

  // Load favorites from localStorage
  useEffect(() => {
    const storedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    setIsFavorite(
      card ? storedFavorites.some((fav: any) => fav.id === card.id) : false
    );
  }, [card ? card.id : null]);

  const toggleFavorite = () => {
    if (!card) return;

    let storedFavorites = JSON.parse(localStorage.getItem("favorites") || "[]");

    setIsFavorite(storedFavorites.some((fav: any) => fav.id === id));

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

  if (loading) return <p>Loading card details...</p>;
  if (error) return <p>{error}</p>;
  if (!card) return <p>No card found.</p>;

  return (
    <div className="card-details-wrapper">
      <button
        className="btn-back-to-main"
        onClick={() => (window.location.href = "/")}
      >
        Back to main page
      </button>
      <div className="card-details-img-and-text">
        <img src={card.image_uris?.normal} alt={card.name} />
        <div className="card-details-page-info-text">
          <h2>{card.name}</h2>
          <p>
            <strong>Mana Cost:</strong> {card.mana_cost || "N/A"}
          </p>
          <p>
            <strong>Type:</strong> {card.type_line}
          </p>
          <p>
            <strong>Rarity:</strong> {card.rarity || "N/A"}
          </p>
          <p>
            <strong>Oracle Text:</strong>{" "}
            {card.oracle_text || "No text available"}
          </p>
          <strong>Flavor Text:</strong>{" "}
          {card.flavor_text || "No flavor text available"}
          <p>
            <strong>Set Name:</strong> {card.set_name || "N/A"}
          </p>
          <p>
            <strong>Artist:</strong> {card.artist || "N/A"}
          </p>
          <button
            className={`favorite-button ${isFavorite ? "favorited" : ""}`}
            onClick={toggleFavorite}
          >
            {isFavorite ? "★ Favorited" : "☆ Add to Favorites"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardDetailsPage;
