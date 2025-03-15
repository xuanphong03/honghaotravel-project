import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { v4 as uuidv4 } from "uuid";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// Utility function to map data with UUID
export const mapWithUuid = (data, key) =>
  data.map((item) => ({ id: uuidv4(), value: item[key] }));
