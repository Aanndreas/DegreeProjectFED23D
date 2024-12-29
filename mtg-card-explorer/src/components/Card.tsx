import React from "react";

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
	return (
		<div className="card">
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
		</div>
	);
};

export default Card;
