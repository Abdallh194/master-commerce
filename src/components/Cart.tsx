import { IoMdHeartEmpty } from "react-icons/io";

interface CartProps {
  length: number;
}
const Cart: React.FC<CartProps> = ({ length }) => {
  return (
    <div className="cart-icon" cart-data={length}>
      <IoMdHeartEmpty />
    </div>
  );
};

export default Cart;
