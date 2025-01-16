import "./App.css";
import { useState } from "react";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import CardList from "./components/CardList";
import CardDetailsPage from "./components/CardDetailsPage";
import FavoritesPage from "./components/FavoritesPage"; 
import SearchBar from "./components/SearchBar";

function App() {
	const [filters, setFilters] = useState({
		searchTerm: "",
		color: "",
		type: "",
		manaCost: "",
	});

	const handleSearch = (term: string) => {
		setFilters((prevFilters) => ({ ...prevFilters, searchTerm: term }));
	};

	const handleFilterChange = (filterName: string, value: string) => {
		setFilters((prevFilters) => ({ ...prevFilters, [filterName]: value }));
	};

	const router = createBrowserRouter([
		{
			path: "/",
			element: (
				<>
					<h1>Gathering Magic in Magic: The Gathering</h1>
					<button className="btn-favorites" onClick={() => window.location.href = "/favorites"}>
                		View favorites
            		</button>
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
							<option value="6">6</option>
							<option value="7">7</option>
							<option value="8">8</option>
							<option value="9">9</option>
							<option value="10">10</option>
							<option value="11">11</option>
							<option value="12">12</option>
							<option value="13">13</option>
							<option value="14">14</option>
						</select>
					</div>
					<CardList filters={filters} />
				</>
			),
		},
		{
			path: "/card/:id",
			element: <CardDetailsPage />,
		},
		{
			path: "/favorites",
			element: <FavoritesPage />,
		},
	]);

	return <RouterProvider router={router} />;
}

export default App;
