import { useEffect, useState } from "react";
import Select from "react-select";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Footer from "../../components/footer/Footer";
import provider from "../../services/provider";

const Updateprovider = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState();
  const [err, setErr] = useState("");
  const listAll = async () => {
    await provider
      .getOne(id)
      .then((res) => {
        setData(res.data.data);
        console.log(res.data.data);
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

    console.log(data);
  };
  
  const handlesubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Update",
      text: "do you want to update this provider?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update it!",
    }).then((result) => {
      if (result.isConfirmed) {
        provider
          .update(id, data)
          .then((res) => {
            console.log(res);
            navigate("/providers");
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
  navigate("/providers")
}
  useEffect(() => {
    listAll();
  }, []);

  return (
    <div className="col-sm-9 col-xs-12 content pt-3 pl-0">
      <div className="mt-4 mb-3 p-3 button-container bg-white border shadow-sm">
        <form onSubmit={handlesubmit}>
          <div className="form-group ">
            <label>Name</label>
            <input
              className="form-control"
              type="text"
              value={data?.name}
              name="name"
              onChange={onChange}
            />
          </div>
          <div className="form-group ">
            <label>company name</label>
            <input
              className="form-control"
              type="text"
              value={data?.company_name}
              name="company_name"
              onChange={onChange}
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

export default Updateprovider;
