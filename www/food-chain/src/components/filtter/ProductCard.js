import { Link } from 'react-router-dom';
import classes from '../MainPadge/Products/TrendProduct.module.css';
import flagStyle from '../../assets/css/icons.css';

const ProductCard = (props) => {
  return (
    <div
      className='col-12 col-sm'
      style={{ borderRadius: '10px', overflew: 'hidden' }}
    >
      <Link to={`/product/${props.type.id}`} style={{ textDecoration: 'none' }}>
        <img
          src={'http://localhost:8000' + props.type.files[0].file_path}
          alt='sunFlower'
          width='200px'
          height='200px'
          style={{ borderRadius: '8px' }}
        />
        <div className={classes.title}>{props.type.title}</div>
        <i className={`flag-icon flag-icon-${props.type.variety} mx-1`}></i>
        <span className={classes.country}>{props.type.country}</span>
        <div className={classes.price}>
          <span style={{ color: '#637381' }}>USD</span> {props.type.price} ~
        </div>
        <div className={classes.available}>AVAILABLE SPECS:</div>
        <small className='text-muted'>{props.type.variety}</small>
        <p className='text-muted' style={{ fontSize: '10px' }}>
          {props.type.require}
        </p>
        <button className={classes.buttonDetails}>See Details</button>
      </Link>
    </div>
  );
};

export default ProductCard;
