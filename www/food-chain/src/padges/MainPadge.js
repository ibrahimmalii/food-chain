import { Fragment } from "react";
import Filtter from "../components/MainPadge/Filtter";
import Header from "../components/MainPadge/Header";
import MainBody from "../components/MainPadge/MainBody";
import TrendProduct from "../components/MainPadge/Products/TrendProduct";
import UpComingProduct from "../components/MainPadge/Products/UpComingProduct";
import classes from "../components/MainPadge/Products/TrendProduct.module.css";
import classCategories from '../components/MainPadge/Header.module.css';
import { Link } from "react-router-dom";
const MainPadge = (props) => {
  return (
    <Fragment>
      <Header />
      <MainBody />
      <div className={classCategories.mainFiltter}>
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
              <div className='col' key={index}>
              <Filtter categories={res} />
              </div>
            )
          })}
        </div>
      </div>
      <div className={classes.cardProduct}>
        <h4 className="mb-4">Trending Products</h4>
        <div className="row ">
          {props.data &&
            props.data.map((photo, index) => {
              return (
                <div key={index} className="col">
                  <TrendProduct photos={photo} />
                  <UpComingProduct photos={photo} />
                </div>
              );
            })}
        </div>
      </div>
    </Fragment>
  );
};

export default MainPadge;
