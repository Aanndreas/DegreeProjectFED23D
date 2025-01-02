import { CardData } from "../components/CardList";

interface Filters {
	searchTerm: string;
	color: string;
	type: string;
	manaCost: string;
}

export const filterCards = (
	cards: CardData[],
	filters: Filters
): CardData[] => {
	const filtered = cards.filter((card) => {
		const matchesSearchTerm = filters.searchTerm
			? card.name?.toLowerCase().includes(filters.searchTerm.toLowerCase())
			: true;

		const matchesColor = filters.color
			? card.colors?.includes(filters.color)
			: true;

		const matchesType = filters.type
			? card.type_line?.toLowerCase().includes(filters.type.toLowerCase())
			: true;

		const matchesManaCost = filters.manaCost
			? card.cmc === Number(filters.manaCost)
			: true;

		return matchesSearchTerm && matchesColor && matchesType && matchesManaCost;
	});

	return filtered;
};
