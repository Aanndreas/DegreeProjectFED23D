import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import axios from "axios";
import CardList from "../CardList";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

// Mockdata for tests
const mockCards = [
  {
    id: "1",
    name: "White Knight",
    colors: ["W"],
    type_line: "Creature - Human Knight",
    cmc: 2,
  },
  {
    id: "2",
    name: "Blue Mage",
    colors: ["U"],
    type_line: "Creature - Wizard",
    cmc: 3,
  },
  {
    id: "3",
    name: "Black Sorcery",
    colors: ["B"],
    type_line: "Sorcery",
    cmc: 5,
  },
];

describe("CardListFiltering", () => {
  beforeEach(() => {
    mockedAxios.get.mockResolvedValue({
      data: { data: mockCards },
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should display cards based on color", async () => {
    render(
      <MemoryRouter>
        <CardList
          filters={{ searchTerm: "", color: "W", type: "", manaCost: "" }}
        />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText("White Knight")).toBeInTheDocument();
      expect(screen.queryByText("Blue Mage")).not.toBeInTheDocument();
      expect(screen.queryByText("Black Sorcery")).not.toBeInTheDocument();
    });
  });

  it("should display cards based on type filter", async () => {
    render(
      <MemoryRouter>
        <CardList
          filters={{
            searchTerm: "",
            color: "",
            type: "Creature",
            manaCost: "",
          }}
        />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText("White Knight")).toBeInTheDocument();
      expect(screen.getByText("Blue Mage")).toBeInTheDocument();
      expect(screen.queryByText("Black Sorcery")).not.toBeInTheDocument();
    });
  });

  it("should display cards based on mana cost filter", async () => {
    render(
      <MemoryRouter>
        <CardList
          filters={{ searchTerm: "", color: "", type: "", manaCost: "5" }}
        />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText("Black Sorcery")).toBeInTheDocument();
      expect(screen.queryByText("White Knight")).not.toBeInTheDocument();
      expect(screen.queryByText("Blue Mage")).not.toBeInTheDocument();
    });
  });
});
