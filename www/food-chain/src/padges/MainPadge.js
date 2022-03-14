import { Fragment } from "react";
import Filtter from "../components/MainPadge/Filtter";
import Header from "../components/MainPadge/Header";
import MainBody from "../components/MainPadge/MainBody";
import TrendProduct from "../components/MainPadge/Products/TrendProduct";
import UpComingProduct from "../components/MainPadge/Products/UpComingProduct";
import classes from "../components/MainPadge/Products/TrendProduct.module.css";
const MainPadge = ({ data }) => {
  
  return (
    <Fragment>
      <Header />
      <MainBody />
      <Filtter />
      <div className={classes.cardProduct}>
        <h4 className="mb-4">Trending Products</h4>
        <div className="row ">
          {data &&
            data.map((photo, index) => {
              return (
                <div key={index} className="col">
                <TrendProduct photos={photo} />
                <UpComingProduct photos={photo}/>
                </div>
              );
            })}
        </div>
      </div>
    </Fragment>
  );
};

export default MainPadge;
