import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import { filterCards } from "../helpers/filterCards";

export interface CardData {
  id: string;
  name: string;
  image_uris?: { normal: string };
  mana_cost: string;
  cmc: number; // Combined Mana Cost (e.g., 3)
  type_line: string;
  colors?: string[];
}

interface CardListProps {
  filters: {
    searchTerm: string;
    color: string;
    type: string;
    manaCost: string;
  };
}

const CardList: React.FC<CardListProps> = ({ filters }) => {
  const [cards, setCards] = useState<CardData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCards = async () => {
      setLoading(true);
      try {
        const apiUrl = `${(globalThis as any).importMeta.env.VITE_API_URL}/cards/search?q=cmc>0&page=1`; // <-- This is the test suite code
        // const apiUrl = `${import.meta.env.VITE_API_URL}/cards/search?q=cmc>0&page=1`; // <-- This is the production code
        const response = await axios.get(apiUrl, {
          headers: {
            Accept: "application/json",
          },
        });
        setCards(response.data.data.slice(0, 30)); // Limit to 30 cards during development
      } catch (err) {
        console.error(err);
        setError("Failed to fetch cards. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    const timeout = setTimeout(fetchCards, 100); // Delay according to scryfall guidelines
    return () => clearTimeout(timeout);
  }, []);

  // Filter cards using helper function
  const filteredCards = filterCards(cards, filters);

  if (loading) return <p>Loading cards...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="card-grid">
      {filteredCards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
};

export default CardList;
