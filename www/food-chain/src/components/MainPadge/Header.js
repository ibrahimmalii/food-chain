import imageHeader from "../../assets/up1.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <div
      style={{
        backgroundImage: `url(https://cdn-new.tridge.com/static/4c84e81b13.jpg)`,
        width: "90%",
        margin: "50px auto",
        borderRadius: "5px",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className={classes.container}
    >
    <span>Tridge Fulfillment Solution</span>
      <div>
      </div>
      <h2>
        Start importing fresh <br /> products safely and reliably.
      </h2>
      <p>
        We provide a global order fulfillment solution in which we take care of
        <br />
        everything from production to delivery to ensure that you receive
        <br />
        quality product that you need safely and reliably.
      </p>
      <br />
      <button className="btn btn-primary">Browser Products</button>
    </div>
  );
};

export default Header;
