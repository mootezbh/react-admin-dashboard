/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Swal from "sweetalert2"
import Footer from "../../components/footer/Footer"
import product from "../../services/product"


const Product = () => {
    const [data, setData] = useState()
    const getData = () => {
        product.getAll().then((res) => {
            setData(res.data.data);
          })
          .catch((err) => {
            console.log(err);
          });
    }
    const handleDelete = (e, id) => {
        e.preventDefault();
        Swal.fire({
          title: "Delete product?",
          text: "Do you want to delete this product?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            product
          .deleteOne(id)
          .catch((err) => {
            console.log(err);
          });
        setData((prev) => prev.filter((i) => i._id !== id));
            Swal.fire("Deleted!", "Your product has been deleted.", "success");
          }
        });
      };
    useEffect(() => {
      getData();
    }, [])
    
  return (
    <div className="col-sm-9 col-xs-12 content pt-3 pl-0">
  <h5 className="mb-0"><strong>Products</strong></h5>
  <span className="text-secondary">Product <i className="fa fa-angle-right" /> products list</span>
  <div className="mt-4 mb-4 p-3 bg-white border shadow-sm lh-sm">
    {/*Product Listing*/}
    <div className="product-list">
      <div className="row border-bottom mb-4">
        <div className="col-sm-8 pt-2"><h6 className="mb-4 bc-header">Product list</h6></div>
        <div className="col-sm-4 text-right pb-3">
            <Link to="/addproduct">
          <button className="btn btn-round btn-theme"><i className="fa fa-plus" /> Add product</button>
          </Link>
        </div>
      </div>
      <div className="table-responsive product-list">
        <table className="table table-bordered table-striped mt-3" id="productList">
          <thead>
            <tr>
              <th width="6%">Image</th>
              <th>Product name</th>
              <th>Amount</th>
              <th>Stock</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{data?.map((item) => {
            return(
                <tr>
                    
              <td className="align-middle">
                {item.gallery.map((img) => {return(
                    <img src={"http://localhost:8000/" + img.name} width="100px" alt />
                )})}
                </td>
              <td className="align-middle">
                <h6><strong>{item.name}</strong></h6>
                <p>{item.description}</p>
              </td>
              <td className="align-middle">{item.price}</td>
              <td className="align-middle"><span className="text-danger">{item.quantity}</span></td>
              <td className="align-middle text-center">
               <Link to={`/updateproduct/${item._id}`}> <button className="btn btn-link text-theme p-1"><i className="fa fa-pencil" /></button></Link>
                <button className="btn btn-link text-danger p-1" onClick={(e) => {handleDelete(e, item._id)}}><i className="fas fa-trash" /></button>
              </td>
            </tr>
            )
          })}
            
          </tbody>
        </table>
      </div>
    </div>
    {/*/Product Listing*/}
  </div>
  <Footer />
</div>

        

  )
}

export default Product