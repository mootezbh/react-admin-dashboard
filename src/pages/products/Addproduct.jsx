/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import product from "../../services/product";
import prov from "../../services/provider";
import subcategory from "../../services/subcategory";

const Addproduct = () => {
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [sub, setSub] = useState();
  const [provider, setProvider] = useState();
  const [err, setErr] = useState("");
  const [image, setImage] = useState();
  const getSub = () => {
    subcategory.getAll().then((res) => setSub(res.data.data));
    prov.getAll().then((res) => setProvider(res.data.data));

    console.log(sub);
  };
  const onChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value.toString(),
    });
    console.log(data);
  };
  const handlefile = (e) => {
    setImage(e.target.files);
  };
const usr = JSON.parse(localStorage.getItem("user"));
  const handlSubmit = (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("name", data.name);
    formdata.append("description", data.description);
    formdata.append("reference", data.reference);
    formdata.append("quantity", data.quantity);
    formdata.append("price", data.price);
    formdata.append("subcategory", data.subcategory);
    formdata.append("provider", usr._id);
    for (let index = 0; index < image.length; index++) {
      formdata.append("gallery", image[index]);
    }
    Swal.fire({
      title: "Add Product?",
      text: "Do you want to add this product?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, add it!",
    }).then((result) => {
      if (result.isConfirmed) {
        product
          .create(formdata)
          .then((res) => {
            console.log(res);
            navigate("/products");
          })
          .catch((eror) => {
            console.log(eror.response);
            setErr(eror.response.data.message);
          });
        //Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  useEffect(() => {
    getSub();
  }, []);

  return (
    <div className="col-sm-9 col-xs-12 content pt-3 pl-0">
      <div className="mt-4 mb-3 p-3 button-container bg-white border shadow-sm">
        <h6 className="mb-2">Add product</h6>

        <form className="form-horizontal mt-4 mb-5" onSubmit={handlSubmit}>
          <div className="form-group row">
            <label className="control-label col-sm-2" htmlFor="input-1">
              Name
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="input-1"
                name="name"
                onChange={onChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="control-label col-sm-2" htmlFor="input-1">
              Description
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="input-1"
                name="description"
                onChange={onChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="control-label col-sm-2" htmlFor="input-1">
              Price
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="input-1"
                name="price"
                onChange={onChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="control-label col-sm-2" htmlFor="input-1">
              reference
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="input-1"
                name="reference"
                onChange={onChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="control-label col-sm-2" htmlFor="input-1">
              Quantity
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="input-1"
                name="quantity"
                onChange={onChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <label
              htmlFor="exampleFormControlSelect1"
              className="control-label col-sm-2"
            >
              Subcategory
            </label>
            <div className="col-sm-10">
              <select
                className="form-control"
                id="exampleFormControlSelect1"
                name="subcategory"
                onChange={onChange}
              >
                <option selected>Select</option>
                {sub?.map((item) => {
                  return (
                    <option value={item._id.toString()}>{item.name}</option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="form-group row">
            <label
              className="control-label col-sm-2"
              htmlFor="exampleFormControlFile1"
            >
              File input
            </label>
            <div className="col-sm-10">
              <input
              multiple
                type="file"
                className="form-control"
                id="exampleFormControlFile1"
                name="gallery"
                onChange={handlefile}
              />
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-success"
            data-dismiss="modal"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addproduct;
