import imageHeader from "../../assets/up1.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <div
      style={{
        backgroundImage: `url(${imageHeader})`,
        height: "600px",
        objectFit: "cover",
        width: "100%",
      }}
      className={classes.container}
    >
      <div className={classes.address}>
        <p>Global Soucing Hub of</p>
        <p>Food & Agriculture</p>
      </div>
      <div>
        <p>
          We help businesses safely and reliably source food and agricultural<br/>
          products from global markets while empowering buyers with extensive<br/>
          market intelligence for better decision-making.
        </p>
      </div>
    </div>
  );
};

export default Header;
