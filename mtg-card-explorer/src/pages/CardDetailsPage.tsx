import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import useFavorites from "../hooks/useFavorites";
import SEO from "../components/SEO";

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

  const { isFavorite, toggleFavorite } = useFavorites(id);

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

  if (loading) return <p>Loading card details...</p>;
  if (error) return <p>{error}</p>;
  if (!card) return <p>No card found.</p>;

  return (
    <>
      <SEO
        title={`${card.name} - MTG Card Details`}
        description={
          card.oracle_text ||
          "Discover more about this Magic: The Gathering card."
        }
        image={card.image_uris?.normal || "/default-image.png"}
      />
      <div className="card-details-wrapper">
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
              onClick={() => toggleFavorite(card!)}
            >
              {isFavorite ? "★ Favorited" : "☆ Add to Favorites"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardDetailsPage;
