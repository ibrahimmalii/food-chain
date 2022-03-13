import classes from "./Header.module.css";
import classMove from './Footer.module.css'

const MainBody = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-6">
          <b>Overview of Tridge Fulfillment Solution</b>
          <img
            style={{ width: "90%", marginTop: "30px", height: "120px" }}
            src="https://cdn-new.tridge.com/static/a9ecd81a54.png"
            alt="Tridge Fulfillment Solution"
          ></img>
        </div>
        <div className="col-12 col-sm-6">
          <b>How We Manage Our Products</b>
          <br />
          <div style={{ marginTop: "30px" }} className={classes.images}>
          <div className={classMove.product}>
              <img
                src="https://images.tridge.com/120x120/fulfillment_file/c2/ac/b7/c2acb701102b3e3d5327df9a0f64894ce66b195d/Avocado_Quality_Check.JPG"
                alt="Avocado Quality Check.JPG"
              />
              <img
                src="https://images.tridge.com/120x120/fulfillment_file/21/25/7e/21257e2510ec4894d5293e032e2e74f64f8aa713/farm_inspection_02.jpg"
                alt="farm_inspection_02.jpg"
              />
              <img
                src="https://images.tridge.com/120x120/fulfillment_file/17/8f/6c/178f6c86a7cfa604a5f96fe27a3c462602bccd16/IMG_9018.JPG"
                alt="IMG_9018.JPG"
              />
              <img
                src="https://images.tridge.com/120x120/fulfillment_file/79/54/90/79549093a6cf99a74e60e1231fd90d3d720694bc/packaging_inspection_01.jpg"
                alt="packaging_inspection_01.jpg"
              />
              <img
                src="https://images.tridge.com/120x120/fulfillment_file/79/54/90/79549093a6cf99a74e60e1231fd90d3d720694bc/packaging_inspection_01.jpg"
                alt="packaging_inspection_01.jpg"
              />
              <img
                src="https://images.tridge.com/120x120/fulfillment_file/79/54/90/79549093a6cf99a74e60e1231fd90d3d720694bc/packaging_inspection_01.jpg"
                alt="packaging_inspection_01.jpg"
              />
              <img
                src="https://images.tridge.com/120x120/fulfillment_file/79/54/90/79549093a6cf99a74e60e1231fd90d3d720694bc/packaging_inspection_01.jpg"
                alt="packaging_inspection_01.jpg"
              />
              <img
                src="https://images.tridge.com/120x120/fulfillment_file/79/54/90/79549093a6cf99a74e60e1231fd90d3d720694bc/packaging_inspection_01.jpg"
                alt="packaging_inspection_01.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBody;
