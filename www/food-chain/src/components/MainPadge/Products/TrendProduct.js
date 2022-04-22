import { Link } from 'react-router-dom';
import classes from './TrendProduct.module.css';
import flagStyle from '../../../assets/css/icons.css';
import Urls from '../../../Urls';

const TrendProduct = (props) => {
  return (
    <div className={classes.content}>
      <Link
        to={`/product/${props.photos.slug}`}
        style={{ textDecoration: 'none' }}
      >
        <img
          src={Urls.domainUrl + props.photos.files[0]?.file_path}
          alt='sunFlower'
          width='200px'
          height='200px'
          style={{ borderRadius: '8px' }}
        />
        <div className={classes.title}>{props.photos.title}</div>
        <i className={`flag-icon flag-icon-${props.photos.flag} mx-1`}></i>
        <span className={classes.country}>{props.photos.country}</span>
        <div className={classes.price}>
          <span
            style={{
              fontWeight: '400',
              color: 'rgb(99, 115, 129)',
              lineHeight: '28px',
              fontSize: '20px',
            }}
          >
            USD
          </span>{' '}
          {props.photos.price} ~
        </div>
        <div className={classes.available}>AVAILABLE SPECS:</div>
        <small className={classes.variety}>{props.photos.variety}</small>
        <p className='text-muted' style={{ fontSize: '10px' }}>
          {props.photos.require}
        </p>
        <button className={classes.buttonDetails}>See Details</button>
      </Link>
    </div>
  );
};

export default TrendProduct;
