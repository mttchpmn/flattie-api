import { v4 as uuid } from "uuid";
import { Flat, FlatInput } from "../types/flat.types";

const flats: { [key: string]: Flat } = {};

export const createFlat = (flat: FlatInput): string => {
  const id = uuid();

  flats[id] = { id, ...flat };

  return id;
};

export const getFlat = (id: string) => {
  return flats[id];
};

export const updateFlat = (id: string) => {};

export const deleteFlat = (id: string) => {};
