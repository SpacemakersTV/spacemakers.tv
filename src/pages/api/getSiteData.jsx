import axios from "axios";

export default async function handler(req, res) {
	// const endpoint = `${process.env.SITE_DATA_ENDPOINT}`;
	const endpoint = `https://storage.googleapis.com/spacemakers_site/_site_data`;

	try {
		const response = await axios.get(endpoint);
		return res.status(200).json(response.data);
	} catch (error) {
		console.error("Error fetching report data:", error);

		const errorStatus = error.response?.status || 500;
		const errorMessage = error.response?.data?.message || error.message;

		return res.status(errorStatus).json({
			status: errorStatus === 500 ? "Internal Server Error " : "Error",
			message: errorMessage,
		});
	}
}
