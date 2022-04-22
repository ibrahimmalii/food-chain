import { useParams, Link } from 'react-router-dom';
import { useState, useEffect, useCallback, useRef } from 'react';
import { axiosInstance } from './../axios/config';
import classes from './Categories.module.css';
import searchClass from './Categories.module.css';
import ProductCard from './../components/filtter/ProductCard';
import Filtter from './../components/MainPadge/Filtter';

const Fruits = (props) => {
  const params = useParams();
  const inputSearch = useRef();
  const [type, setType] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [searchData, setSearchData] = useState(false);


  const handleType = useCallback(async () => {
    
    axiosInstance.get(`api/categories/${params.id}`).then((res) => {
      setType(res);
      setSearchData(false);
      inputSearch.current.value = '';
    });
  }, [params.id]);

  useEffect(() => {
    handleType();
  }, [handleType]);

  const handleChange = (e) => {
    type &&
      type.data[0].products.map((res) => {
        return res.title === e.target.value && setSearchValue(res);
      });
    setSearchData(true);
  };

  return (
    <div className={searchClass.categorie}>
      <div className='container' style={{ marginTop: '100px' }}>
        <h2>Browser Markets</h2>
        <div className={classes.mainFiltter}>
          <div className='row container text-center'>
            <Link
              className='col btn'
              style={{ border: '1px solid rgb(145, 174, 194)', margin: '1px' }}
              to='/categories'
            >
              All Categories
            </Link>
            {props.categories &&
              props.categories.map((res, index) => {
                return (
                  <div className='col w-100' key={index}>
                    <Filtter categories={res} />
                  </div>
                );
              })}
          </div>
        </div>
        <input
          className=' mr-sm-2'
          type='search'
          placeholder='Search'
          aria-label='Search'
          list='browse'
          name='browser'
          id='browser'
          ref={inputSearch}
          onChange={(e) => handleChange(e)}
        />
        <datalist id='browse'>
          {type &&
            type.data[0].products.map((res, index) => {
              return (
                <div>
                  <option value={res.title} />
                </div>
              );
            })}
        </datalist>
        <div className='row m-5'>
          {searchData ? (
            <ProductCard type={searchValue} />
          ) : (
            type &&
            type.data[0].products.map((res) => {
              return <ProductCard type={res} />;
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Fruits;
