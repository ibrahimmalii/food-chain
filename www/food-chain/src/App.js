import React, { Suspense, useCallback, useEffect, useState } from "react";
import { axiosInstance } from "./axios/config";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gallery from "./padges/Gallery";

const Main = React.lazy(() => import("./padges/MainPadge.js"));
const Nav = React.lazy(() => import("./components/MainPadge/Navbar.js"));
const Footer = React.lazy(() => import("./components/MainPadge/Footer"));
const Login = React.lazy(() => import("./components/Login.js"));
const Categories = React.lazy(() => import("./padges/Categories.js"));
const Fruit = React.lazy(() => import("./padges/Fruits.js"));
const Product = React.lazy(() => import("./padges/ProductDetails.js"));

function App() {
  const [data, setData] = useState("");
  const [categories, setCategories] = useState("");
  const [products , setProducts] = useState('');

  const fetchDataHandler = useCallback(async () => {
    axiosInstance
      .get("/api/products")
      .then((response) => setData(response.data));

    axiosInstance
      .get("/api/categories")
      .then((response) => setCategories(response.data));

    axiosInstance
      .get("/api/products")
      .then((response) => setProducts(response.data));
  }, []);

  useEffect(() => {
    fetchDataHandler();
  }, [fetchDataHandler]);


  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading ....</div>}>
        <Nav />
        <Routes>
          <Route
            path="/"
            element={<Main data={data} categories={categories} />}
          ></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route
            path="/categories"
            element={<Categories product={data} productName={categories} />}
          ></Route>
          <Route
            path="/categories/:id"
            element={<Fruit categories={categories}/>}
          ></Route>
          <Route path="/product/:id" element={<Product products={products}/>}></Route>
          <Route path='/gallery' element={<Gallery/>}></Route>
        </Routes>
        <Footer footerData={data} />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
