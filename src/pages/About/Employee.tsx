import { Employee } from "@constants/constants";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
const EmployeeNum = () => {
  return (
    <div className="employee d-flex">
      {Employee.map((employee, idx) => (
        <div className="employee-card" key={idx}>
          <img src={employee.img} className="img-fluid" />
          <div className="title mt-3">{employee.title}</div>
          <div className="job mt-1">{employee.job}</div>
          <div className="socials mt-2">
            <FaTwitter style={{ marginRight: "20px" }} />
            <FaInstagram style={{ marginRight: "20px" }} />
            <FaLinkedin style={{ marginRight: "20px" }} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default EmployeeNum;
