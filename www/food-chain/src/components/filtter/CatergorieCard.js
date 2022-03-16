import { Link } from "react-router-dom";

const CatergorieCard = ({ item }) => {

  return (
    <Link style={{textDecoration: 'none'}} to={`/product/${item.id}`}>
    <div className="col-12 col-sm">
      {item && 
        <div>
        <img
          src={"http://localhost:8000" + item.files[0].file_path}
          alt="sunFlower"
          width="200px"
          height="200px"
        />
        <h6>{item.title}</h6>
        <span>{item.country}</span>
        <h6>{item.price}</h6>
        <small className="text-muted">{item.variety}</small>
        <p className="text-muted" style={{ fontSize: "10px" }}>
          {item.require}
        </p>
        <button type="button" class="btn btn-outline-primary mb-5">
          See Details
        </button>
      </div>
      }
    </div>
    </Link>
  );
};

export default CatergorieCard;
