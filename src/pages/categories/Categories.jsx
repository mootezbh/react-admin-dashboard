/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Footer from "../../components/footer/Footer";
import category from "../../services/category";
import subcategory from "../../services/subcategory";
const Categories = () => {
  const [data, setData] = useState();
  const [sub, setSub] = useState([]);
  const listAll = () => {
    category
      .getAll()
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
    subcategory
      .getAll()
      .then((res) => {
        setSub(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleDelete = (e, id) => {
    event.preventDefault();
    Swal.fire({
      title: "delete category?",
      text: "Do you want to delete this category?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        category.deleteOne(id).catch((err) => {
          console.log(err);
        });
        setData((prev) => prev.filter((i) => i._id !== id));
        Swal.fire("Deleted!", "category has been deleted.", "success");
      }
    });
  };
  useEffect(() => {
    listAll();
  }, []);

  return (
    <div className="col-sm-9 col-xs-12 content pt-3 pl-0">
      <h5 className="mb-0">
        <strong>Categories</strong>
      </h5>
      <span className="text-secondary">
        Categories <i className="fa fa-angle-right" /> List categories
      </span>
      <div className="mt-4 mb-4 p-3 bg-white border shadow-sm lh-sm">
        {/*Order Listing*/}
        <div className="product-list">
          <div className="row border-bottom mb-4">
            <div className="col-sm-8 pt-2">
              <h6 className="mb-4 bc-header">Categories list</h6>
            </div>
            <div className="col-sm-4 text-right pb-3">
            <Link to="/addcat">
          <button className="btn btn-round btn-theme"><i className="fa fa-plus" /> Add category</button>
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
                  <th>Category</th>
                  <th style={{ width: 1 }}>Description</th>
                  <th>SubCategories</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((item) => {
                  return (
                    <tr key={item.name}>
                      <td className="align-middle">{item._id}</td>
                      <td className="align-middle">{item.name}</td>
                      <td className="align-middle">{item.description}</td>
                      <td className="align-middle">
                        {item.subcategory?.map((a) => {
                          return (
                            <span className="badge badge-success" key={a._id}>
                              {a.name}
                            </span>
                          );
                        })}
                      </td>
                      <td className="align-middle text-center">
                        <Link to={`/updatecat/${item._id}`}>
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

export default Categories;
