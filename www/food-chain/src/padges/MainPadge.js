import { Fragment } from 'react';
import Filtter from '../components/MainPadge/Filtter';
import Header from '../components/MainPadge/Header';
import MainBody from '../components/MainPadge/MainBody';
import TrendProduct from '../components/MainPadge/Products/TrendProduct';
import UpComingProduct from '../components/MainPadge/Products/UpComingProduct';
import Navbar from './../components/MainPadge/Navbar';
const MainPadge = props => {
    return(
        <Fragment>
            <Navbar/>
            <Header/>
            <MainBody/>
            <Filtter/>
            <TrendProduct/>
            <UpComingProduct/>
        </Fragment>
    )
}

export default MainPadge;