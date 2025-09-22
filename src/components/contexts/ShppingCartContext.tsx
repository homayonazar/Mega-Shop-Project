import React, { createContext, useContext, useEffect, useState } from "react";

interface ShoppingCartProviderProps {
    children: React.ReactNode;
}

interface CartItem {
    id: number;
    qty: number;
}

interface ShppingCartContextType {
    cartItem: CartItem[];
    handleIncreaseProductQty: (id: number) => void;
    handleDecreaseProductQty: (id: number) => void;
    getProductQty: (id: number) => number;
    handleRemoveProduct: (id: number) => void;
    cartQty: number;

}


export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    try {
      const localValue = localStorage.getItem(key);
      if (localValue != null) {
        return JSON.parse(localValue) as T;
      } else {
        return initialValue;
      }
    } catch (error) {
      console.warn(`Invalid JSON in localStorage for key "${key}"`);
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as [typeof value, typeof setValue];
}

export const ShppingCartContext = createContext({} as ShppingCartContextType);

export const useShppingCartContext = () => useContext(ShppingCartContext);

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
    // ----- Cart -----
    const [cartItem, setCartItem] = useLocalStorage<CartItem[]>("cartItem", []);

    const handleIncreaseProductQty = (id: number) => {
        setCartItem((currentItem) => {
            const selectedItem = currentItem.find(item => item.id === id);
            if (!selectedItem) return [...currentItem, { id, qty: 1 }];
            return currentItem.map(item => item.id === id ? { ...item, qty: item.qty + 1 } : item);
        });
    };

    const handleDecreaseProductQty = (id: number) => {
        setCartItem((currentItem) => {
            const selectedItem = currentItem.find(item => item.id === id);
            if (!selectedItem) return currentItem;
            if (selectedItem.qty === 1) return currentItem.filter(item => item.id !== id);
            return currentItem.map(item => item.id === id ? { ...item, qty: item.qty - 1 } : item);
        });
    };

    const handleRemoveProduct = (id: number) => {
        setCartItem((currentItem) => currentItem.filter(item => item.id !== id));
    };

    const getProductQty = (id: number) => cartItem.find(item => item.id === id)?.qty || 0;

    const cartQty = cartItem.reduce((total, item) => total + item.qty, 0);

    return (
        <ShppingCartContext.Provider value={{
            cartItem,
            handleIncreaseProductQty,
            handleDecreaseProductQty,
            handleRemoveProduct,
            getProductQty,
            cartQty
        }}>
            {children}
        </ShppingCartContext.Provider>
    );
}