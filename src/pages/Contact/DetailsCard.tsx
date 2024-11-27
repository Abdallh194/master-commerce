import { BsTelephone } from "react-icons/bs";
import { MdOutlineAttachEmail } from "react-icons/md";
const DetailsCard = () => {
  return (
    <>
      <div className="log">
        <span className="icon">
          <BsTelephone />
        </span>
        Call To Us
      </div>
      <div className="info">We are Available 24/7 , 7 days a week</div>
      <div className="info">phone : +201091415560</div>
      <hr />
      <div className="log">
        <span className="icon">
          <MdOutlineAttachEmail />
        </span>
        Write To Us
      </div>
      <div className="info">
        Fill out our form and we will contact you within 24 hours.
      </div>
      <div className="info">Email : Abdallhsabry194@gmail.com</div>
      <div className="info">Email : Abdallhsabry194@gmail.com</div>
    </>
  );
};

export default DetailsCard;
