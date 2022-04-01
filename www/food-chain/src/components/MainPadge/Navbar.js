import classes from './Header.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { axiosInstance } from './../../axios/config';
import userService from '../../UserService.js';

const Navbar = (props) => {
  const navigate = useNavigate();
  const [searchNav, setSearchNav] = useState('');
  const [isUserLogged, setIsUserLogged] = useState(userService.isLogged());

  useEffect(() => {
    userService.getLoggedStatus().subscribe((res) => {
      console.log('res from use effect', res);
      setIsUserLogged(res);
    });
    if (localStorage.token) {
      userService.setLoggedStatus(true);
    }
  });

  const logout = () => {
    localStorage.clear();
    userService.setLoggedStatus(false);
    navigate('/login');
  };

  const handleSearch = (e) => {
    props.onDataChanged(e.target.value);
  };

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
              style={{ 'text-indent': '25px', outline: 'none' }}
              onChange={(e) => handleSearch(e)}
            />
            <datalist id='browsers'>
              {props.data &&
                props.data.map((res, index) => {
                  return (
                    <div>
                      <option value={res.title} />
                    </div>
                  );
                })}
            </datalist>
          </form>
        </div>
        <small className='text-bold mx-2'>{localStorage?.name}</small>
        {isUserLogged ? (
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
