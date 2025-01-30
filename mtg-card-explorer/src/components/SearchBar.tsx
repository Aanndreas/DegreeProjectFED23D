import React from "react";

interface SearchBarProps {
  onSearch: (searchTerm: string) => void; // Prop for handling search input
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value); // Send input value to parent
  };

  return (
    <input
      type="text"
      placeholder="Search for a card..."
      onChange={handleInputChange}
      className="search-bar"
      data-testid="search-bar"
    />
  );
};

export default SearchBar;
