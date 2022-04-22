import { Link } from 'react-router-dom';
import classes from '../MainPadge/Products/TrendProduct.module.css';
import Urls from '../../Urls';

const CatergorieCard = ({ item }) => {
  console.log(item)
  return (
    <Link style={{ textDecoration: 'none' }} to={`/product/${item.id}`}>
      <div className='col-12 col-sm'>
        {item && (
          <div>
            <img
              src={Urls.domainUrl + item.files[0].file_path}
              alt='sunFlower'
              width='200px'
              height='200px'
              style={{ borderRadius: '8px' }}
            />
            <div className={classes.title}>{item.title}</div>
            <span className={classes.country}>{item.country}</span>
            <div className={classes.price}>
              <span style={{ color: '#637381' }}>USD</span> {item.price} ~
            </div>
            <div className={classes.available}>AVAILABLE SPECS:</div>
            <small className='text-muted'>{item.variety}</small>
            <p className='text-muted' style={{ fontSize: '10px' }}>
              {item.require}
            </p>
            <button className={classes.buttonDetails}>See Details</button>
          </div>
        )}
      </div>
    </Link>
  );
};

export default CatergorieCard;
