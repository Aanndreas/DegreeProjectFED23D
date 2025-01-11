import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

interface CardData {
	id: string;
	name: string;
	image_uris?: { normal: string };
	mana_cost: string;
	type_line: string;
	oracle_text?: string;
}

const CardDetails = () => {
	const { id } = useParams<{ id: string }>();
	const [card, setCard] = useState<CardData | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

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
		<div className="card-details">
			<h2>{card.name}</h2>
			<img src={card.image_uris?.normal} alt={card.name} />
			<p><strong>Mana Cost:</strong> {card.mana_cost || "N/A"}</p>
			<p><strong>Type:</strong> {card.type_line}</p>
			<p><strong>Oracle Text:</strong> {card.oracle_text || "No text available"}</p>
		</div>
	);
};

export default CardDetails;
