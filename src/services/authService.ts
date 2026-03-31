export const ACCESS_TOKEN_KEY = "accessToken";
const DEFAULT_STORAGE = sessionStorage;

// if token is already in LS set currentStorage to LS
// else set it to default
let currentStorage: Storage = localStorage.getItem(ACCESS_TOKEN_KEY)
  ? localStorage
  : DEFAULT_STORAGE;

const otherStorage = (): Storage => {
  return currentStorage === localStorage ? sessionStorage : localStorage;
};

export const authStorageService = {
  setStorage(storage: Storage) {
    currentStorage = storage;
  },

  setToken(value: string) {
    currentStorage?.setItem(ACCESS_TOKEN_KEY, value);
  },

  getToken(): string | null {
    return (
      currentStorage.getItem(ACCESS_TOKEN_KEY) ||
      otherStorage().getItem(ACCESS_TOKEN_KEY)
    );
  },

  clearToken() {
    sessionStorage.removeItem(ACCESS_TOKEN_KEY);
    localStorage.removeItem(ACCESS_TOKEN_KEY);
  },
};
