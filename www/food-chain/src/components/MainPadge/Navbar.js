import classes from './Header.module.css'


const Navbar = (props) => {
  return (
      <div className ={classes.nav}>
    <nav class="navbar navbar-expand-lg navbar-light bg-dark text-light ">
    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <button class="navbar-brand text-light btn">Tridge Fulfillment Solution</button>
        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          </form>
          </div>
          <a>Sign In</a>
          
          <select className='form-control bg-black'>
          <option> English</option>
          <option>Arabic</option>
          <option>Ting Viet</option>
          </select>

    </nav>
    </div>
  );
};

export default Navbar;
