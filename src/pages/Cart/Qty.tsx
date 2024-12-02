import { DecreaseQty, IncreaseQty } from "@redux/Cart/CartSlice";
import { useAppDispatch } from "@redux/hooks";
import { memo } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const Qty = ({ Product, setLoading }: ProductQty) => {
  const dispatch = useAppDispatch();
  const handleIncrease = (id: string) => {
    setLoading(true);
    setTimeout(() => {
      dispatch(IncreaseQty(id));
      setLoading(false);
    }, 700);
  };
  const handleDecrease = (id: string) => {
    setLoading(true);
    setTimeout(() => {
      dispatch(DecreaseQty(id));
      setLoading(false);
    }, 700);
  };
  return (
    <div className="product-qty d-flex item">
      {Product.Quantity >= 3 ? (
        <div className="increase mx-2 disable-btn">
          <FaPlus />{" "}
        </div>
      ) : (
        <div
          className="increase mx-2"
          onClick={() => handleIncrease(Product.id)}
        >
          <FaPlus />{" "}
        </div>
      )}
      <div className=" ">{Product.Quantity}</div>
      {Product.Quantity == 1 ? (
        <div className="decrease mx-2 disable-btn">
          <FaMinus />{" "}
        </div>
      ) : (
        <div
          className="decrease mx-2 "
          onClick={() => handleDecrease(Product.id)}
        >
          <FaMinus />{" "}
        </div>
      )}
    </div>
  );
};

export default memo(Qty);
