import classes from './Header.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { axiosInstance } from './../../axios/config';

const Navbar = (props) => {
  const navigate = useNavigate();
  const [data ,  setData] = useState([]);
  const [searchNav , setSearchNav] = useState('')

  const logout = () => {
    localStorage.clear();
    navigate('/login');
  };

  const handleSearch = (e) => {
    setSearchNav(e.target.value)
    getSearchData()
  }

  const getSearchData = () => {
    axiosInstance.post('/api/products/search' , {
      search: searchNav
    }).then(res => localStorage.setItem('key' , res.data.title));
    
  }
  return (
    <div
      className={classes.nav}
      style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1 }}
    >
      <nav
        className='navbar navbar-expand-lg navbar-light bg-black text-light '
        style={{ backgrounColor: '#00000' }}
      >
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <Link
            to='/'
            className='navbar-brand text-light'
            style={{
              fontSize: '15px',
              fontFamily: 'Inter, sans-serif',
              fontWeight: '400',
            }}
          >
            TRU Market Fulfillment Solution
          </Link>
          <form className='form-inline my-2 my-lg-0'>
            <i
              className='fa fa-search'
              style={{
                position: 'absolute',
                marginTop: '20px',
                marginLeft: '20px',
                color: '#759EA0',
              }}
            ></i>
            <input
              className=' mr-sm-2'
              type='search'
              placeholder='Search any products in food and agriculture'
              aria-label='Search'
              list='browsers'
              name='browser'
              id='browser'
              onChange={(e) => handleSearch(e)}
            />
            <datalist id='browsers'>
              {props.data && props.data.map((res, index) => {
                return (
                  <div>
                    <option value={res.title} />
                  </div>
                )
              })}
            </datalist>
          </form>
        </div>
        <small className='text-bold mx-2'>{localStorage?.name}</small>
        {localStorage.token ? (
          <button class='btn btn-outline-danger mx-2' onClick={logout}>
            Logout
          </button>
        ) : (
          <small>
            <Link
              to='/login'
              className='btn text-light'
              style={{
                borderRadius: '8px',
                fontSize: '13px',
                fontWeight: 'bold',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              Sing In
            </Link>
          </small>
        )}

        <select
          className='form-control bg-black text-light'
          style={{
            fontSize: '14px',
            border: 'none',
            fontFamily: 'Inter, sans-serif',
          }}
        >
          <option> English</option>
          <option>Arabic</option>
          <option>Ting Viet</option>
        </select>
      </nav>
    </div>
  );
};

export default Navbar;
