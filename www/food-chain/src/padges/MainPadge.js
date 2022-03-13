import { Fragment } from 'react';
import Filtter from '../components/MainPadge/Filtter';
import Footer from '../components/MainPadge/Footer';
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
            <Footer/>
        </Fragment>
    )
}

export default MainPadge;