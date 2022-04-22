import classes from "../MainPadge/Header.module.css";
import { Link } from "react-router-dom";

const ProductName = ({ title }) => {
    
  return (
    <div>
      {title && (
        <Link
          className="col btn w-100"
          to={`/categories/${title.id}`}
        >
          {title.title}
        </Link>
      )}
    </div>
  );
};

export default ProductName;
