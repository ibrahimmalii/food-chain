import { useState } from 'react';
import { Link } from 'react-router-dom';
import classes from '../MainPadge/Products/TrendProduct.module.css';
import Urls from '../../Urls';

const DetailsCard = (props) => {
  const [srcPhoto, setSrc] = useState();
  const [photos, setPhotos] = useState();

  const handleMouseMove = (event) => {
    setSrc(event.target.src);
  };

  return (
    <div>
      {console.log('child')}
      <div className='container row'>
        <div className='col-4 mt-5 offset-1'>
          <div className='mb-5'>
            <Link
              style={{ color: '#C5CBC9', textDecoration: 'none' }}
              to='/categories'
            >
              <i
                class='fas fa-arrow-left'
                style={{ fontSize: '80%', marginRight: '10px' }}
              ></i>{' '}
              Browse Market
            </Link>
          </div>
          <div
            style={{
              height: '300px',
              borderRadius: '10px',
              border: '1px solid rgb(145, 174, 194)',
              overflew: 'hidden',
              objectFit: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              objectPosition: 'center center',
              backgroundImage: `${
                srcPhoto
                  ? 'url(' + srcPhoto + ')'
                  : photos && 'url(' + photos + ')'
              }`,
            }}
          ></div>
          <div className='d-flex'>
            {props.productId &&
              props.productId.data[0].files.map((res) => {
                return (
                  <div
                    className='m-1'
                    style={{ borderRadius: '10px', overflow: 'hidden' }}
                  >
                    <img
                      src={Urls.domainUrl + res.file_path}
                      alt='fruit'
                      width='100px'
                      height='100px'
                      onMouseMove={(event) => handleMouseMove(event)}
                    />
                    {!photos && setPhotos(Urls.domainUrl + res.file_path)}
                  </div>
                );
              })}
          </div>
        </div>
        <div className='col-6 m-5'>
          <div className='mt-5'>
            <br />
            <h1>{props.productId && props.productId.data[0].title}</h1>
            <h6
              className='mt-3'
              style={{ color: 'rgb(99, 115, 129)', fontWeight: '600' }}
            >
              HS Code: 091011 - Ginger - whole
            </h6>
            <div className='d-flex mt-4'>
              <strong
                color='black'
                style={{
                  letterSpacing: '-0.7px',
                  fontSize: '24px',
                  fontWeight: '600',
                }}
              >
                Upon Request
              </strong>
              <button
                className={classes.buttonDetails}
                style={{ marginLeft: '20px' }}
              >
                Price Table
              </button>
            </div>
            <div style={{ marginTop: '-40px' }}>
              <span
                color='textLight'
                style={{ color: 'rgb(99, 115, 129)', fontSize: '13px' }}
              >
                USD / MT, March 7, 2022
              </span>
            </div>
            <div
              style={{
                height: '100px',
                borderRadius: '5px',
                boxShadow: '0em 0em 1em rgba(0,0,0,0.1)',
              }}
              className=' mt-5 p-4'
            >
              <ul style={{ listStyleType: 'none' }}>
                <li
                  style={{
                    color: 'rgb(33, 43, 54)',
                    fontSize: '14px',
                    lineHeight: '22px',
                    fontWeight: '400',
                  }}
                >
                  <i
                    class='fas fa-exclamation-circle'
                    style={{ marginLeft: '-35px', marginRight: '20px' }}
                  ></i>
                  Currently our offer prices are not available due to frequent
                  fluctuation. <br />
                  <a className='' style={{ textDecoration: 'none' }}>
                    Get a quote
                  </a>{' '}
                  now for an offer price for this market.
                </li>
              </ul>
            </div>
            <div
              style={{
                borderRadius: '5px',
                boxShadow: '0em 0em 1em rgba(0,0,0,0.1)',
              }}
              className=' mt-5 p-4'
            >
              <h1
                style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                Current Offer Base Prices
              </h1>
              <div
                style={{ borderRadius: '5px', backgroundColor: '#F9FAFB' }}
                className='mt-4 p-4'
              >
                <h1 style={{ fontSize: '16px', color: ' rgb(99, 115, 129)' }}>
                  Available Specifications:
                </h1>
                <ul
                  style={{
                    listStyleType: 'none',
                    color: ' rgb(99, 115, 129)',
                    fontWeight: '400',
                    fontSize: '14px',
                    lineHeight: '28px',
                  }}
                >
                  <li>Variety: Yellow, Mature</li>
                  <li>Color: Yellow</li>
                  <li>Grade: High Quality</li>
                  <li>Packaging Type: Carton Box</li>
                  <li>Processed Style: Fresh</li>
                  <li>Incoterms: FOB</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
