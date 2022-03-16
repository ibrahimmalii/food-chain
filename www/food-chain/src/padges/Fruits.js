import { useParams, Link } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { axiosInstance } from "./../axios/config";
import classes from "./Categories.module.css";
import searchClass from "./Categories.module.css";
import ProductCard from "./../components/filtter/ProductCard";
import Filtter from './../components/MainPadge/Filtter';

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
    <div className={searchClass.categorie}>
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
            {props.categories && props.categories.map((res , index) => {
              return(
                <div className='col w-100' key={index}>
                <Filtter categories={res} />
                </div>
              )
            })}
          </div>
        </div>
        <input type="text" placeholder="Search" />
        <div className="row m-5">
          {type &&
            type.data[0].products.map((res) => {
              return <ProductCard type={res} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Fruits;
