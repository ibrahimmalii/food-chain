import { Link } from "react-router-dom";

const Filtter = ({ categories }) => {
  return (
    <div>
      {categories && (
        <Link
          className="col btn"
          style={{ border: "1px solid rgb(145, 174, 194)", margin: "1px" }}
          to={`/categories/${categories.id}`}
        >
          {categories.title}
        </Link>
      )}
    </div>
  );
};

export default Filtter;
