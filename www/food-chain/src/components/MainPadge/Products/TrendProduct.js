
const TrendProduct = ({ photos }) => {
  return (
      <div className="col-12 col-sm">
        <img src={photos.src} alt="sunFlower" width="200px" height="200px" />
        <h6>{photos.name}</h6>
        <span>{photos.country}</span>
        <h6>{photos.salary}</h6>
        <small className="text-muted">{photos.avaliable}</small>
        <p className="text-muted" style={{fontSize:'10px'}}>{photos.require}</p>
        <button type="button" class="btn btn-outline-primary">
          See Details
        </button>
      </div>
      );
    };

export default TrendProduct;
