import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "../SearchBar";

describe("SearchBar Component", () => {
	it("calls onSearch with the correct value", () => {
		const mockOnSearch = jest.fn();
		render(<SearchBar onSearch={mockOnSearch} />);

		const input = screen.getByPlaceholderText("Search for a card...");
		fireEvent.change(input, { target: { value: "Black Lotus" } });

		expect(mockOnSearch).toHaveBeenCalledWith("Black Lotus");
	});

	it("renders the input field correctly", () => {
		render(<SearchBar onSearch={jest.fn()} />);

		const input = screen.getByPlaceholderText("Search for a card...");
		expect(input).toBeInTheDocument();
	});
});
