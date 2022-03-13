import classes from "./Footer.module.css";

const Footer = (props) => {
  return (
    <div className={classes.footer}>
      <div class={classes.skills}>
        Front end Web development • 3d design • Graphic design • Community
        management • Open source • Technical support • Technical Writing • Figma
        <div>Pear</div> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; <div>15.23$</div>
      </div>
    </div>
  );
};

export default Footer;
