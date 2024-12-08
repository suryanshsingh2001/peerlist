import { useEffect, useState } from "react";

function useLocalStorage<T>(key: string, initialValue: T) {
  // Retrieve the value from local storage or use the initial value
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      if (window) {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
      }
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  // Save the value to local storage
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (window) {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue] as const;
}

export default useLocalStorage;
