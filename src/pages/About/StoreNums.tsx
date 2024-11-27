import { Store_Nums } from "@constants/constants";

const StoreNums = () => {
  return (
    <div className="store-nums d-flex ">
      {Store_Nums.map((cat, idx) => (
        <div className={cat.className} key={idx}>
          <div className="icon">{cat.icon}</div>
          <div className="num">{cat.num}</div>
          <div className="desc mt-2">{cat.desc}</div>
        </div>
      ))}
    </div>
  );
};

export default StoreNums;
