import classes from "./Header.module.css";
import { Link, useNavigate } from "react-router-dom";


const Navbar = (props) => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate('/login')
  }
  return (
    <div
      className={classes.nav}
      style={{ position: "fixed", top: 0, width: "100%" , zIndex: 1 }}
    >
      <nav className="navbar navbar-expand-lg navbar-light bg-dark text-light ">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <Link to='/' className="navbar-brand text-light btn " style={{fontSize:'15px'}}>
            Tridge Fulfillment Solution
          </Link>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </div>
        {localStorage.token ? <button class="btn btn-outline-danger" onClick={logout}>Logout</button> : <small>Sign In</small>}
        <Link
          to="/login"
          className="btn btn-light text-secondary"
          style={{ borderRadius: "20px", fontSize: "13px", fontWeight: "bold" }}
        >
          Get Start
        </Link>

        <select className="form-control bg-black text-light">
          <option> English</option>
          <option>Arabic</option>
          <option>Ting Viet</option>
        </select>
      </nav>
    </div>
  );
};

export default Navbar;
