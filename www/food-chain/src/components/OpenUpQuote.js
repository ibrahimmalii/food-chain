import classes from './OpenUpQuote.module.css';
import { useState } from 'react';

export default function OpenUpQuote(props) {
  const [stateQuote, setStateQuote] = useState(false);

  const handleChangeUp = () => {
    setStateQuote(false);
  };

  const handleChangeDown = () => {
    setStateQuote(true);
  };

  const openModal = () => {
    props.onOpenQuoteModal(true);
  };

  return (
    <div>
      {stateQuote ? (
        <div className='float-end mx-5'>
          <div className={classes.truthy}>
            <i
              className='fa fa-angle-up text-light float-end  '
              onClick={handleChangeUp}
            />
            <h1>Are you interested in this market?</h1>
          </div>
        </div>
      ) : (
        <div className='float-end mx-5'>
          <div className={classes.container}>
            <i
              className='fa fa-angle-down text-light float-end  '
              style={{ fontSize: '20px' }}
              onClick={handleChangeDown}
            />
            <h1 className='mt-3'>
              Are you interested in this market? Get a quote now.
            </h1>
            <button
              className='btn btn-primary w-100 mt-4'
              onClick={openModal}
              style={{
                borderRadius: '20px',
                fontSize: '20px',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              Get a Quote
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
