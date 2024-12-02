import { DeleteItemFromCard } from "@redux/Cart/CartSlice";
import { useAppDispatch } from "@redux/hooks";
import { memo } from "react";
import { FaTrashAlt } from "react-icons/fa";

const DeleteFromCard: React.FC<ProductId> = ({ id, setLoading }) => {
  const dispatch = useAppDispatch();
  return (
    <div
      className="dlt"
      onClick={() => {
        setLoading(true);
        setTimeout(() => {
          dispatch(DeleteItemFromCard(id));
          setLoading(false);
        }, 700);
      }}
    >
      <FaTrashAlt />{" "}
    </div>
  );
};

export default memo(DeleteFromCard);
