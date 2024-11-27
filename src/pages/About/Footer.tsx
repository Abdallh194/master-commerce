import { About_Footer } from "@constants/constants";

const Footer = () => {
  return (
    <div className="foot-card d-flex">
      {About_Footer.map((e, idx) => (
        <div className="footer-card" key={idx}>
          <div className="icon">{e.icon}</div>
          <div className="title ">{e.title}</div>
          <div className="desc mt-2">{e.desc}</div>
        </div>
      ))}
    </div>
  );
};

export default Footer;
