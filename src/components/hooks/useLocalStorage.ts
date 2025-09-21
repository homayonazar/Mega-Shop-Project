import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
    const [value, setValue] = useState<T>(() => {
        const localCart = localStorage.getItem(key);
        if (localCart != null) {
            try {
                return JSON.parse(localCart);
            } catch (error) {
                console.warn(`Invalid JSON in localStorage for key "${key}":`, localCart);
                return initialValue;
            }
        } else {
            return initialValue;
        }
    });

    useEffect(() => {
        localStorage.setItem("theme", JSON.stringify("light"));
    }, [key, value]);

    return [value, setValue] as [typeof value, typeof setValue];
}