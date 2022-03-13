import classes from "./TrendProduct.module.css";
import move from "../Footer.module.css";

const TrendProduct = ({ photos }) => {
  return (
    <div>
      <div className="col-12 col-sm">
        <img src={photos.src} alt="sunFlower" width="200px" height="200px" />
        <h6>{photos.name}</h6>
        <span>{photos.country}</span>
        <h6>{photos.salary}</h6>
        <small className="text-muted">{photos.avaliable}</small>
        <p className="text-muted" style={{fontSize:'10px'}}>{photos.require}</p>
        <button type="button" class="btn btn-outline-primary">
          See Details
        </button>
      </div>
      </div>
      );
    };
    // <div className={move.buttonMove}>
    //   <button className="btn btn-light float-end">arrow</button>
    // </div>

export default TrendProduct;
