import { ILocalStorage } from "../interfaces";

export const TOKEN_KEY_FAVS = "@pokedex";
export function validateLocalStorage(): boolean {
  const storage = getFavorites();
  if (storage) return true;
  return false;
}
export function validateFavorites(): boolean {
  if (validateLocalStorage()) {
    const storage = getFavorites();
    if (storage.favs.length > 0) return true;
    return false;
  }
  return false;
}
export function getFavorites(): ILocalStorage {
  return JSON.parse(localStorage.getItem(TOKEN_KEY_FAVS) as string);
}
export function setFavorites(storage: ILocalStorage): void {
  localStorage.setItem(TOKEN_KEY_FAVS, JSON.stringify(storage));
}
