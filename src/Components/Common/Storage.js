export const getLocalStorage = (key, isJson = false) => {
  const val = window.localStorage.getItem(key);
  return isJson ? JSON.parse(val) : val;
};

export const setLocalStorage = (key, val, isJson = false) => {
  window.localStorage.setItem(key, isJson ? JSON.stringify(val) : val);
};

export const removeLocalStorage = (key) => {
  window.localStorage.removeItem(key);
};
