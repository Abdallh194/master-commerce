import { Col, Spinner } from "react-bootstrap";
import { FaCheck, FaRegHeart, FaTrashAlt } from "react-icons/fa";
import { IconButton, Rating, Tooltip } from "@mui/material";
import { AiOutlineShoppingCart } from "react-icons/ai";
import {
  AddItemToCard,
  AddItemToFavList,
  DeleteItemFromWishlist,
} from "@redux/Cart/CartSlice";
import { Alert } from "@mui/material";
import useProducts from "./useProduct";
const ProductsLoop: React.FC<ProductListProps> = ({ products, isfav }) => {
  const {
    dispatch,
    isDisabled,
    setisDisabled,
    successAddCart,
    SuccessAddwishlist,
    CartItem,
    setSuccessAddwishlist,
  } = useProducts();
  return (
    <>
      {products.map((e, idx) => (
        <Col lg={5} className="product" key={idx}>
          {isfav ? (
            <div
              className="fav-dlt"
              onClick={() => {
                dispatch(DeleteItemFromWishlist(e.id));
              }}
            >
              <FaTrashAlt />
            </div>
          ) : (
            <div className="d-flex top-menu">
              <Tooltip title="Add to favourites">
                <IconButton
                  onClick={() => {
                    dispatch(AddItemToFavList(e));
                    setSuccessAddwishlist(true);
                  }}
                >
                  <FaRegHeart className="fav-icon" />
                </IconButton>
              </Tooltip>
              <div className="discount">-{e.discount}</div>
            </div>
          )}

          <div className="img-container">
            <img src={e.images} className="img-fluid" />
          </div>

          <div className="product-name">{e.title}</div>
          <Rating value={5} className="mt-2" />
          <div className="price">
            {e.price}$<span>{e.price * 1.2}$</span>
          </div>
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
      {successAddCart && (
        <Alert icon={<FaCheck fontSize="inherit" />} severity="success">
          The item has been added to cart
        </Alert>
      )}
      {SuccessAddwishlist && (
        <Alert icon={<FaCheck fontSize="inherit" />} severity="success">
          The item has been added to Wishlist
        </Alert>
      )}
    </>
  );
};

export default ProductsLoop;
