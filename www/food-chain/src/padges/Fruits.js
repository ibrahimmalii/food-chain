import { useParams, Link } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { axiosInstance } from "./../axios/config";
import classes from "./Categories.module.css";
import ProductName from "../components/filtter/ProductName";
import searchClass from "./Categories.module.css";

const Fruits = (props) => {
  const params = useParams();
  const [type, setType] = useState("");

  const handleType = useCallback(async () => {
    axiosInstance.get(`api/categories/${params.id}`).then((res) => {
      setType(res);
    });
  }, [params.id]);

  useEffect(() => {
    handleType();
  }, [handleType]);

  return (
    <div className={classes.categorie}>
      <div className="container" style={{ marginTop: "100px" }}>
        <h2>Browser Markets</h2>
        <div className={classes.mainFiltter}>
          <div className="row container text-center">
            <Link
              className="col btn"
              style={{ border: "1px solid rgb(145, 174, 194)", margin: "1px" }}
              to="/categories"
            >
              All Categories
            </Link>
            {props.productName &&
              props.productName.map((res) => {
                return (
                  <div className="col">
                    <ProductName title={res} />
                  </div>
                );
              })}
          </div>
        </div>
        <input type="text" placeholder="Search" />
      </div>
    </div>
  );
};

export default Fruits;
