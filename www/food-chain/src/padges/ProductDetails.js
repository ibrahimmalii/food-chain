import { useParams, Link } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import { axiosInstance } from './../axios/config';
import DetailsCard from '../components/filtter/DetailsCard';
import Details from '../components/filtter/Details';
import PhotosGallary from './../components/filtter/PhotosGallary';
import classes from './Categories.module.css';
import OpenUpQuote from './../components/OpenUpQuote';

export default function ProductDetails(props) {
  const params = useParams();
  const [type, setType] = useState('');
  const [displayGallary, setDisplayGallary] = useState(false);
  const [isModalOpenedFromChild, setIsModalOpenedFromChild] = useState(false);

  const handleType = useCallback(async () => {
    axiosInstance.get(`api/products/${params.id}`).then((res) => {
      setType(res);
    });
  }, [params.id]);

  useEffect(() => {
    handleType();
  }, [handleType]);

  const openQuoteModal = (value) => {
    setIsModalOpenedFromChild(!isModalOpenedFromChild);
  };

  return (
    <div className='container mt-5 '>
      {type && (
        <div>
          <DetailsCard
            productId={type}
            params={params.id}
            isModalOpened={isModalOpenedFromChild}
          />
          <div className='text-center mb-5'>
            <span
              className={classes.buttons}
              onClick={() => setDisplayGallary(false)}
              style={{
                color: `${!displayGallary ? '#2374EE' : '#637390'}`,
                textDecoration: `${!displayGallary ? 'underline' : 'none'}`,
                textDecorationColor: '#2374EE',
              }}
            >
              Product Details
            </span>
            <span
              className={classes.buttons}
              onClick={() => setDisplayGallary(true)}
              style={{
                color: `${displayGallary ? '#2374EE' : '#637390'}`,
                textDecoration: `${displayGallary ? 'underline' : 'none'}`,
                textDecorationColor: '#2374EE',
              }}
            >
              Gallery
            </span>
          </div>

          <hr style={{ color: '#E9EDF2', height: '2px' }} />
          {!displayGallary ? (
            <Details productId={type} />
          ) : (
            <PhotosGallary productId={type} />
          )}
          <OpenUpQuote onOpenQuoteModal={openQuoteModal} />
        </div>
      )}
    </div>
  );
}
