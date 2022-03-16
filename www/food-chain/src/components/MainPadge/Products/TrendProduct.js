import { Link } from "react-router-dom";
import { useState } from "react";

const TrendProduct = ({ photos }) => {
 
 

  return (
    <Link to={`/product/${photos.id}`} style={{textDecoration: 'none'}}>
      <div className="col-12 col-sm">
        <img
          src={"http://localhost:8000" + photos.files[0].file_path}
          alt="sunFlower"
          width="200px"
          height="200px"
        />
        <h6>{photos.title}</h6>
        <span>{photos.country}</span>
        <h6>{photos.price}</h6>
        <small className="text-muted">{photos.variety}</small>
        <p className="text-muted" style={{ fontSize: "10px" }}>
          {photos.require}
        </p>
        <button type="button" class="btn btn-outline-primary mb-5">
          See Details
        </button>
      </div>
    </Link>
  );
};

export default TrendProduct;
