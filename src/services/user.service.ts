import { getAccessToken } from "../modules/auth0/get-access-token";
import * as Auth0Api from "../modules/auth0/auth0-api";

export const getUserById = (id: string) => {};

export const getUserByEmail = async (email: string): Promise<any> => {
  const user = await Auth0Api.getUserByEmail(email);

  return user;
};

export const updateUserMetadata = (id: string, payload: unknown) => {};
