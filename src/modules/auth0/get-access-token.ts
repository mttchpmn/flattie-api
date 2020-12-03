import Axios, { AxiosRequestConfig } from "axios";

export const getAccessToken = async (): Promise<{
  access_token: string;
  expires_in: number;
  token_type: string;
}> => {
  const options: AxiosRequestConfig = {
    method: "POST",
    url: "https://flattie.au.auth0.com/oauth/token",
    headers: { "content-type": "application/json" },
    data: {
      client_id: process.env.AUTH0_CLIENT_ID,
      client_secret: process.env.AUTH0_CLIENT_SECRET,
      audience: process.env.AUTH0_AUDIENCE,
      grant_type: "client_credentials",
    },
  };

  const { data } = await Axios.request(options);

  return data;
};
