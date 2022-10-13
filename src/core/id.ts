import { customAlphabet } from "nanoid";

export function generatId(prefix: string): string {
  const nanoId = customAlphabet(
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
    12
  );
  return `${prefix}_${nanoId()}`;
}
