import classes from "./Footer.module.css";

const Footer = ({ footerData }) => {
  return (
    <div className={classes.footer}>
      <div className={classes.skills}>
        <div className="d-flex">
          {footerData &&
            footerData.map((res) => {
              return (
                <div className="d-flex">
                  <div>{res.title} &nbsp;&nbsp; &nbsp;</div>
                  <div>{res.price}$ &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;</div>
                  <div>{res.title} &nbsp;&nbsp; &nbsp;</div>
                  <div>{res.price}$ &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;</div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
