import { useParams, Link } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { axiosInstance } from "./../axios/config";
import DetailsCard from "../components/filtter/DetailsCard";
import DetailsImage from "./../components/filtter/DetailsImage";

export default function ProductDetails(props) {
  const params = useParams();
  const [type, setType] = useState("");

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
      </div>
      );
    }
    // <div className="d-flex" style={{marginLeft: '50px'}}>
    //   {type &&
    //     type.data[0].files.map((res) => (
    //       <div
    //         className="m-1"
    //         style={{ borderRadius: "10px", overflow: "hidden" }}
    //       >
    //         <DetailsImage photos={res.file_path} />
    //       </div>
    //     ))}
    // </div>
