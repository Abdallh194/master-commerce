import { UserProfile_links } from "@constants/constants";

const LeftSide = () => {
  return (
    <>
      {UserProfile_links.map((menu, index) => (
        <div key={index}>
          <div className="tab-head">{menu.category}</div>
          <div className="tab-menu">
            {menu.items.map((item, idx) => (
              <div
                className="link"
                key={idx}
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                {item.icon}
                {item.name}
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default LeftSide;
