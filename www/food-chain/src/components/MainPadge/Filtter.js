import { Link } from "react-router-dom";

const Filtter = ({ categories }) => {
  return (
    <div style={{fontFamily: 'Arial, Helvetica, sans-seri' , fontWeight:'600' , fontSize: '100%', lineHeight: '1.15'}}>
      {categories && (
        <Link
          className="col btn w-100"
          style={{ border: "1px solid rgb(145, 174, 194)", margin: "1px" }}
          to={`/categories/${categories.id}`}
        >
          {categories.title}
          <i className="fa fa-angle-right " style={{marginLeft: '30px'}}  />
        </Link>
      )}
    </div>
  );
};

export default Filtter;
