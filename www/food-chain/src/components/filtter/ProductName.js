import classes from "../MainPadge/Header.module.css";
import { Link } from "react-router-dom";

const ProductName = ({ title }) => {
  return (
    <div>
      {title && (
        <Link
          className="col btn"
          to="/fruit"
          style={{ border: "1px solid rgb(145, 174, 194)", margin: "1px" }}
        >
          {title.title}
        </Link>
      )}
    </div>
  );
};

export default ProductName;
