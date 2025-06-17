'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Sử dụng router để điều hướng
import { formatNumber } from '@ultis/convertStringToNumber';

const CartPage = () => {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const router = useRouter();
 // Lấy dữ liệu từ localStorage khi trang được tải
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);
  const handleRemoveItem = (id: string) => {
    // Lọc bỏ sản phẩm cần xóa khỏi giỏ hàng
    const updatedCart = cartItems.filter((item) => item.id !== id);
    // Cập nhật lại giỏ hàng trong state và localStorage
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };
// Hàm cập nhật số lượng sản phẩm
const handleUpdateQuantity = (id: string, newQuantity: number) => {
  if (newQuantity < 1) {
    // Nếu số lượng nhỏ hơn 1, có thể hiển thị thông báo lỗi hoặc không làm gì
    return;
  }
  // Cập nhật số lượng sản phẩm trong giỏ hàng
  const updatedCart = cartItems.map((item) =>
    item.id === id ? { ...item, quantity: newQuantity } : item
  );
  // Cập nhật lại giỏ hàng trong state và localStorage
  setCartItems(updatedCart);
  localStorage.setItem('cart', JSON.stringify(updatedCart));
};
 // Tổng số lượng sản phẩm
 const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <div className="cart-container">
      <h1 className="font-bold text-3xl mb-4">Giỏ Hàng</h1>
      {/* Hiển thị tổng số lượng sản phẩm */}
      <p className="text-lg font-medium mb-4">
        Sản Phẩm Trong Giỏ Hàng: <span className="font-bold">{totalItems}</span>
      </p>
      {cartItems.length === 0 ? (
        <div className="text-center">
          <p className="mb-4">Giỏ hàng của bạn trống. Bấm nút bên dưới để tiếp tục mua hàng.</p>
          <button
            onClick={() => router.push('/')} // Đường dẫn đến trang mua hàng
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Tiếp Tục Mua Hàng
          </button>
        </div>
      ) : (
        <div>
          <div className="cart-items-list flex flex-col space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="cart-item-image w-24 h-24 object-cover"
                />
                <div className="cart-item-details flex-grow">
                  <h3 className="font-semibold">{item.title}</h3>
                  <div className="flex items-center mt-2">
                    <button
                      className="px-2 py-1 bg-gray-300 rounded-l"
                      onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span className="px-3 py-1 border">{item.quantity}</span>
                    <button
                      className="px-2 py-1 bg-gray-300 rounded-r"
                      onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                    <button
                      className="ml-4 px-3 py-1 bg-red-500 text-white rounded"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      Xóa
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-between items-center">
            <button
              onClick={() => router.push('/')} // Tiếp tục mua sắm khi đã có sản phẩm
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Tiếp Tục Mua Hàng
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
