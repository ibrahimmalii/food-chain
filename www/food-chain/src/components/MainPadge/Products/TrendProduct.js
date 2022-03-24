import { Link } from "react-router-dom";
import classes from "./TrendProduct.module.css";
const TrendProduct = ({ photos }) => {
  return (
    <div className={classes.content}>
    <Link to={`/product/${photos.id}`} style={{ textDecoration: "none" }}>
        <img
          src={"http://localhost:8000" + photos.files[0].file_path}
          alt="sunFlower"
          width="200px"
          height="200px"
          style={{ borderRadius: "5px" }}
        />
        <div className={classes.title}>{photos.title}</div>
        <span className={classes.country}>{photos.country}</span>
        <div className={classes.price}>
          <span style={{ color: "#637381" }}>USA</span> {photos.price}  ~
        </div>
        <div className={classes.available}>AVAILABLE SPECS:</div>
        <small className="text-muted">{photos.variety}</small>
        <p className="text-muted" style={{ fontSize: "10px" }}>
          {photos.require}
        </p>
        <button
          type="button"
          style={{
            borderRadius: "20px",
            color: "#2F7CEF",
            fontSize: "12px",
            border: "2px solid #B8D1F7",
            marginBottom: '50px',
            fontFamily: 'Inter, sans-serif',
            padding: '7px',
            width: '100px',
            fontWeight: 'bold'
          }}
         className={classes.buttonDetails}
        >
          See Details
        </button>
        </Link>
      </div>
  );
};

export default TrendProduct;
