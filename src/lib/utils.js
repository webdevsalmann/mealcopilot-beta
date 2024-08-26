import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export async function formatData(data) {
  const formattedData = new FormData();
  
  Object.entries(data).forEach(([key, value]) => {
      const transformedKey = `entry.${key}`;
      formattedData.append(transformedKey, value);
  });

  return formattedData;
}