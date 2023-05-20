/* eslint-disable no-undef */
const Topbar = () => {
  return (
    <div className="row header shadow-sm">
      {/*Logo*/}
      <div className="col-sm-3 pl-0 text-center header-logo">
        <div className="bg-theme mr-3 pt-3 pb-2 mb-0">
          <h3 className="logo">
            <a href="#" className="text-secondary logo">
              <i className="fa fa-rocket" /> admin
            </a>
          </h3>
        </div>
      </div>
      {/*Logo*/}
      {/*Header Menu*/}
      <div className="col-sm-9 header-menu pt-2 pb-0">
        <div className="row">
          {/*Menu Icons*/}
          <div className="col-sm-4 col-8 pl-0">
            {/*Toggle sidebar*/}

            <span className="menu-icon" onClick={toggle_sidebar}>
              <span id="sidebar-toggle-btn" />
            </span>
            {/*Toggle sidebar*/}
          </div>
          {/*Menu Icons*/}
          {/*Search box and avatar*/}
          <div className="col-sm-8 col-4 text-right flex-header-menu justify-content-end">
            <div className="search-rounded mr-3">
              <input
                type="text"
                className="form-control search-box"
                placeholder="Enter keywords.."
              />
            </div>
            <div className="mr-4">
              <a
                className
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  src="assets/img/profile.jpg"
                  alt="Adam"
                  className="rounded-circle"
                  width="40px"
                  height="40px"
                />
              </a>
              <div
                className="dropdown-menu dropdown-menu-right mt-13"
                aria-labelledby="dropdownMenuLink"
              >
                <a className="dropdown-item" href="#">
                  <i className="fa fa-power-off pr-2" /> Logout
                </a>
              </div>
            </div>
          </div>
          {/*Search box and avatar*/}
        </div>
      </div>
      {/*Header Menu*/}
    </div>
  );
};

export default Topbar;
