import { useEffect, useState } from "react";
import category from "../../services/category";
import subcategory from "../../services/subcategory";
import Select from "react-select";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Footer from "../../components/footer/Footer";

const Updatesubcategory = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState({});
  const [cat, setCat] = useState([]);
  const [err, setErr] = useState("");
  const listAll = async () => {
    await subcategory
      .getOne(id)
      .then((res) => {
        setData(res.data.data);
        console.log("sub", res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
    await category
      .getAll()
      .then((res) => {
        setCat(res.data.data);
        console.log("sub", res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const onChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });

  

}


  const handlesubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "update subcategory?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update it!",
    }).then((result) => {
      if (result.isConfirmed) {
        subcategory
          .update(id, data)
          .then((res) => {
            console.log(res);
            navigate("/subcategories");
          })
          .catch((err) => {
            console.log(err.response.data.data.message);
            setErr(err.response.data.data.message);
          });
        //Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  const handleclose = () => {
    navigate("/subcategories");
  };
  useEffect(() => {
    listAll();
  }, []);

  const options = cat.map((item) => {
    return { value: item._id, label: item.name };
  });

  return (
    <div className="col-sm-9 col-xs-12 content pt-3 pl-0">
      <div className="mt-4 mb-3 p-3 button-container bg-white border shadow-sm">
        <form onSubmit={handlesubmit}>
          <div className="form-group ">
            <label>Name</label>
            <input
              className="form-control"
              type="text"
              placeholder={data.name}
              name="name"
              onChange={onChange}
            />
          </div>
          <div className="form-group floating-label">
            <label className="mt-1">category</label>
           
            <Select
              name="category"
              options={options}
              className="basic-multi-select"
              classNamePrefix="select"
              onChange={(e) => setData({
                ...data,
                category: e.value.toString(),
              })}
            />
          </div>
          {err !== "" ? <p>{err}</p> : null}
          <span>
            <br></br>
          </span>
          <div className="modal-footer">
            <button
              type="submit"
              className="btn btn-success"
              data-dismiss="modal"
            >
              Submit
            </button>
            <button
              type="reset"
              className="btn btn-secondary"
              onClick={handleclose}
            >
              Close
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Updatesubcategory;
