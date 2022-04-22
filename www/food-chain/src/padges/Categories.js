import CatergorieCard from '../components/filtter/CatergorieCard';
import ProductName from '../components/filtter/ProductName';
import classes from './Categories.module.css';
import { Link } from 'react-router-dom';

const Categories = (props) => {
  console.log(props.products)
 


  return (
    <div className={classes.categorie}>
      {
        <div className='container' style={{ marginTop: '100px' }}>
          <h2>Browser Markets</h2>
          <div className={classes.mainFiltter}>
            <div className='row container text-center'>
              <Link
                className='col btn'
                style={{
                  border: '1px solid rgb(145, 174, 194)',
                  margin: '5px',
                }}
                to='/categories'
              >
                All Categories
              </Link>
              {props.productName &&
                props.productName.map((res) => {
                  return (
                    <div
                      className='col'
                      style={{
                        margin: '5px',
                        fontSize: '5px',
                        border: '1px solid rgb(145, 174, 194)',
                        borderRadius: '4px',
                      }}
                    >
                      <ProductName title={res} />
                    </div>
                  );
                })}
            </div>
          </div>
          <input
            type='search'
            placeholder='Search'
            list='browse'
            name='browser'
            id='browser'
           
          />
          <datalist id='browse'>
            {props.product &&
              props.product.map((res, index) => {
                return (
                  <div>
                    <option value={res.title} />
                  </div>
                );
              })}
          </datalist>
          <div className={classes.card}>
            <div className='row'>
              {props.product &&
                props.product.map((item, index) => {
                  return (
                    <div key={index} className='col-4'>
                      <CatergorieCard item={item} />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default Categories;

