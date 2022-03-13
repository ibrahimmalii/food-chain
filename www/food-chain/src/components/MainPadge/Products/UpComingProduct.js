import classes from "./TrendProduct.module.css";

const UpComingProduct = (props) => {
  return (
    <div className={classes.upcomingProduct}>
      <h4 className="mb-4">Upcoming Products</h4>
      <div className="row" style={{ marginBottom: "100px" }}>
        <div className=" offset-1 col-12 col-sm">
          <img
            class="sc-iUKqMP hlZHGM  sc-n9urus-3 sc-n9urus-6 jpFSoa eATzit"
            src="https://images.tridge.com/720x720/fulfillment_image/2f/a2/b1/2fa2b12b90032e9c7314f951c2b66e49e01002cc/Kenya_Macadamia.jpg"
            alt="checo"
            width="200px"
            height="200px"
          />
          <h6>Refined Sunflower Oil</h6>
          <span>Turky</span>
          <h6>USD 6.25</h6>
          <small className="text-muted">AVALIABLE SPACE:</small>
          <p className="text-muted">FAQ / Refined</p>
          <button type="button" className="btn btn-outline-primary">
            See Details
          </button>
        </div>
        <div className="col-12 col-sm">
          <img
            src="https://images.tridge.com/720x720/fulfillment_image/82/39/96/8239961941d7168b70804386ffd8740b8dea550f/Pakistan_Mango.jpg"
            alt="oil"
            width="200px"
            height="200px"
          />
          <h6>Refined Sunflower Oil</h6>
          <span>Turky</span>
          <h6>USD 6.25</h6>
          <small className="text-muted">AVALIABLE SPACE:</small>
          <p className="text-muted">FAQ / Refined</p>
          <button type="button" className="btn btn-outline-primary">
            See Details
          </button>
        </div>
        <div className="col-12 col-sm">
          <img
            src="https://images.tridge.com/720x720/fulfillment_image/83/e7/ea/83e7ead8ba98d0b4cae3f293b580ab7f88ade775/Thailand_mango.jpg"
            alt="mongo"
            width="200"
            height="200"
          />
          <h6>Refined Sunflower Oil</h6>
          <span>Turky</span>
          <h6>USD 6.25</h6>
          <small className="text-muted">AVALIABLE SPACE:</small>
          <p className="text-muted">FAQ / Refined</p>
          <button type="button" className="btn btn-outline-primary">
            See Details
          </button>
        </div>
        <div className="col-12 col-sm">
          <img
            class="sc-iUKqMP hlZHGM  sc-n9urus-3 sc-n9urus-6 jpFSoa eATzit"
            src="https://images.tridge.com/720x720/fulfillment_image/2e/03/9e/2e039e082bf28815ffb40d7a0efbaa225699da86/Pakistan_Sesame_Seed.jpg"
            alt="seed"
            width="200"
            height="200"
          />
          <h6>Refined Sunflower Oil</h6>
          <span>Turky</span>
          <h6>USD 6.25</h6>
          <small className="text-muted">AVALIABLE SPACE:</small>
          <p className="text-muted">FAQ / Refined</p>
          <button type="button" className="btn btn-outline-primary">
            See Details
          </button>
        </div>
        <div className="col-12 col-sm">
          <img
            class="sc-iUKqMP hlZHGM  sc-n9urus-3 sc-n9urus-6 jpFSoa eATzit"
            src="https://images.tridge.com/720x720/fulfillment_image/a9/1e/4d/a91e4d516bb60a40e5fa9e7b0492a5633185a2cb/Lebanon_Apple.jpg"
            alt="apple"
            width="200"
            height="200"
          />
          <h6>Refined Sunflower Oil</h6>
          <span>Turky</span>
          <h6>USD 6.25</h6>
          <small className="text-muted">AVALIABLE SPACE:</small>
          <p className="text-muted">FAQ / Refined</p>
          <button type="button" className="btn btn-outline-primary">
            See Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpComingProduct;
