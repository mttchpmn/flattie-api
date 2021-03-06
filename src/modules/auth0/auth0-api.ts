import Axios from "axios";

import { getAccessToken } from "./get-access-token";

const API_URL = `https://${process.env.AUTH0_MANAGEMENT_API_DOMAIN}/api/v2`;

export const getUserByEmail = async (email: string): Promise<any> => {
  const emailQuery = email.replace(/@/, "%40");
  const url = `${API_URL}/users-by-email?email=${emailQuery}`;

  const { access_token } = await getAccessToken();

  console.log({ access_token });

  const { data } = await Axios.get(url, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  console.log(data);

  return data[0];
};

export const updateAppMetadata = async (
  id: string,
  payload: Record<string, unknown>
) => {
  const idQuery = id.replace(/\|/, "%7C");
  const url = `${API_URL}/users/${idQuery}`;

  console.log({ url });

  const { access_token } = await getAccessToken();

  const { data: response } = await Axios.patch(
    url,
    { app_metadata: payload },
    {
      headers: { Authorization: `Bearer ${access_token}` },
    }
  );

  return response;
};
