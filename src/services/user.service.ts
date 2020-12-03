import { getAccessToken } from "../modules/auth0/get-access-token";
import * as Auth0Api from "../modules/auth0/auth0-api";

export const getUserById = (id: string) => {};

export const getUserByEmail = async (email: string): Promise<any> => {
  const user = await Auth0Api.getUserByEmail(email);

  return user;
};

export const updateMetadata = async (
  id: string,
  payload: Record<string, unknown>
) => {
  const updatedUser = await Auth0Api.updateAppMetadata(id, payload);

  return updatedUser;
};
