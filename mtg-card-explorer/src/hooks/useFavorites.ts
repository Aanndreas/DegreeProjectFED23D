import { useState, useEffect } from "react";

export interface FavoriteItem {
  id: string;
}

const useFavorites = (cardId?: string) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (cardId) {
      const storedFavorites = JSON.parse(
        localStorage.getItem("favorites") || "[]"
      );
      setIsFavorite(
        storedFavorites.some(
          (favoritedCard: FavoriteItem) => favoritedCard.id === cardId
        )
      );
    }
  }, [cardId]);

  const toggleFavorite = (item: FavoriteItem) => {
    const storedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );

    let updatedFavorites;
    if (isFavorite) {
      updatedFavorites = storedFavorites.filter(
        (favoritedCard: FavoriteItem) => favoritedCard.id !== item.id
      );
    } else {
      updatedFavorites = [...storedFavorites, item];
    }

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setIsFavorite(!isFavorite);
  };

  return { isFavorite, toggleFavorite };
};

export default useFavorites;
