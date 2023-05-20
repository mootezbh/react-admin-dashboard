/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Footer from "../../components/footer/Footer";
import subcategory from "../../services/subcategory";
const Subcategories = () => {
  const [data, setData] = useState();
  const listAll = () => {
    subcategory
      .getAll()
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleDelete = (e, id) => {
    e.preventDefault();
    Swal.fire({
      title: "delete subcategory?",
      text: "Do you want to delete this subcategory?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        subcategory
      .deleteOne(id)
      .then(() => {
        console.log("deleted");
      })
      .catch((err) => {
        console.log(err);
      });
    setData((prev) => prev.filter((i) => i._id !== id));
        Swal.fire("Deleted!", "subcategory has been deleted.", "success");
      }
    });
  }
  useEffect(() => {
    listAll();
  }, []);

  return (
    <div className="col-sm-9 col-xs-12 content pt-3 pl-0">
      <h5 className="mb-0">
        <strong>Sub Categories</strong>
      </h5>
      <span className="text-secondary">
        subcategories <i className="fa fa-angle-right" /> List subcategories
      </span>
      <div className="mt-4 mb-4 p-3 bg-white border shadow-sm lh-sm">
        {/*Order Listing*/}
        <div className="product-list">
          <div className="row border-bottom mb-4">
            <div className="col-sm-8 pt-2">
              <h6 className="mb-4 bc-header">subcategories list</h6>
            </div>
            <div className="col-sm-4 text-right pb-3">
            <Link to="/addsub">
          <button className="btn btn-round btn-theme"><i className="fa fa-plus" /> Add subcategory</button>
          </Link>
        </div>
          </div>
          <div className="table-responsive product-list">
            <table
              className="table table-bordered table-striped mt-3"
              id="productList"
            >
              <thead>
                <tr>
                  <th>ID</th>
                  <th>name</th>
                  <th>Category</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((item) => {
                  return (
                    <tr key={item.name}>
                      <td className="align-middle">{item._id}</td>
                      <td className="align-middle">{item.name}</td>
                      <td className="align-middle">
                        
                            <span className="badge badge-success">
                              {item.category.name}
                            </span>
                        
                      </td>
                      <td className="align-middle text-center">
                        <Link to={`/updatesubcat/${item._id}`}>
                          <button className="btn btn-success">
                            <i className="fa fa-pencil" />
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

export default Subcategories;
