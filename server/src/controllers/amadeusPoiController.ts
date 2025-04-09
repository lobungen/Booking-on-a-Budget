import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const GEOAPIFY_BASE = 'https://api.geoapify.com/v2/places';

interface PointOfInterestRequest {
    query: {
        lat?: string;
        lng?: string;
        category?: string;
    }
}

interface PointOfInterestResponse {
    json: (data: { data?: POIResult[] | { message: string } }) => void;
    status: (code: number) => PointOfInterestResponse;
}

interface POIResult {
    name: string;
    address: string;
    category: string;
}

interface GeoapifyFeature {
    properties?: {
        name?: string;
        address_line1?: string;
        categories?: string[];
    };
}

interface GeoapifyResponse {
    features: GeoapifyFeature[];
}

export async function getPointsOfInterest(
    req: PointOfInterestRequest, 
    res: PointOfInterestResponse
): Promise<void> {
    const { lat, lng, category } = req.query;

    if (!lat || !lng) {
        return res.status(400).json({ data: { message: 'Latitude and longitude required' } });
    }

    const selectedCategory = typeof category === 'string' ? category : 'tourism.sights';
    try {
        console.log(`Requesting Geoapify POIs for ${lat}, ${lng} in category: ${selectedCategory}`);

        const response = await axios.get<GeoapifyResponse>(GEOAPIFY_BASE, {
            params: {
                categories: selectedCategory,
                filter: `circle:${lng},${lat},2000`,
                limit: 20,
                apiKey: process.env.GEOAPIFY_KEY,
            },
        });

        console.log('Geoapify POI results count:', response.data.features.length);
        const results = response.data.features.map((f: GeoapifyFeature) => ({
            name: f.properties?.name || 'Unnamed Place',
            address: f.properties?.address_line1 || '',
            category: f.properties?.categories?.[0] || '',
        }));

        res.json({ data: results });
    } catch (err: any) {
        const message = err.response?.data || err.message;
        console.error('Error fetching POIs from Geoapify:', message);
        res.status(500).json({ data: { message: message || 'Unknown error from Geoapify' } });
    }
}
