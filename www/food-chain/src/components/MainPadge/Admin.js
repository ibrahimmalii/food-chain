import { axiosInstance } from "./../../axios/config";
import { useRef ,useState } from "react";
const Admin = (props) => {

    const [photos , setPhotos] = useState(null);
  const title = useRef();
  const description = useRef();
  const price = useRef();
  const country = useRef();
  const variety = useRef();
  const categorieId = useRef();

  const onChange = (e) => {
    setPhotos(e.target.files[0])
}

  const submitForm = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title.current.value);
    formData.append("description", description.current.value);
    formData.append("price", price.current.value);
    formData.append("country", country.current.value);
    formData.append("variety", variety.current.value);
    formData.append("category_id", categorieId.current.value);
    formData.append("photos", photos);
    axiosInstance
      .post("/api/products", formData ,{
        headers: {
            'content-type': 'multipart/form-data'
        }
      })
      .then(res => {
          window.location.reload()
      })
      .catch(console.error);
  };
  return (
    <div className="text-center mb-5">
      {localStorage.token && <button
        className="btn btn-outline-primary w-50"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        type="button"
      >
        Add Product
      </button>}

     <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog ">
          <div className="modal-content p-3">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add Product
              </h5>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form onSubmit={submitForm} action="post">
              <div className="">
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    Title
                  </span>
                  <input
                    name="title"
                    type="text"
                    className="form-control"
                    aria-label="title"
                    aria-describedby="basic-addon1"
                    ref={title}
                  />
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text">Price</span>
                  <input
                    name="price"
                    type="number"
                    className="form-control"
                    aria-label="Amount (to the nearest dollar)"
                    ref={price}
                  />
                  <span className="input-group-text">.00</span>
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text">Variety</span>
                  <input
                    name="variety"
                    type="text"
                    className="form-control"
                    aria-label="Amount (to the nearest dollar)"
                    ref={variety}
                  />
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text">Country</span>
                  <input
                    name="country"
                    type="text"
                    className="form-control"
                    aria-label="Amount (to the nearest dollar)"
                    ref={country}
                  />
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text">Description</span>
                  <textarea
                    className="form-control"
                    aria-label="With textarea"
                    name="description"
                    ref={description}
                  ></textarea>
                </div>

                <select
                  className="form-select"
                  aria-label="Default select example"
                  ref={categorieId}
                >
                  <option selected>Choose fruit category</option>
                  {props.categories &&
                    props.categories.map((res, index) => {
                      return <option value={res.id}>{res.title}</option>;
                    })}
                </select>

                <div class="my-3">
                  <input
                    class="form-control"
                    name="photos"
                    type="file"
                    id="formFile"
                    ref={photos}
                    onChange={onChange}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="submit" className="btn btn-outline-primary">
                  Save changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
