import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import auth from "../../services/auth";

const Forgotpassword = () => {
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const onChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "change password?",
      text: "Do you want to change your password?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, change it!",
    }).then((result) => {
      if (result.isConfirmed) {
        auth
          .forgot(data)
          .then((res) => {
            console.log(res.data);
          })
          .catch((error) => {
            console.log(error.response);
            // setErr(error.response.data.message);
          });

        Swal.fire(
          "Check email",
          "check your email to change your passsword",
          "success"
        );
      }
    });
  };
  return (
    <div className="container-fluid login-wrapper">
      <div className="login-box">
        <h1 className="text-center mb-5">
          <i className="fa fa-rocket text-primary" /> Sleekadmin
        </h1>
        <div className="row">
          <div className="col-md-6 col-sm-6 col-12 login-box-info">
            <h3 className="mb-4">Sign up</h3>
            <p className="mb-4">
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. 3 wolf moon officia aute, non
              cupidatat skateboard dolor brunch.
            </p>
            <p className="text-center">
              <a href className="btn btn-light">
                Register here
              </a>
            </p>
          </div>
          <div className="col-md-6 col-sm-6 col-12 login-box-form p-4">
            <h3 className="mb-2">Login</h3>
            <small className="text-muted bc-description">
              Sign in with your credentials
            </small>
            <form className="mt-2" onSubmit={handleSubmit}>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">
                    <i className="fa fa-envelope" />
                  </span>
                </div>
                <input
                  name="email"
                  type="email"
                  className="form-control mt-0"
                  placeholder="email"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <button className="btn btn-theme btn-block p-2 mb-1">
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forgotpassword;
