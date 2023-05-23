/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Footer from "../../components/footer/Footer";
import provider from "../../services/provider";
const Pending = () => {
  const [data, setData] = useState();
  const listAll = () => {
    provider
      .getAll()
      .then((res) => {
        setData(res.data.data);
        setData((prev) => prev.filter((i) => i.accepted !== true));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleDelete = (e, id) => {
    e.preventDefault();
    Swal.fire({
      title: "delete provider?",
      text: "Do you want to delete this provider?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        provider.deleteOne(id).catch((err) => {
          console.log(err);
        });
        setData((prev) => prev.filter((i) => i._id !== id));
        Swal.fire("Deleted!", "provider has been deleted.", "success");
      }
    });
  };
  const handleaccept = (e, id) => {
    e.preventDefault();
    provider.accept({ id: id }).then((res) => {
      console.log(res);
      Swal.fire("Accepted!", "provider has been accepted.", "success");
      setData((prev) => prev.filter((i) => i._id !== id));
    });
  };
  useEffect(() => {
    listAll();
  }, []);

  return (
    <div className="col-sm-9 col-xs-12 content pt-3 pl-0">
      <h5 className="mb-0">
        <strong>Pending providers</strong>
      </h5>
      <span className="text-secondary">
        Providers <i className="fa fa-angle-right" /> List pending providers
      </span>
      <div className="mt-4 mb-4 p-3 bg-white border shadow-sm lh-sm">
        {/*Order Listing*/}
        <div className="product-list">
          <div className="row border-bottom mb-4">
            <div className="col-sm-8 pt-2">
              <h6 className="mb-4 bc-header">Pending Providers list</h6>
            </div>
          </div>
          <div className="table-responsive product-list">
            <table
              className="table table-bordered table-striped mt-3"
              id="productList"
            >
              <thead>
                <tr>
                  <th style={{ width: 1 }}>ID</th>
                  <th>name</th>
                  <th>company</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((item) => {
                  return (
                    <tr key={item.name}>
                      <td className="align-middle">{item._id}</td>
                      <td className="align-middle">{item.name}</td>
                      <td className="align-middle">{item.company_name}</td>
                      <td className="align-middle text-center">
                        <Link to={`/updateprovider/${item._id}`}>
                          <button
                            className="btn btn-success"
                            onClick={(e) => handleaccept(e, item._id)}
                          >
                            <i className="fa fa-solid fa-check" />
                          </button>
                        </Link>
                        <button
                          className="btn btn-danger"
                          onClick={(e) => handleDelete(e, item._id)}
                        >
                          <i className="fas fa-trash" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        {/*/Order Listing*/}
      </div>
      {/*Footer*/}
      <Footer />
    </div>
  );
};

export default Pending;
