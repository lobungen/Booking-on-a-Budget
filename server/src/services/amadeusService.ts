import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const AMADEUS_BASE = 'https://test.api.amadeus.com';

export async function getAccessToken() {
  interface AccessTokenResponse {
    access_token: string;
    token_type: string;
    expires_in: number;
  }

  const response = await axios.post<AccessTokenResponse>(`${AMADEUS_BASE}/v1/security/oauth2/token`, new URLSearchParams({
    grant_type: 'client_credentials',
    client_id: process.env.AMADEUS_CLIENT_ID!,
    client_secret: process.env.AMADEUS_CLIENT_SECRET!
  }), {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  });
  return response.data.access_token;
}

export async function searchCity(keyword: string) {
  const token = await getAccessToken();
  const res = await axios.get(`${AMADEUS_BASE}/v1/reference-data/locations`, {
    headers: { Authorization: `Bearer ${token}` },
    params: { keyword, subType: 'CITY' }
  });
  return res.data;
}