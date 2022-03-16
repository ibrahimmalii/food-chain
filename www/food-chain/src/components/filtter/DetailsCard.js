import { useState } from 'react';
const DetailsCard = (props) => {
    const [srcPhoto , setSrc] = useState()
    const [photos , setPhotos] = useState();

    const handleMouseMove = (event) => {
        setSrc(event.target.src)
    }

    photos && console.log(photos)
  return (
    <div className="container row">
      <div className="col-5 mt-5">
        <div
          style={{
            height: "400px",
            borderRadius: "10px",
            border: "1px solid rgb(145, 174, 194)",
            overflew: "hidden",
            backgroundImage: `${srcPhoto ? 'url('+srcPhoto+')': photos && 'url('+photos[0]+')'}`,
          }}
          ></div>
        <div className="d-flex" style={{ marginLeft: "40px" }}>
          {props.productId &&
            props.productId.data[0].files.map((res) => {
              return (
                <div
                  className="m-1"
                  style={{ borderRadius: "10px", overflow: "hidden" }}
                >
                <img
                src={"http://localhost:8000" + res.file_path}
                alt="fruit"
                width="100px"
                height="100px"
                onMouseMove={event => (handleMouseMove(event))}
                />
                {!photos && setPhotos(res.file_path)}
                </div>
              );
            })}
        </div>
      </div>
      <div className="col-6 m-5">
        <h2>{props.productId && props.productId.data[0].title}</h2>
        <h6 className="mt-3" style={{ color: "gray" }}>
          HS Code: 091011 - Ginger - whole
        </h6>
        <div className="d-flex mt-4">
          <h3>Upon Request</h3>
          <button className="btn btn-outline-primary  mx-5">
            Price Table
          </button>
        </div>
        <h6 classname="mt-3" style={{ color: "gray" }}>
          {props.productId && props.productId.data[0].country}
        </h6>

        <ul className="m-4 mt-5">
          <li>
            Currently our offer prices are not available due to frequent
            fluctuation. <br />
            Get a quote now for an offer price for this market.
          </li>
        </ul>
        <h4 style={{ marginTop: "80px" }}>Current Offer Base Prices</h4>
        <div className="m-5" style={{ color: "gray" }}>
          <h5>Available Specifications:</h5>
          <ul style={{ listStyleType: "none" }}>
            <li>Variety: Yellow, Mature</li>
            <li>Color: Yellow</li>
            <li>Grade: High Quality</li>
            <li>Packaging Type: Carton Box</li>
            <li>Processed Style: Fresh</li>
            <li>Incoterms: FOB</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
