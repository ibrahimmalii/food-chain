import classes from './Header.module.css'

const Filtter = props => {
    return(
        <div className={classes.mainFiltter}>
        <div className="row container text-center" >
            <button className="col btn">All Categories</button>
            <button className="col btn">Fruits</button>
            <button className="col btn">Vegetables</button>
            <button className="col btn">Nuts & Seeds</button>
            <button className="col btn">Seafood</button>
            <button className="col btn">Coffee & Tea</button>
        </div>
        </div>
    )
}

export default Filtter;