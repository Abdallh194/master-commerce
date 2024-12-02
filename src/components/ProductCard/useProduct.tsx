import { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "@redux/hooks";

const useProducts = () => {
  const { FavItem, CartItem } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const [isDisabled, setisDisabled] = useState(false);

  // hide alert successAddCart
  const [successAddCart, setSuccessAddCart] = useState(false);
  const [SuccessAddwishlist, setSuccessAddwishlist] = useState(false);
  useEffect(() => {
    if (successAddCart) {
      const timer = setTimeout(() => {
        setSuccessAddCart(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [successAddCart]);
  const handleAddToCart = () => {
    setSuccessAddCart(true);
  };

  useEffect(() => {
    if (SuccessAddwishlist) {
      const timer = setTimeout(() => {
        setSuccessAddwishlist(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [SuccessAddwishlist]);
  //leading effect
  useEffect(() => {
    if (!isDisabled) {
      return;
    }
    setisDisabled(true);
    setSuccessAddCart(false);
    const debounce = setInterval(() => {
      setisDisabled(false);
      setSuccessAddCart(true);
    }, 300);
    return () => clearTimeout(debounce);
  }, [isDisabled]);

  const containerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -800, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 800, behavior: "smooth" });
    }
  };
  return {
    FavItem,
    dispatch,
    isDisabled,
    setisDisabled,
    CartItem,
    scrollLeft,
    scrollRight,
    containerRef,
    setSuccessAddCart,
    handleAddToCart,
    successAddCart,
    SuccessAddwishlist,
    setSuccessAddwishlist,
  };
};

export default useProducts;
