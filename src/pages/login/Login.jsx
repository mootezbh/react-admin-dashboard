import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import auth from "../../services/auth";

const Login = () => {
  const [data, setData] = useState({});
  const [err, setErr] = useState("");
  const navigate = useNavigate();
  const onChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    auth
      .login(data)
      .then((res) => {
        console.log(res.data);
        if(res.data.data.verified == false) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Verify your account',
              })
        } else {
        localStorage.setItem("user", JSON.stringify(res.data.data));
        localStorage.setItem("tokens", JSON.stringify(res.data.token));
        localStorage.setItem(
          "refresh_token",
          JSON.stringify(res.data.refresh_token)
        );
         navigate("/")
        }
      })
      .catch((error) => {
        setErr(error.response.data.message);
        console.log(error);
        
      });
  };
  return (
    <div className="login-body">
    <div className="container-fluid login-wrapper">
      <div className="login-box">
        <h1 className="text-center mb-5">
          <i className="fa fa-rocket text-primary" /> Ecom
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
              <Link to="/signup">
              <a href className="btn btn-light" style={{ color: "black" }}>
                Register here
              </a>
              </Link>
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
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">
                    <i className="fa fa-lock" />
                  </span>
                </div>
                <input
                  name="password"
                  type="text"
                  className="form-control mt-0"
                  placeholder="Password"
                  aria-label="Password"
                  aria-describedby="basic-addon1"
                  onChange={onChange}
                />
              </div>
              <p style={{color : "red"}}>{err}</p><br />
              <div className="form-group">
                <button className="btn btn-theme btn-block p-2 mb-1">
                  Login
                </button>
                <Link to="/forgot">
                <a href="#">
                  <small className="text-theme">
                    <strong>Forgot password?</strong>
                  </small>
                </a>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;
