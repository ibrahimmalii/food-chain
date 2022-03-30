import Urls from '../../Urls';

const Details = (props) => {
  const src =
    props.productId &&
    Urls.domainUrl + props.productId.data[0].files[0].file_path;
  return (
    <div className='container m-5'>
      <h1 className='mb-5' style={{ color: 'rgb(33, 43, 54)' }}>
        {' '}
        Our {props.productId && props.productId.data[0].title} from{' '}
        {props.productId && props.productId.data[0].country}
      </h1>
      <p>
        {props.productId && props.productId.data[0].description}{' '}
        {props.productId && props.productId.data[0].description}
        {props.productId && props.productId.data[0].description}
        {props.productId && props.productId.data[0].description}
      </p>
      <p className='mt-4'>
        For European clients, Tridge has a warehouse in the Netherlands. We have
        in stock Gingers you can pick up or request for delivery!
      </p>
      <p className='mt-4'>
        For European clients, Tridge has a warehouse in the Netherlands. We have
        in stock Gingers you can pick up or request for delivery!
      </p>
      <p>
        {props.productId && props.productId.data[0].description}{' '}
        {props.productId && props.productId.data[0].description}
        {props.productId && props.productId.data[0].description}
        {props.productId && props.productId.data[0].description}
      </p>
      <div className='text-center'>
        <img
          src={src}
          alt='description'
          style={{
            maxWidth: '100%',
            height: 'auto',
            backgroundColor: 'white',
            objectFit: 'cover',
            boxShadow:
              '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
          }}
          className='mt-5'
        />
      </div>
    </div>
  );
};

export default Details;
