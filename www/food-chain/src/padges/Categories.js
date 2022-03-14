import CatergorieCard from "../components/filtter/CatergorieCard";
import Filtter from "../components/MainPadge/Filtter";
import classes from "./Categories.module.css";

const Categories = ({ categorie }) => {
  console.log('cat' , categorie)
  return (
    <div className={classes.categorie}>
      <div
        className="container"
        style={{ marginTop: "100px" }}
      >
        <h2>Browser Markets</h2>
        <Filtter />
        <input type="text" placeholder="Search" />
        <div>
        <div className="row">
          {categorie &&
            categorie.map((item, index) => {
              return <div key={index} className="col">
                <CatergorieCard item={item}/>
              </div>;
            })}
        </div>
        </div>
        <CatergorieCard />
      </div>
    </div>
  );
};

export default Categories;
