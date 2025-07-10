import { useState, useEffect } from "react";

const getDefaultLocalStorageValue = (key) => {
  const storedValue = localStorage.getItem(key);
  if (!storedValue) {
    return null;
  }
  try {
    return JSON.parse(storedValue);
  } catch {
    return null;
  }
};

export const useStickyState = (localStorageKey, defaultValue) => {
  const [state, setState] = useState(
    getDefaultLocalStorageValue(localStorageKey) ?? defaultValue
  );

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(state));
  }, [localStorageKey, state]);

  return [state, setState];
};

