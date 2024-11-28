import React, { useRef } from "react";
import "./App.css";
import { Col } from "react-bootstrap";
import { IconButton, Rating, Tooltip } from "@mui/material";
import { FaRegHeart } from "react-icons/fa";
interface Product {
  id: string;
  images: string;
  title: string;
  price: number;
  cat_prefix: string;
  Quantity: number;
  max: number;
  discount: string;
}
interface ProductListProps {
  products: Product[];
}
const ProductCard: React.FC<ProductListProps> = ({ products }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };
  //original price

  return (
    <div>
      <button className="button left" onClick={scrollLeft}>
        ←
      </button>
      <button className="button right" onClick={scrollRight}>
        →
      </button>
      <div className="Products-container" ref={containerRef}>
        {products.map((e, idx) => (
          <Col lg={2} className="product" key={idx}>
            <div className="bg-con">
              <div className="d-flex top-menu">
                <Tooltip title="Add to favourites">
                  <IconButton
                    onClick={() => {
                      // dispatch(AddItemToFavList(e));
                    }}
                  >
                    <FaRegHeart className="fav-icon" />
                  </IconButton>
                </Tooltip>
                <div className="discount">-{e.discount}</div>
              </div>
              <div className="img-container">
                <img src={e.images} className="img-fluid" />
              </div>
            </div>
            <div className="product-name">{e.title}</div>
            <div className="price">
              {e.price}$<span>{e.price * 1.2}$</span>
            </div>
            <Rating value={5} className="mt-2" />
          </Col>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
