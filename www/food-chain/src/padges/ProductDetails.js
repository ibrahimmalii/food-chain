import { useParams, Link } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { axiosInstance } from "./../axios/config";
import DetailsCard from "../components/filtter/DetailsCard";
import Details from "../components/filtter/Details";
import PhotosGallary from './../components/filtter/PhotosGallary';
import classes from './Categories.module.css';


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
    <div className="container mt-5 ">
      <DetailsCard productId={type} />
      {DetailsCard && 
      <div className="text-center mb-5">
        <span
          className={classes.buttons}
          onClick={() => setDisplayGallary(false)} 
          style={{
            color: `${!displayGallary ? '#2374EE' : '#637390'}`,
            textDecoration: `${!displayGallary ? 'underline' : 'none'}`,
            textDecorationColor: '#2374EE'
          }}
      >

        Product Details
      </span>
      <span
        className={classes.buttons}
          onClick={() => setDisplayGallary(true)}
          style={{
            color: `${displayGallary ? '#2374EE' : '#637390'}`,
            textDecoration: `${displayGallary ? 'underline' : 'none'}`,
            textDecorationColor: '#2374EE'
          }}
      >
        Gallary
      </span>
      </div>
    }
    {console.log('parent')}
    <hr style={{ color: '#E9EDF2' , height: '2px'}}/>
    {
      !displayGallary ? <Details productId= {type}/> : <PhotosGallary productId= {type}/>
    }
      </div>
      );
    }
   
   
