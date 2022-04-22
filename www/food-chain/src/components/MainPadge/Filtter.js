import { Link } from "react-router-dom";

const Filtter = ({ categories }) => {
  return (
    <div>
      {categories && (
        <Link
          className="col btn w-100"
          style={{ border: "1px solid rgb(145, 174, 194)", margin: "1px",fontFamily: 'Inter, sans-serif' , fontWeight:'600' , fontSize: '14px' , lineHeight: '22px' }}
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
