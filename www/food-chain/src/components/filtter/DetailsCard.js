import { useState } from "react";
import { Link } from "react-router-dom";
import classes from "../MainPadge/Products/TrendProduct.module.css";
import flagStyle from "../../assets/css/icons.css";
import Urls from "../../Urls";

const DetailsCard = (props) => {
  const [srcPhoto, setSrc] = useState();
  const [photos, setPhotos] = useState();

  const handleMouseMove = (event) => {
    setSrc(event.target.src);
  };

  return (
    <div>
      {console.log("child")}
      <div className="container row">
        <div className="col-4 mt-5 offset-1">
          <div className="mb-5">
            <Link
              style={{ color: "#C5CBC9", textDecoration: "none" }}
              to="/categories"
            >
              <i
                class="fas fa-arrow-left"
                style={{ fontSize: "80%", marginRight: "10px" }}
              ></i>{" "}
              Browse Market
            </Link>
          </div>
          <div
            style={{
              height: "300px",
              borderRadius: "10px",
              border: "1px solid rgb(145, 174, 194)",
              overflew: "hidden",
              objectFit: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              objectPosition: "center center",
              backgroundImage: `${
                srcPhoto
                  ? "url(" + srcPhoto + ")"
                  : photos && "url(" + photos + ")"
              }`,
            }}
          ></div>
          <div className="d-flex">
            {props.productId &&
              props.productId.data[0].files.map((res) => {
                return (
                  <div
                    className="m-1"
                    style={{ borderRadius: "10px", overflow: "hidden" }}
                  >
                    <img
                      src={Urls.domainUrl + res.file_path}
                      alt="fruit"
                      width="100px"
                      height="100px"
                      onMouseMove={(event) => handleMouseMove(event)}
                    />
                    {!photos && setPhotos(Urls.domainUrl + res.file_path)}
                  </div>
                );
              })}
          </div>
        </div>
        <div className="col-6 m-5">
          <div className="mt-5">
            <br />
            <p className="h1">
              {props.productId && props.productId.data[0].title}
            </p>
            <h6
              className="mt-3"
              style={{ color: "rgb(99, 115, 129)", fontWeight: "600" }}
            >
              HS Code: 091011 - Ginger - whole
            </h6>
            <div className="d-flex mt-4">
              <strong
                color="black"
                style={{
                  letterSpacing: "-0.7px",
                  fontSize: "24px",
                  fontWeight: "600",
                }}
              >
                Upon Request
              </strong>
              <button
                className={classes.buttonDetails}
                style={{ marginLeft: "20px" }}
              >
                Price Table
              </button>
            </div>
            <div style={{ marginTop: "-40px" }}>
              <span
                color="textLight"
                style={{ color: "rgb(99, 115, 129)", fontSize: "13px" }}
              >
                USD / MT, March 7, 2022
              </span>
            </div>
            <div
              style={{
                height: "100px",
                borderRadius: "5px",
                boxShadow: "0em 0em 1em rgba(0,0,0,0.1)",
              }}
              className=" mt-5 p-4"
            >
              <ul style={{ listStyleType: "none" }}>
                <li
                  style={{
                    color: "rgb(33, 43, 54)",
                    fontSize: "14px",
                    lineHeight: "22px",
                    fontWeight: "400",
                  }}
                >
                  <i
                    class="fas fa-exclamation-circle"
                    style={{ marginLeft: "-35px", marginRight: "20px" }}
                  ></i>
                  Currently our offer prices are not available due to frequent
                  fluctuation. <br />
                  <a style={{ textDecoration: "none" }}>Get a quote</a> now for
                  an offer price for this market.
                </li>
              </ul>
            </div>
            <div
              style={{
                borderRadius: "5px",
                boxShadow: "0em 0em 1em rgba(0,0,0,0.1)",
              }}
              className=" mt-5 p-4"
            >
              <h1
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Current Offer Base Prices
              </h1>
              <div
                style={{ borderRadius: "5px", backgroundColor: "#F9FAFB" }}
                className="mt-4 p-4"
              >
                <h1 style={{ fontSize: "16px", color: " rgb(99, 115, 129)" }}>
                  Available Specifications:
                </h1>
                <ul
                  style={{
                    listStyleType: "none",
                    color: " rgb(99, 115, 129)",
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "28px",
                  }}
                >
                  <li>Variety: Yellow, Mature</li>
                  <li>Color: Yellow</li>
                  <li>Grade: High Quality</li>
                  <li>Packaging Type: Carton Box</li>
                  <li>Processed Style: Fresh</li>
                  <li>Incoterms: FOB</li>
                </ul>
              </div>

              <button
                type="button"
                className="btn btn-primary w-100 fw-bold"
                style={{ borderRadius: "20px", fontSize: "20px" }}
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Get a Quote
              </button>

              <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog d-flex">
                  <div
                    className="modal-content"
                    style={{
                      padding: "32px",
                      fontFamily: "Inter, sans-serif",
                      fontWeight: "400",
                      fontSize: "14px",
                      lineHeight: "22px",
                      backgroundColor: "rgb(33, 43, 54)",
                      borderRadius: "20px",
                    }}
                  >
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                    <div>
                      <div className="d-flex">
                        <div>
                          <p
                            class="modal-title h1"
                            id="exampleModalLabel"
                            style={{
                              lineHeight: "28px",
                              fontSize: "20px",
                              color: "rgb(255, 255, 255)",
                            }}
                          >
                            Get a quote for
                          </p>
                          <div
                            className="my-3 d-flex"
                            style={{ overflow: "hidden" }}
                          >
                            <div
                              style={{
                                width: "70px",
                                height: "70px",
                                borderRadius: "5px",
                                objectFit: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                objectPosition: "center center",
                                backgroundImage: `${
                                  photos && "url(" + photos + ")"
                                }`,
                              }}
                            ></div>
                            <div>
                              <h1
                                style={{
                                  lineHeight: "24px",
                                  fontSize: "16px",
                                  fontWeight: "600",
                                  color: "rgb(255, 255, 255)",
                                  marginLeft: "10px",
                                }}
                              >
                                {props.productId &&
                                  props.productId.data[0].title}
                              </h1>
                              <div className="d-flex">
                                <h1
                                  style={{
                                    lineHeight: "24px",
                                    fontSize: "16px",
                                    fontWeight: "400",
                                    color: "rgb(255, 255, 255)",
                                    marginLeft: "10px",
                                  }}
                                >
                                  {props.productId &&
                                    props.productId.data[0].country}
                                </h1>
                                <div
                                  style={{
                                    width: "40px",
                                    height: "20px",
                                    objectFit: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover",
                                    objectPosition: "center center",
                                    marginLeft: "10px",
                                  }}
                                >
                                  <i
                                    className={`flag-icon flag-icon-${props.productId.data[0].flag}`}
                                  ></i>
                                </div>
                              </div>
                            </div>
                          </div>
                          <span
                            color="textLighter"
                            style={{
                              fontSize: "11px",
                              color: "rgb(157, 182, 204)",
                            }}
                          >
                            YOUR INFORMATION
                          </span>
                          <input
                            className="form-control"
                            style={{
                              backgroundColor: "rgb(69, 79, 91) ",
                              outline: "none",
                              marginTop: "10px",
                              border: "none",
                            }}
                            placeholder="Your full name"
                            type="text"
                          />
                          <input
                            className="form-control"
                            style={{
                              backgroundColor: "rgb(69, 79, 91) ",
                              outline: "none",
                              marginTop: "10px",
                              border: "none",
                            }}
                            placeholder="Your company name"
                            type="text"
                          />
                          <input
                            className="form-control"
                            style={{
                              backgroundColor: "rgb(69, 79, 91) ",
                              outline: "none",
                              marginTop: "10px",
                              border: "none",
                            }}
                            placeholder="Your business email address"
                            type="text"
                          />
                          <input
                            className="form-control"
                            style={{
                              backgroundColor: "rgb(69, 79, 91) ",
                              outline: "none",
                              marginTop: "10px",
                              border: "none",
                              color: "rgb(255, 255, 255)",
                            }}
                            placeholder="Your phone number"
                            type="number"
                          />

                          <span
                            color="textLighter"
                            style={{
                              color: "rgb(157, 182, 204)",
                              marginTop: "20px",
                            }}
                          >
                            Want to save your information?
                            <br />
                            to have your information filled in automatically.
                          </span>
                        </div>
                        <div>
                          <form
                            className="bg-light p-4"
                            style={{
                              width: "600px",
                              borderRadius: "10px",
                              marginLeft: "50px",
                            }}
                          >
                            <span
                              style={{
                                lineHeight: "16px",
                                fontSize: "11px",
                                color: "rgb(99, 115, 129)",
                              }}
                            >
                              YOUR REQUIREMENTS
                            </span>
                            <div style={{ margin: "20px"  , marginTop: '50px'}}>
                              <div>
                                <i
                                  class="fa fa-truck-moving"
                                  style={{
                                    fontSize: "15px",
                                    marginRight: "20px",
                                    color: '#919EAB'
                                  }}
                                ></i>
                                <select
                                  id="cars"
                                  style={{
                                    border: "none",
                                    marginRight: "20px",
                                  }}
                                >
                                  <option value="volvo">FOT</option>
                                  <option value="saab">FCA</option>
                                  <option value="vw">CIF</option>
                                  <option value="audi" selected>
                                    CFR
                                  </option>
                                </select>
                                <input
                                type='number'
                                  placeholder="Port of loading"
                                  
                                  style={{ fontSize: "1.1rem", border: "none" , color: '#919EAB'}}
                                />
                                <select
                                  id="country"
                                  style={{
                                    border: "none",
                                    marginRight: "20px",
                                  }}
                                >
                                  <option value="saab">FCA</option>
                                  <option value="vw">CIF</option>
                                  <option value="audi" selected>
                                    CFR
                                  </option>
                                  <option value="volvo" selected>
                                    {props.productId &&
                                      props.productId.data[0].country}
                                  </option>
                                </select>
                                </div>
                                <div className="mt-5">
                                <i class="fa fa-calendar-day" style={{
                                  fontSize: "15px",
                                  marginRight: "20px",
                                  color: '#919EAB'
                                }} ></i>
                                <input
                                  placeholder="Preferred shipment data or schedule"
                                  className='w-75'
                                  style={{ fontSize: "1.1rem", border: "none" , marginLeft: "20px",}}
                                />
                                </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>

                    <div>
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" class="btn btn-primary">
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
