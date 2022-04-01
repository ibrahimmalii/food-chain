import { Link } from 'react-router-dom';
import classes from './Footer.module.css';

const Footer = ({ footerData }) => {
  return (
    <div className={classes.footer}>
      <div className={classes.skills}>
        <div className='d-flex'>
          {footerData &&
            footerData.map((res, index) => {
              return (
                <div className='d-flex' key={index}>
                  <Link
                    to={`/categories/${res.category_id}`}
                    style={{
                      textDecoration: 'none',
                      color: 'rgb(157, 182, 204)',
                    }}
                  >
                    <div>
                      <small>{res.title} &nbsp;&nbsp; &nbsp;</small>
                    </div>
                  </Link>
                  <div>
                    <small className='fw-bold' style={{ color: '#A8ACB1' }}>
                      {res.price}$ &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                    </small>
                  </div>
                  <Link
                    to={`/categories/${res.category_id}`}
                    style={{
                      textDecoration: 'none',
                      color: 'rgb(157, 182, 204)',
                    }}
                  >
                    <div>
                      <small>{res.title} &nbsp;&nbsp; &nbsp;</small>
                    </div>
                  </Link>
                  <div>
                    <small className='fw-bold' style={{ color: '#A8ACB1' }}>
                      {res.price}$ &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                    </small>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
