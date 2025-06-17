import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext<any>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<any[]>([]); // Dữ liệu giỏ hàng
  const [totalItems, setTotalItems] = useState<number>(0); // Tổng số lượng sản phẩm

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      const parsedCart = JSON.parse(storedCart);
      setCartItems(parsedCart);
      updateTotalItems(parsedCart);
    }
  }, []);

  const updateTotalItems = (cart: any[]) => {
    const total = cart.reduce((acc, item) => acc + item.quantity, 0);
    setTotalItems(total);
  };

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, totalItems, updateTotalItems }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
