import React, { memo } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import useProducts from "./useProduct";
import ProductsLoop from "./ProductsLoop";

const ProductCard: React.FC<ProductListProps> = ({ products }) => {
  const { scrollLeft, scrollRight, containerRef } = useProducts();

  return (
    <div className="position-relative">
      <div className="btns">
        <button className="button left" onClick={scrollLeft}>
          <FaArrowLeft />
        </button>
        <button className="button right" onClick={scrollRight}>
          <FaArrowRight />
        </button>
      </div>
      <div className="Products-container" ref={containerRef}>
        <ProductsLoop products={products} isfav={false} />
      </div>
    </div>
  );
};

export default memo(ProductCard);
