import { ILocalStorage } from "../interfaces";

export const TOKEN_KEY = "@pokedex";
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
  return JSON.parse(localStorage.getItem(TOKEN_KEY) as string);
}
export function setFavorites(storage: ILocalStorage): void {
  localStorage.setItem(TOKEN_KEY, JSON.stringify(storage));
}

export function getStorage(): ILocalStorage {
  return JSON.parse(localStorage.getItem(TOKEN_KEY) as string);
}

export function setStorage(storage: ILocalStorage): void {
  localStorage.setItem(TOKEN_KEY, JSON.stringify(storage));
}

export function getPerPage(): number {
  return getStorage().perPage;
}

export function setPerPage(perPage: number) {
  const storage = getStorage();
  storage.perPage = perPage;
  setStorage(storage);
}

export function createDefaultStorage() {
  localStorage.setItem(TOKEN_KEY, JSON.stringify({ favs: [], perPage: 30 }));
}
