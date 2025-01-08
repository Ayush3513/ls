import { VercelRequest, VercelResponse } from '@vercel/node';

export default async (req: VercelRequest, res: VercelResponse) => {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', 'https://level-super-mind-xi.vercel.app/');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    // Handle preflight requests
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    const { method } = req;

    if (method === 'POST') {
        try {
            const response = await fetch('https://api.langflow.astra.datastax.com/lf/your-endpoint', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${process.env.LANGFLOW_API_TOKEN}`, // Use environment variable for security
                },
                body: JSON.stringify(req.body),
            });

            const data = await response.json();
            res.status(response.status).json(data);
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
};