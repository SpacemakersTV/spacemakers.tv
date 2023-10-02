// import axios from "axios";

// export default async function handler(req, res) {
// 	const { formId } = req;

// 	if (!formId) {
// 		res.status(400).json({ message: "formId is required" });
// 		return;
// 	}

// 	const config = {
// 		headers: {
// 			"x-functions-key": process.env.FUNCTION_KEY,
// 		},
// 	};

// 	// const endpoint = `${process.env.FUNCTION_ENDPOINT}?formId=${formId}`;
// 	// const endpoint = `http://localhost:7071/api/pyprdfetchquestionnairedata?formId=${formId}`;
// 	const endpoint = `http://localhost:7071/api/http_trigger`;

// 	try {
// 		const response = await axios.get(endpoint, config);
// 		return response.data;

// 		res.status(200).json(response.data);
// 	} catch (error) {
// 		console.error("Error fetching report data:", error);

// 		const errorStatus = error.response?.status || 500;
// 		const errorMessage = error.response?.data?.message || error.message;

// 		switch (errorStatus) {
// 			case 400:
// 				res.status(400).json({
// 					status: "Bad Request",
// 					message: errorMessage,
// 					details:
// 						"The request was invalid. Please check the input parameters.",
// 				});
// 				break;
// 			case 401:
// 				res.status(401).json({
// 					status: "Unauthorized",
// 					message: errorMessage,
// 					details:
// 						"Authentication failed. Please check the authorization header.",
// 				});
// 				break;
// 			default:
// 				res.status(errorStatus).json({
// 					status: "Internal Server Error",
// 					message: errorMessage,
// 				});
// 		}
// 	}
// }
