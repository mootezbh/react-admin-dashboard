import { Link } from "react-router-dom";

const Sidebar = () => {
  const usr = JSON.parse(localStorage.getItem("user"));
  console.log(usr);
  return (
    <div className="col-sm-3 col-xs-6 sidebar pl-0">
      <div className="inner-sidebar mr-3">
        {/*Image Avatar*/}
        <div className="avatar text-center">
          <img
            src="assets/img/client-img4.png"
            alt
            className="rounded-circle"
          />
          <p>
            <strong>{usr.name}</strong>
          </p>
          <span className="text-primary small">
            <strong>{usr.company_name}</strong>
          </span>
        </div>
        {/*Image Avatar*/}
        {/*Sidebar Navigation Menu*/}
        <div className="sidebar-menu-container">
          <ul className="sidebar-menu mt-4 mb-4">
            {usr.__t == "admin" && (
              <li className="parent">
                <a
                  href="#"
                  onClick={() => {
                    // eslint-disable-next-line no-undef
                    toggle_menu("dashboard");
                    return false;
                  }}
                  className
                >
                  <i className="fa fa-dashboard mr-3"> </i>
                  <span className="none">
                    Dashboard{" "}
                    <i className="fa fa-angle-down pull-right align-bottom" />
                  </span>
                </a>
                <ul className="children" id="dashboard">
                  <li className="child">
                    <Link to="/">
                      <a className="ml-4">
                        <i className="fa fa-angle-right mr-2" /> Ecommerce
                      </a>
                    </Link>
                  </li>
                </ul>
              </li>
            )}

            {usr.__t == "admin" && (
              <li className="parent">
                <a
                  href="#"
                  onClick={() => {
                    // eslint-disable-next-line no-undef
                    toggle_menu("categories");
                    return false;
                  }}
                  className
                >
                  <i className="fa fa-tags mr-3"> </i>
                  <span className="none">
                    Categories{" "}
                    <i className="fa fa-angle-down pull-right align-bottom" />
                  </span>
                </a>
                <ul className="children" id="categories">
                  <li className="child">
                    <Link to="/categories">
                      <a className="ml-4">
                        <i className="fa fa-angle-right mr-2" /> categories list
                      </a>
                    </Link>
                  </li>

                  <li className="child">
                    <Link to="/addcat">
                      <a className="ml-4">
                        <i className="fa fa-angle-right mr-2" /> add new
                        category
                      </a>
                    </Link>
                  </li>
                </ul>
              </li>
            )}
            {usr.__t == "admin" && (
              <li className="parent">
                <a
                  href="#"
                  onClick={() => {
                    // eslint-disable-next-line no-undef
                    toggle_menu("subcategories");
                    return false;
                  }}
                  className
                >
                  <i className="fa fa-sharp fa-light fa-tags mr-3"> </i>
                  <span className="none">
                    Subcategories{" "}
                    <i className="fa fa-angle-down pull-right align-bottom" />
                  </span>
                </a>
                <ul className="children" id="subcategories">
                  <li className="child">
                    <Link to="/subcategories">
                      <a className="ml-4">
                        <i className="fa fa-angle-right mr-2" /> subcategories
                        list
                      </a>
                    </Link>
                  </li>

                  <li className="child">
                    <Link to="/addsub">
                      <a className="ml-4">
                        <i className="fa fa-angle-right mr-2" /> add new
                        subcategory
                      </a>
                    </Link>
                  </li>
                </ul>
              </li>
            )}

            <li className="parent">
              <a
                href="#"
                onClick={() => {
                  // eslint-disable-next-line no-undef
                  toggle_menu("ecommerce");
                  return false;
                }}
                className
              >
                <i className="fa fa-shopping-cart mr-3" />
                <span className="none">
                  Products{" "}
                  <i className="fa fa-angle-down pull-right align-bottom" />
                </span>
              </a>
              <ul className="children" id="ecommerce">
                <li className="child">
                  <Link to="/products">
                    <a className="ml-4">
                      <i className="fa fa-angle-right mr-2" /> Product List
                    </a>
                  </Link>
                </li>
                <li className="child">
                  <Link to="/addproduct">
                    <a className="ml-4">
                      <i className="fa fa-angle-right mr-2" /> Add product
                    </a>
                  </Link>
                </li>
                <li className="child">
                  <Link to="/orders">
                    <a className="ml-4">
                      <i className="fa fa-angle-right mr-2" /> OrderList
                    </a>
                  </Link>
                </li>
                <li className="child">
                  <a href="invoice.html" className="ml-4">
                    <Link to="/Invoices">
                      <i className="fa fa-angle-right mr-2" /> Invoice
                    </Link>
                  </a>
                </li>
              </ul>
            </li>
            {usr.__t == "admin" && (
              <li className="parent">
                <a
                  href="#"
                  onClick={() => {
                    // eslint-disable-next-line no-undef
                    toggle_menu("providers");
                    return false;
                  }}
                  className
                >
                  <i className="fa fa-solid fa-truck mr-3"> </i>
                  <span className="none">
                    Providers{" "}
                    <i className="fa fa-angle-down pull-right align-bottom" />
                  </span>
                </a>
                <ul className="children" id="providers">
                  <li className="child">
                    <Link to="/providers">
                      <a className="ml-4">
                        <i className="fa fa-angle-right mr-2" /> providers list
                      </a>
                    </Link>
                  </li>

                  <li className="child">
                    <Link to="/addprovider">
                      <a className="ml-4">
                        <i className="fa fa-angle-right mr-2" /> add new
                        provider
                      </a>
                    </Link>
                  </li>
                  <li className="child">
                    <Link to="/pending">
                      <a className="ml-4">
                        <i className="fa fa-angle-right mr-2" /> Pending providers
                      </a>
                    </Link>
                  </li>
                </ul>
              </li>
            )}
          </ul>
        </div>
        {/*Sidebar Naigation Menu*/}
      </div>
    </div>
  );
};

export default Sidebar;
