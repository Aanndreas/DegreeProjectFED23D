import "./App.css";
import { useState } from "react";
import CardList from "./components/CardList";
import SearchBar from "./components/SearchBar";

function App() {
	const [searchTerm, setSearchTerm] = useState("");

	const handleSearch = (term: string) => {
		setSearchTerm(term);
	};

	return (
		<div className="App">
			<h1>Gathering Magic in Magic: The Gathering</h1>
			<SearchBar onSearch={handleSearch} />
			<CardList searchTerm={searchTerm} />
		</div>
	);
}

export default App;
