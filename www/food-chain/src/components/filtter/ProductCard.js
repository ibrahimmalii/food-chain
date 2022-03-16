import { Link } from "react-router-dom";
const ProductCard = (props) => {
  return (
    <div className="col-12 col-sm" style={{ borderRadius: '10px' , overflew: 'hidden'}}>
    <Link to={`/product/${props.type.id}`} style={{textDecoration: 'none'}}>
        <img
          src={"http://localhost:8000" + props.type.files[0].file_path}
          alt="sunFlower"
          width="200px"
          height="200px"
        />
        <h6>{props.type.title}</h6>
        <span>{props.type.country}</span>
        <h6>{props.type.price}</h6>
        <small className="text-muted">{props.type.variety}</small>
        <p className="text-muted" style={{ fontSize: "10px" }}>
          {props.type.require}
        </p>
        <button type="button" class="btn btn-outline-primary mb-5">
          See Details
        </button>
        </Link>
      </div>
  );
};

export default ProductCard;
