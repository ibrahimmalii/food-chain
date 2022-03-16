const Details = (props) => {
  const src =
    props.productId &&
    "http://localhost:8000" + props.productId.data[0].files[0].file_path;
  return (
    <div className="container m-5">
      <h2 className="mb-5">
        {" "}
        Our {props.productId && props.productId.data[0].title} from{" "}
        {props.productId && props.productId.data[0].country}
      </h2>
      <p>
        {props.productId && props.productId.data[0].description}{" "}
        {props.productId && props.productId.data[0].description}
        {props.productId && props.productId.data[0].description}
        {props.productId && props.productId.data[0].description}
      </p>
      <p className="mt-4">
        For European clients, Tridge has a warehouse in the Netherlands. We have
        in stock Gingers you can pick up or request for delivery!
      </p>
      <img src={src} alt="description" width='90%' height='600px' style={{objectFit:'cover'}} className='m-5'/>
    </div>
  );
};

export default Details;
