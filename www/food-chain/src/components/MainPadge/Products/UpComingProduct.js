import { Link } from 'react-router-dom';
import classes from './TrendProduct.module.css';
import flagStyle from '../../../assets/css/icons.css';
import Urls from '../../../Urls';

const UpComingProduct = ({ photos }) => {
  return (
    <div className={classes.content}>
      <Link to={`/product/${photos.id}`} style={{ textDecoration: 'none' }}>
        <img
          src={Urls.domainUrl + photos.files[0]?.file_path}
          alt='sunFlower'
          width='200px'
          height='200px'
          style={{ borderRadius: '5px' }}
        />
        <div className={classes.title}>{photos.title}</div>
        <i className={`flag-icon flag-icon-${photos.flag} mx-1`}></i>
        <span className={classes.country}>{photos.country}</span>
        <div className={classes.price}>
          <span style={{ color: '#637381' }}>USD</span> {photos.price} ~
        </div>
        <div className={classes.available}>AVAILABLE SPECS:</div>
        <small className='text-muted'>{photos.variety}</small>
        <p className='text-muted' style={{ fontSize: '10px' }}>
          {photos.require}
        </p>
        <button className={classes.buttonDetails}>See Details</button>
      </Link>
    </div>
  );
};

export default UpComingProduct;
