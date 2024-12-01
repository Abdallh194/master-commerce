import React, { memo } from "react";
import { Col, Spinner } from "react-bootstrap";
import { Alert, IconButton, Rating, Tooltip } from "@mui/material";
import { FaArrowLeft, FaArrowRight, FaCheck, FaRegHeart } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import useProducts from "./useProduct";
import { AddItemToCard, AddItemToFavList } from "@redux/Cart/CartSlice";

const ProductCard: React.FC<ProductListProps> = ({ products }) => {
  const {
    dispatch,
    isDisabled,
    setisDisabled,
    scrollLeft,
    scrollRight,
    containerRef,
    successAddCart,
    CartItem,
  } = useProducts();

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
        {products.map((e, idx) => (
          <Col lg={2} className="product" key={idx}>
            {CartItem.length > 0
              ? CartItem.map((cart, idx) => (
                  <div key={idx}>
                    {cart.id == e.id ? (
                      <div className="qty">{cart.Quantity} in cart</div>
                    ) : (
                      ""
                    )}
                  </div>
                ))
              : ""}
            <div className="d-flex top-menu">
              <Tooltip title="Add to favourites">
                <IconButton
                  onClick={() => {
                    dispatch(AddItemToFavList(e));
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

            <div className="product-name">{e.title}</div>
            <Rating value={5} className="mt-2" />
            <div className="price">
              {e.price}$<span>{e.price * 1.2}$</span>
            </div>

            <button
              className="addtocart btn"
              onClick={() => {
                dispatch(AddItemToCard(e));
                setisDisabled(true);
              }}
              disabled={isDisabled}
            >
              {isDisabled ? (
                <>
                  <Spinner animation="border" size="sm" /> Loading ...
                </>
              ) : (
                <>
                  Add to Cart
                  <AiOutlineShoppingCart />
                </>
              )}
            </button>
          </Col>
        ))}
      </div>
      {successAddCart && (
        <Alert icon={<FaCheck fontSize="inherit" />} severity="success">
          The item has been added to cart
        </Alert>
      )}
    </div>
  );
};

export default memo(ProductCard);
