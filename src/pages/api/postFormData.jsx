import axios from "axios";

export default async function handler(req, res) {
    const SERVICE_ID = process.env.EMAIL_JS_SERVICE_ID;
    const TEMPLATE_ID = process.env.EMAIL_JS_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.EMAIL_JS_PUBLIC_KEY;
    const PRIVATE_KEY = process.env.EMAIL_JS_PRIVATE_KEY;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
        return res.status(500).json({ message: "Missing emailjs environment variables" });
    }

    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method Not Allowed" });
    }

    const data = req.body;

    const FORM_DATA = {
        service_id: SERVICE_ID,
        template_id: TEMPLATE_ID,
        user_id: PUBLIC_KEY,
        accessToken: PRIVATE_KEY,
        template_params: {
            'first_name': data.first_name,
            'last_name': data.last_name,
            'email': data.email,
            'phone': data.phone,
            'company': data.company,
            'message': data.message
        }
    };

    try {
        const response = await axios.post('https://api.emailjs.com/api/v1.0/email/send', JSON.stringify(FORM_DATA), {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        console.log('Form sent successfully!', response.status, response.data);

        if(response.status === 200) {
            return res.status(200).json({ message: "Form sent successfully" });
        } else {
            return res.status(response.status).json({ message: error.response?.data?.message || "Error sending form" });
        }
    } catch (error) {
        console.error('Error sending form data:', error);

        const errorStatus = error.response?.status || 500;
        const errorMessage = error.response?.data?.message || error.message;

        return res.status(errorStatus).json({
            status: errorStatus === 500 ? "Internal Server Error" : "Error",
            message: errorMessage,
        });
    }
}
