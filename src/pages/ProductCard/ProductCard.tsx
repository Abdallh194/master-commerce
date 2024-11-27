import { Col } from "react-bootstrap";
import { IconButton, Tooltip } from "@mui/material";
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
  return (
    <>
      {products.map((e, idx) => (
        <Col lg={3} className="ProductCard" key={idx}>
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
          <img src={e.images} className="img-fluid" />
        </Col>
      ))}
    </>
  );
};

export default ProductCard;
