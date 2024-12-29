import axios from "axios";

const apiClient = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
	headers: {
		"User-Agent": "MTGCardExplorer/1.0",
		Accept: "application/json",
	},
});

export default apiClient;
