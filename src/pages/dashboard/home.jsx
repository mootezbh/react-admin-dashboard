import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div className="col-sm-9 col-xs-12 content pt-3 pl-0">
      <h5 className="mb-3">
        <strong>Dashboard</strong>
      </h5>
      <div className="row mt-1">
        <div className="col-sm-8 col-md-8">
          {/*Analytics*/}
          <div className="mt-1 mb-3 p-3 button-container bg-white shadow-sm border">
            <h6 className="mb-3">Revenue Analytics</h6>
            <canvas id="revenueChart" height="300px" />
          </div>
          {/*/Analytics*/}
        </div>
        <div className="col-sm-4 col-md-4">
          {/*Analytics*/}
          <div className="bg-white border shadow mb-4">
            <div className="media p-4">
              <div className="align-self-center mr-3 rounded-circle notify-icon_2 bg-white">
                <i className="fa fa-globe text-theme" />
              </div>
              <div className="media-body pl-2">
                <h3 className="mt-0 mb-0">
                  <strong>1,215,509</strong>
                </h3>
                <p>
                  <small className="bc-description text-theme">
                    TOTAL VISITORS
                  </small>
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white border shadow mb-4">
            <div className="media p-4">
              <div className="align-self-center mr-3 rounded-circle notify-icon_2 bg-white">
                <i className="fa fa-heart-o text-danger" />
              </div>
              <div className="media-body pl-2">
                <h3 className="mt-0 mb-0">
                  <strong>83,509</strong>
                </h3>
                <p>
                  <small className="bc-description text-danger">MENTIONS</small>
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white border shadow">
            <div className="media p-4">
              <div className="align-self-center mr-3 rounded-circle notify-icon_2 bg-white">
                <i className="fa fa-lightbulb text-success" />
              </div>
              <div className="media-body pl-2">
                <h3 className="mt-0 mb-0">
                  <strong>2,500</strong>
                </h3>
                <p>
                  <small className="text-success bc-description">
                    PROJECTS
                  </small>
                </p>
              </div>
            </div>
          </div>
          {/*/Analytics*/}
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-sm-6 col-md-4">
          {/*Browser usage*/}
          <div className="mt-1 mb-3 p-3 button-container bg-white shadow-sm border">
            <h6 className="mb-3">Browser usage</h6>
            <hr />
            <div
              id="radarChartEcharts"
              style={{ height: 300, width: "100%" }}
            />
          </div>
        </div>
        <div className="col-sm-6 col-md-4">
          {/*Store summary*/}
          <div className="mt-1 mb-3 p-3 button-container bg-white shadow-sm border">
            <h6 className="mb-3">Store summary</h6>
            <hr />
            <div
              id="donutChartEcharts"
              style={{ height: 300, width: "100%" }}
            />
          </div>
        </div>
        <div className="col-sm-12 col-md-4">
          {/*Profile card*/}
          <div className="card shadow">
            <div className="card-body">
              <div className="media">
                <img
                  className="align-self-center mr-3 rounded-circle"
                  src="assets/img/home-right-admin-img.png"
                  width="80px"
                  height="80px"
                  alt="Generic placeholder image"
                />
                <div className="media-body">
                  <h6 className="mt-0">
                    <strong>Rasheed Rayhan</strong>
                  </h6>
                  <p className="mb-3 text-info">
                    <strong>Web designer</strong>
                  </p>
                  <button type="button" className="btn btn-primary">
                    <i className="fa fa-plus" /> Follow
                  </button>
                </div>
              </div>
              <div className="mt-4 mb-4">
                <div className="row user-about">
                  <div className="col-sm-4 col-4 border-right">
                    <h4>20</h4>
                    <p>Photos</p>
                  </div>
                  <div className="col-sm-4 col-4">
                    <h4>31</h4>
                    <p>Videos</p>
                  </div>
                  <div className="col-sm-4 col-4 border-left">
                    <h4>120</h4>
                    <p>Tasks</p>
                  </div>
                </div>
              </div>
              <div className="dropdown-divider" />
              <p className="mb-3 mt-3 text-center p-space">
                Lorem ipsum dolor sit ametetur adipisicing elit, sed do eiusmod
                tempor incididunt adipisicing elit, sed do
              </p>
              <div className="flex-social mt-4 mb-3">
                <a href>
                  <i className="fa fa-facebook-square" />
                </a>
                <a href>
                  <i className="fa fa-google-plus-square" />
                </a>
                <a href>
                  <i className="fa fa-spotify" />
                </a>
                <a href>
                  <i className="fa fa-yahoo-square" />
                </a>
                <a href>
                  <i className="fa fa-twitter-square" />
                </a>
                <a href>
                  <i className="fa fa-linkedin-square" />
                </a>
                <a href>
                  <i className="fa fa-pinterest-square" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Realtime*/}
      <div className="mt-3 row">
        <div className="col-sm-12">
          <div className="mt-1 mb-3 p-3 button-container bg-white shadow-sm border">
            <h6 className="mb-3">Realtime Updates</h6>
            <hr />
            <div className="row mb-3">
              <div className="col-sm-6 ol-12">
                <h5>Current sales</h5>
                <h1 className="text-theme">356</h1>
              </div>
              <div className="col-sm-6 ol-12 text-right">
                <h5>Revenue</h5>
                <h1 className="text-danger">$5545</h1>
              </div>
            </div>
            <div
              id="realtimeDashboard"
              style={{ width: "100%", height: 150, overflowX: "auto" }}
            />
          </div>
        </div>
      </div>
      {/*/Realtime*/}
      {/*Products summary*/}
      <div className="mt-4 mb-4 bg-white border shadow lh-sm">
        {/*Recent Sales*/}
        <div className="product-list">
          <div className="row mb-0 px-3 pt-3">
            <div className="col-sm-8 pt-2">
              <h6 className="mb-4 bc-header">Recent Sales</h6>
            </div>
            <div className="col-sm-4 text-right pb-3">
              <div className="pull-right mr-3 btn-order-bulk">
                <button className="btn btn-theme btn-round">View all</button>
              </div>
              <div className="clearfix" />
            </div>
          </div>
          <div className="table-responsive product-list">
            <table className="table mt-0" id="productList">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Customer</th>
                  <th>Categories</th>
                  <th>Popularity</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="align-middle">IphoneX</td>
                  <td className="align-middle">
                    <div className="customers">
                      <span
                        className="customer-circle"
                        style={{
                          backgroundImage: 'url("assets/img/client-img4.png")',
                        }}
                      />
                      <span
                        className="customer-circle"
                        style={{
                          backgroundImage: 'url("assets/img/client-img5.png")',
                        }}
                      />
                      <span
                        className="customer-circle"
                        style={{
                          backgroundImage: 'url("assets/img/client-img3.png")',
                        }}
                      />
                      <span className="customer-circle end text-light text-center pt-2">
                        +8
                      </span>
                    </div>
                  </td>
                  <td className="align-middle">
                    <button className="btn-outline-theme btn-round">
                      mobile
                    </button>
                  </td>
                  <td className="align-middle">
                    <div className="progress" style={{ height: 5 }}>
                      <div
                        className="progress-bar bg-theme"
                        role="progressbar"
                        aria-valuenow={85}
                        style={{ width: "85%" }}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </td>
                  <td>$ 4,500</td>
                </tr>
                <tr>
                  <td className="align-middle">One Plus</td>
                  <td className="align-middle">
                    <div className="customers">
                      <span
                        className="customer-circle"
                        style={{
                          backgroundImage: 'url("assets/img/client-img2.png")',
                        }}
                      />
                      <span
                        className="customer-circle"
                        style={{
                          backgroundImage: 'url("assets/img/client-img5.png")',
                        }}
                      />
                      <span
                        className="customer-circle"
                        style={{
                          backgroundImage: 'url("assets/img/jd-150.png")',
                        }}
                      />
                      <span className="customer-circle end text-light text-center pt-2">
                        +4
                      </span>
                    </div>
                  </td>
                  <td className="align-middle">
                    <button className="btn-outline-theme btn-round">
                      mobile
                    </button>
                  </td>
                  <td className="align-middle">
                    <div className="progress" style={{ height: 5 }}>
                      <div
                        className="progress-bar bg-danger"
                        role="progressbar"
                        aria-valuenow={55}
                        style={{ width: "55%" }}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </td>
                  <td>$ 650</td>
                </tr>
                <tr>
                  <td className="align-middle">Samsumg S7</td>
                  <td className="align-middle">
                    <div className="customers">
                      <span
                        className="customer-circle"
                        style={{
                          backgroundImage: 'url("assets/img/client-img2.png")',
                        }}
                      />
                      <span
                        className="customer-circle"
                        style={{
                          backgroundImage: 'url("assets/img/client-img5.png")',
                        }}
                      />
                      <span
                        className="customer-circle"
                        style={{
                          backgroundImage: 'url("assets/img/jd-150.png")',
                        }}
                      />
                      <span className="customer-circle end text-light text-center pt-2">
                        +5
                      </span>
                    </div>
                  </td>
                  <td className="align-middle">
                    <button className="btn-outline-theme btn-round">
                      mobile
                    </button>
                  </td>
                  <td className="align-middle">
                    <div className="progress" style={{ height: 5 }}>
                      <div
                        className="progress-bar bg-primary"
                        role="progressbar"
                        aria-valuenow={40}
                        style={{ width: "40%" }}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </td>
                  <td>$ 1,200</td>
                </tr>
                <tr>
                  <td className="align-middle">Techno</td>
                  <td className="align-middle">
                    <div className="customers">
                      <span
                        className="customer-circle"
                        style={{
                          backgroundImage: 'url("assets/img/client-img3.png")',
                        }}
                      />
                      <span
                        className="customer-circle"
                        style={{
                          backgroundImage: 'url("assets/img/client-img4.png")',
                        }}
                      />
                      <span
                        className="customer-circle"
                        style={{
                          backgroundImage: 'url("assets/img/jd-150.png")',
                        }}
                      />
                      <span className="customer-circle end text-light text-center pt-2">
                        +4
                      </span>
                    </div>
                  </td>
                  <td className="align-middle">
                    <button className="btn-outline-theme btn-round">
                      mobile
                    </button>
                  </td>
                  <td className="align-middle">
                    <div className="progress" style={{ height: 5 }}>
                      <div
                        className="progress-bar bg-warning"
                        role="progressbar"
                        aria-valuenow={40}
                        style={{ width: "40%" }}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </td>
                  <td>$ 1,200</td>
                </tr>
                <tr>
                  <td className="align-middle">Sony Xperia</td>
                  <td className="align-middle">
                    <div className="customers">
                      <span
                        className="customer-circle"
                        style={{
                          backgroundImage: 'url("assets/img/profile.jpg")',
                        }}
                      />
                      <span
                        className="customer-circle"
                        style={{
                          backgroundImage: 'url("assets/img/client-img5.png")',
                        }}
                      />
                      <span
                        className="customer-circle"
                        style={{
                          backgroundImage: 'url("assets/img/jd-150.png")',
                        }}
                      />
                      <span className="customer-circle end text-light text-center pt-2">
                        +4
                      </span>
                    </div>
                  </td>
                  <td className="align-middle">
                    <button className="btn-outline-theme btn-round">
                      mobile
                    </button>
                  </td>
                  <td className="align-middle">
                    <div className="progress" style={{ height: 5 }}>
                      <div
                        className="progress-bar bg-success"
                        role="progressbar"
                        aria-valuenow={60}
                        style={{ width: "60%" }}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </td>
                  <td>$ 3,500</td>
                </tr>
                <tr>
                  <td className="align-middle">HTC</td>
                  <td className="align-middle">
                    <div className="customers">
                      <span
                        className="customer-circle"
                        style={{
                          backgroundImage: 'url("assets/img/profile.jpg")',
                        }}
                      />
                      <span
                        className="customer-circle"
                        style={{
                          backgroundImage: 'url("assets/img/client-img5.png")',
                        }}
                      />
                      <span
                        className="customer-circle"
                        style={{
                          backgroundImage: 'url("assets/img/jd-150.png")',
                        }}
                      />
                      <span className="customer-circle end text-light text-center pt-2">
                        +18
                      </span>
                    </div>
                  </td>
                  <td className="align-middle">
                    <button className="btn-outline-theme btn-round">
                      mobile
                    </button>
                  </td>
                  <td className="align-middle">
                    <div className="progress" style={{ height: 5 }}>
                      <div
                        className="progress-bar bg-danger"
                        role="progressbar"
                        aria-valuenow={40}
                        style={{ width: "40%" }}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </td>
                  <td>$ 1,200</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/*/Recent sales*/}
      </div>
      {/*Product summary*/}
      <Footer />
    </div>
  );
};

export default Home;
