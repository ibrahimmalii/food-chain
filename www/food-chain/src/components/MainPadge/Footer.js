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
                      color: 'rgb(157, 182, 204)',
                      fontWeight: '500',
                      // fontSize: '14px',
                      textDecoration: 'none',
                      color: 'rgb(157, 182, 204)',
                    }}
                  >
                    <div>
                      <small>{res.title} &nbsp;&nbsp; &nbsp;</small>
                    </div>
                  </Link>
                  <div>
                    <small
                      className='fw-bold'
                      style={{
                        fontWeight: '800',
                        color: '#F9FAFB',
                        // fontSize: '14px',
                      }}
                    >
                      USD {res.price} ~ / KG &nbsp;&nbsp; &nbsp;&nbsp;
                      &nbsp;&nbsp;
                    </small>
                  </div>
                  <Link
                    to={`/categories/${res.category_id}`}
                    style={{
                      color: 'rgb(157, 182, 204)',
                      fontWeight: '500',
                      fontSize: '14px',
                      textDecoration: 'none',
                      cursor: 'pointer',
                      lineHeight: '22px',
                      color: 'rgb(157, 182, 204)',
                    }}
                  >
                    <div>
                      <small>{res.title} &nbsp;&nbsp; &nbsp;</small>
                    </div>
                  </Link>
                  <div>
                    <small
                      className='fw-bold'
                      style={{
                        fontWeight: '800',
                        color: '#F9FAFB',
                        fontSize: '14px',
                      }}
                    >
                      USD {res.price} ~ / KG &nbsp;&nbsp; &nbsp;&nbsp;
                      &nbsp;&nbsp;
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
