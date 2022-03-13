import { Fragment } from "react";
import Filtter from "../components/MainPadge/Filtter";
import Header from "../components/MainPadge/Header";
import MainBody from "../components/MainPadge/MainBody";
import TrendProduct from "../components/MainPadge/Products/TrendProduct";
import UpComingProduct from "../components/MainPadge/Products/UpComingProduct";
import classes from '../components/MainPadge/Products/TrendProduct.module.css'
const MainPadge = () => {
  const photoSrc = [
    {
      src: "https://images.tridge.com/720x720/fulfillment_image/2c/56/84/2c568460532116d1b7c4391148b19c23866987e9/11F.jpg",
      name: "Refined Sunflower Oil",
      country: "turkey",
      salary: "Upon Request",
      avaliable: "AVALIABLE SPACES",
      require: "FAQ/Refind",
    },
    {
      src: "https://images.tridge.com/720x720/fulfillment_image/5f/8d/18/5f8d1841a31c462b53522481f70ac21f226b56b2/thummmmmm.jpg",
      name: "Whole Common Gigner",
      country: "Brazil",
      salary: "Upon Request",
      avaliable: "AVALIABLE SPACES",
      require: "Moisture 12% / Global GAP",
    },
    {
      src: "https://images.tridge.com/720x720/fulfillment_image/e8/aa/f9/e8aaf9844669a76c390a0e913afc1c78b130ab20/Vietnam_Cashew_Nut_Kernel.jpg",
      name: "Cashew Nut Kernel",
      country: "Vetnam",
      salary: "USD 6.20 ~ ",
      avaliable: "AVALIABLE SPACES",
      require: "white, Scorched White",
    },
    {
      src: "https://images.tridge.com/720x720/fulfillment_image/d0/2f/cd/d02fcd68b44f0df383cb8235193eec911511e5d6/Tanzania_Raw_Cashew_Nut_1.jpg",
      name: "Rew Cashew Nut",
      country: "Tanzania",
      salary: "Upon Request ",
      avaliable: "AVALIABLE SPACES",
      require: "KOR: Over 51 / Nut Count",
    },
    {
        src: "https://images.tridge.com/720x720/fulfillment_image/d0/2f/cd/d02fcd68b44f0df383cb8235193eec911511e5d6/Tanzania_Raw_Cashew_Nut_1.jpg",
        name: "Rew Cashew Nut",
        country: "Tanzania",
        salary: "Upon Request ",
        avaliable: "AVALIABLE SPACES",
        require: "KOR: Over 51 / Nut Count",
      },
  ];
  return (
    <Fragment>
      <Header />
      <MainBody />
      <Filtter />
      <div className={classes.cardProduct}>
        <h4 className="mb-4">Trending Products</h4>
        <div className="row">
          {photoSrc.map((photo, index) => {
            return (
              <div
                key={index}
                className="col"
              >
                <TrendProduct photos={photo} />
              </div>
            );
          })}
        </div>
      </div>
      <UpComingProduct />
    </Fragment>
  );
};

export default MainPadge;
