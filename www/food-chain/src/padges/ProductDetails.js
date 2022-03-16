import { useParams, Link } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { axiosInstance } from "./../axios/config";
import DetailsCard from "../components/filtter/DetailsCard";
import Details from "../components/filtter/Details";
import PhotosGallary from './../components/filtter/PhotosGallary';


export default function ProductDetails(props) {
  const params = useParams();
  const [type, setType] = useState("");
  const [displayGallary , setDisplayGallary] = useState(false)

  const handleType = useCallback(async () => {
    axiosInstance.get(`api/products/${params.id}`).then((res) => {
      setType(res);
    });
  }, [params.id]);

  useEffect(() => {
    handleType();
  }, [handleType]);

 

  return (
    <div className="container mt-5">
      <DetailsCard productId={type} />
      <div className="text-center">
      <button
        className="btn btn-outline-primary m-5"
        onClick={() => setDisplayGallary(false)} 
      >

        Product Details
      </button>
      <button
        className="btn btn-outline-primary "
        onClick={() => setDisplayGallary(true)}
      >
        Gallary
      </button>
    </div>
    {
      !displayGallary ? <Details productId= {type}/> : <PhotosGallary productId= {type}/>
    }
      </div>
      );
    }
   
   
