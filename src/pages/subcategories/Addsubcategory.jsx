import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Footer from "../../components/footer/Footer";
import category from "../../services/category";
import subcategory from "../../services/subcategory";
import Select from "react-select";

{/* TODO:fix subcategorie*/}
const Addsubcategory = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [cat, setCat] = useState([]);
  const [err, setErr] = useState("");

  const onChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    console.log(data);
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Add category?",
      text: "Do you want to add this category?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, add it!",
    }).then((result) => {
      if (result.isConfirmed) {
        subcategory
          .create(data)
          .then((res) => {
            console.log(res);
            navigate("/subcategories");
          })
          .catch((err) => {
            console.log(err.response);
            setErr(err.response.data.message);
          });
        //Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  const listAll = async () => {
    await category
      .getAll()
      .then((res) => {
        setCat(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });}
  useEffect(() => {
    listAll();
  }, []);
  const options = cat.map((item) => {
    return { value: item._id, label: item.name };
  });
  return (
    <div className="col-sm-9 col-xs-12 content pt-3 pl-0">
      <div className="mt-4 mb-3 p-3 button-container bg-white border shadow-sm">
        <h6 className="mb-3">Add subcategory</h6>
        <form onSubmit={handlesubmit}>
          <div className="form-group floating-label">
            <input
              className="form-control"
              type="text"
              name="name"
              required
              onChange={onChange}
            />
            <label>Name</label>
          </div>
          <div className="form-group">
            {err !== "" ? <label style={{ color: "red" }}>{err}</label> : null}
          </div>
          <Select
              name="subcategory"
              options={options}
              className="basic-multi-select"
              classNamePrefix="select"
              onChange={(e) => setData({
                ...data,
                category: e.value.toString(),
              })}
            />

          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Addsubcategory;
