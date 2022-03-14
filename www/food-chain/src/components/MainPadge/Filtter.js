import classes from './Header.module.css';
import { Link } from 'react-router-dom';

const Filtter = props => {
    return(
        <div className={classes.mainFiltter}>
        <div className="row container text-center" >
            <Link className="col btn" style={{border: '1px solid rgb(145, 174, 194)', margin: '1px'}} to='/categorie'>All Categories</Link>
            <Link className="col btn" style={{border: '1px solid rgb(145, 174, 194)' , margin: '1px'}} to='/fruits'>Fruits</Link>
            <Link className="col btn" style={{border: '1px solid rgb(145, 174, 194)' , margin: '1px'}} to='/vegetable'>Vegetables</Link>
            <Link className="col btn" style={{border: '1px solid rgb(145, 174, 194)' , margin: '1px'}} to='/seed'>Nuts & Seeds</Link>
            <Link className="col btn" style={{border: '1px solid rgb(145, 174, 194)' , margin: '1px'}} to='/seafood'>Seafood</Link>
            <Link className="col btn" style={{border: '1px solid rgb(145, 174, 194)', margin: '1px'}} to='/coffee'>Coffee & Tea</Link>
        </div>
        </div>
    )
}

export default Filtter;