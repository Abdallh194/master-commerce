import { categories } from "@constants/constants";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <>
      {categories.map((cat, idx) => (
        <Link to={`/categories/${cat.prefix}`} className="link" key={idx}>
          <span>{cat.title}</span> {cat.icon}
        </Link>
      ))}
    </>
  );
};

export default SideBar;
