import { Link } from "react-router-dom";
import classes from "./TrendProduct.module.css";
const TrendProduct = (props) => {
  props.data && console.log(props.data)
  return (
    <div className={classes.content}>
    <Link to={`/product/${props.photos.id}`} style={{ textDecoration: "none" }}>
        <img
          src={"http://localhost:8000" + props.photos.files[0].file_path}
          alt="sunFlower"
          width="200px"
          height="200px"
          style={{ borderRadius: "8px" }}
        />
        <div className={classes.title}>{props.photos.title}</div>
        <span className={classes.country}>{props.photos.country}</span>
        <div className={classes.price}>
          <span style={{ color: "#637381" }}>USD</span> {props.photos.price}  ~
        </div>
        <div className={classes.available}>AVAILABLE SPECS:</div>
        <small className="text-muted">{props.photos.variety}</small>
        <p className="text-muted" style={{ fontSize: "10px" }}>
          {props.photos.require}
        </p>
        <button
         className={classes.buttonDetails}
        >
          See Details
        </button>
        </Link>
      </div>
  );
};

export default TrendProduct;
