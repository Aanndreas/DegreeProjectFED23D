import React from "react";
import SearchBar from "../components/SearchBar";
import CardList from "../components/CardList";

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
  return (
    <>
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
      <button className="btn-reset-filter" onClick={handleResetFilters}>
        Reset Filters
      </button>
      <CardList filters={filters} />
    </>
  );
};

export default HomePage;
