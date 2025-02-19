import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import CardList from "../components/CardList";
import SEO from "../components/SEO";

interface HomePageProps {
  filters: {
    searchTerm: string;
    color: string;
    type: string;
    manaCost: string;
  };
  handleSearch: (term: string) => void;
  handleFilterChange: (filterName: string, value: string) => void;
  handleResetFilters: () => void;
}

const HomePage: React.FC<HomePageProps> = ({
  filters,
  handleSearch,
  handleFilterChange,
  handleResetFilters,
}) => {
  const [isResetting, setIsResetting] = useState(false);

  const areFiltersActive =
    filters.searchTerm !== "" ||
    filters.color !== "" ||
    filters.type !== "" ||
    filters.manaCost !== "";

  const handleResetClick = () => {
    console.log("Resetting filters...");

    setIsResetting(true);
    setTimeout(() => {
      handleResetFilters();
      setIsResetting(false);
    }, 300);
  };

  return (
    <>
      <SEO
        title="MTG Card Explorer - Find and Filter Magic: The Gathering Cards"
        description="Explore and search Magic: The Gathering cards. Filter by color, type, and mana cost to find your favorite cards."
        keywords="Magic the Gathering, MTG, card search, deck builder, card explorer"
      />
      <h1>Gathering Magic in Magic: The Gathering</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="filters">
        <select
          onChange={(e) => handleFilterChange("color", e.target.value)}
          value={filters.color}
        >
          <option value="">All Colors</option>
          <option value="W">White</option>
          <option value="U">Blue</option>
          <option value="B">Black</option>
          <option value="R">Red</option>
          <option value="G">Green</option>
        </select>
        <select
          onChange={(e) => handleFilterChange("type", e.target.value)}
          value={filters.type}
        >
          <option value="">All Types</option>
          <option value="Creature">Creature</option>
          <option value="Instant">Instant</option>
          <option value="Sorcery">Sorcery</option>
          <option value="Artifact">Artifact</option>
          <option value="Enchantment">Enchantment</option>
          <option value="Land">Land</option>
        </select>
        <select
          onChange={(e) => handleFilterChange("manaCost", e.target.value)}
          value={filters.manaCost}
        >
          <option value="">All Mana Costs</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

      {/*Show reset button if filters are active*/}
      {areFiltersActive && (
        <button
          className={`btn-reset ${isResetting ? "is-resetting" : ""}`}
          onClick={handleResetClick}
        >
          Reset
        </button>
      )}
      <CardList filters={filters} />
    </>
  );
};

export default HomePage;
