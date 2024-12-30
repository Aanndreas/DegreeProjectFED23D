import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

interface CardData {
	id: string;
	name: string;
	image_uris?: { normal: string };
	mana_cost: string;
	type_line: string;
}

interface CardListProps {
	searchTerm: string; //prop for search term
}

const CardList: React.FC<CardListProps> = ({ searchTerm }) => {
	const [cards, setCards] = useState<CardData[]>([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchCards = async () => {
			setLoading(true);
			try {
				const apiUrl = `${import.meta.env.VITE_API_URL}/cards/search?q=cmc>0&page=1`;
				const response = await axios.get(apiUrl, {
					headers: {
						Accept: "application/json",
					},
				});
				setCards(response.data.data.slice(0, 20)); // Limit to 20 cards during development
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

	const filteredCards = cards.filter(
		(card) =>
			card.name && card.name.toLowerCase().includes(searchTerm.toLowerCase())
	);

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
