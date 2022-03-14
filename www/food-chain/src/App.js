import React, { Suspense } from "react";
import { axiosInstance } from './axios/config';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Main = React.lazy(() => import("./padges/MainPadge.js"));
const Nav = React.lazy(() => import("./components/MainPadge/Navbar.js"));
const Footer = React.lazy(() => import('./components/MainPadge/Footer'));
const Login = React.lazy(() => import('./components/Login.js'));
const Categorie = React.lazy(() => import('./padges/Categories.js'))
const Fruit = React.lazy(() => import('./padges/Fruits.js'))
const Coffee = React.lazy(() => import('./padges/Coffee.js'))
const Seafood = React.lazy(() => import('./padges/Seafood.js'))
const Seed = React.lazy(() => import('./padges/Seeds.js'))
const Vegetable = React.lazy(() => import('./padges/Vegetables.js'))

function App() {

  const photoArray = []
  
  // axiosInstance.get('/api/products').then(response => {
  //   response.data.map(res => {
  //     return(
  //       res.files.length > 0 && res.files.map(photo =>  photoArray.push(photo.file_path))
  //     )
  //   })
  // })

 

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading ....</div>}>
        <Nav />
        <Routes>
          <Route path="/" element={<Main  photos={photoArray}/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/categorie' element={<Categorie/>}></Route>
          <Route path='/fruit' element={<Fruit/>}></Route>
          <Route path='/coffee' element={<Coffee/>}></Route>
          <Route path='/seafood' element={<Seafood/>}></Route>
          <Route path='/seed' element={<Seed/>}></Route>
          <Route path='/vegetable' element={<Vegetable/>}></Route>
        </Routes>
        <Footer/>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
