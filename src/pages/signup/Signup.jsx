import { useState } from "react";
import { useNavigate } from "react-router-dom";
import provider from "../../services/provider";

const Signup = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({});
    const onChange = (e) => {
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        provider.create(data).then((res) => {
            navigate("/login");
        }).catch((error) => {
            console.log(error);
        })
    }
  return (
    <div className="login-body">
      <div className="container-fluid login-wrapper">
        <div className="login-box">
          <h1 className="text-center mb-5">
            <i className="fa fa-rocket text-primary" /> Sleekadmin
          </h1>
          <div className="row">
            <div className="col-md-6 col-sm-6 col-12 login-box-info">
              <h3 className="mb-4">Sign in</h3>
              <p className="mb-4">
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch.
              </p>
              <p className="text-center">
                <a href className="btn btn-light" style={{ color: "black" }}>
                  Login here
                </a>
              </p>
            </div>
            <div className="col-md-6 col-sm-6 col-12 login-box-form p-4">
              <h3 className="mb-2">Sign up</h3>
              <small className="text-muted bc-description">
                Create new account
              </small>
              <form action className="mt-2" onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">
                      <i className="fa fa-user" />
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control mt-0"
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    name="name"
                    onChange={onChange}
                  />
                </div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">
                      <i className="fa fa-envelope" />
                    </span>
                  </div>
                  <input
                    type="email"
                    name="email"
                    className="form-control mt-0"
                    placeholder="johndoe@gmail.com"
                    aria-label="email"
                    aria-describedby="basic-addon1"
                    onChange={onChange}
                  />
                </div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">
                      <i className="fa fa-thin fa-building" />
                    </span>
                  </div>
                  <input
                    type="text"
                    name="company_name"
                    className="form-control mt-0"
                    placeholder="company name"
                    aria-label="phone"
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
                    type="password"
                    name="password"
                    className="form-control mt-0"
                    placeholder="Password"
                    aria-label="Password"
                    aria-describedby="basic-addon1"
                    onChange={onChange}
                  />
                </div>
                <div className="form-group">
                  <button className="btn btn-theme btn-block p-2 mb-1" type="submit">
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
