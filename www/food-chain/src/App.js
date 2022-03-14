import React, { Suspense, useCallback, useEffect, useState } from "react";
import { axiosInstance } from "./axios/config";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Main = React.lazy(() => import("./padges/MainPadge.js"));
const Nav = React.lazy(() => import("./components/MainPadge/Navbar.js"));
const Footer = React.lazy(() => import("./components/MainPadge/Footer"));
const Login = React.lazy(() => import("./components/Login.js"));
const Categorie = React.lazy(() => import("./padges/Categories.js"));
const Fruit = React.lazy(() => import("./padges/Fruits.js"));
const Coffee = React.lazy(() => import("./padges/Coffee.js"));
const Seafood = React.lazy(() => import("./padges/Seafood.js"));
const Seed = React.lazy(() => import("./padges/Seeds.js"));
const Vegetable = React.lazy(() => import("./padges/Vegetables.js"));

function App() {
  const [data, setData] = useState("");
  const [categories, setCategories] = useState("");

  const fetchDataHandler = useCallback(async () => {
    axiosInstance
      .get("/api/products")
      .then((response) => setData(response.data));

    axiosInstance
      .get("/api/categories")
      .then((response) => setCategories(response.data));
  }, []);

  useEffect(() => {
    fetchDataHandler();
  }, [fetchDataHandler]);

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading ....</div>}>
        <Nav />
        <Routes>
          <Route path="/" element={<Main data={data} />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/categorie" element={<Categorie categorie={categories} />}></Route>
          <Route path="/fruit" element={<Fruit />}></Route>
          <Route path="/coffee" element={<Coffee />}></Route>
          <Route path="/seafood" element={<Seafood />}></Route>
          <Route path="/seed" element={<Seed />}></Route>
          <Route path="/vegetable" element={<Vegetable />}></Route>
        </Routes>
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
