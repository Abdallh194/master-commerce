import { FaApple } from "react-icons/fa";
import { IoArrowRedoOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const RightSideBar = () => {
  return (
    <div className="content d-flex">
      <div className="info-box w-50">
        <div className="top-head cus-dflex">
          <FaApple className="icon" /> iPhone 14 Series
        </div>
        <div className="main-head">
          Up to 10% <span>off Voucher</span>
        </div>
        <Link to="#Shopping" className="shopbtn">
          Shop Now <IoArrowRedoOutline />
        </Link>
      </div>
      <img src="/iphone.jpg" className="img-fluid w-50" />
    </div>
  );
};

export default RightSideBar;
