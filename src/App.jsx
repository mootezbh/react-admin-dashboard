import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Addcategory from "./pages/categories/Addcategory";
import Categories from "./pages/categories/Categories";
import Updatecategory from "./pages/categories/Updatecategory";
import Dashboard from "./pages/dashboard/dashboard";
import Home from "./pages/dashboard/home";
import Login from "./pages/login/Login";
import Addproduct from "./pages/products/Addproduct";
import Product from "./pages/products/products";
import Updateproduct from "./pages/products/Updateproduct";
import Forgotpassword from "./pages/resetPassword/Forgotpassword";
import Signup from "./pages/signup/Signup";
import Addsubcategory from "./pages/subcategories/Addsubcategory";
import Subcategories from "./pages/subcategories/Subcategories";
import Updatesubcategory from "./pages/subcategories/Updatesubcategory";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/subcategories" element={<Subcategories />} />
            <Route path="/addsub" element={<Addsubcategory />} />
            <Route path="/addcat" element={<Addcategory />} />
            <Route path="/updatecat/:id" element={<Updatecategory />} />
            <Route path="/subcategories" element={<Subcategories />} />
            <Route path="/updatesubcat/:id" element={<Updatesubcategory />} />
            <Route path="/products" element={<Product />} />
            <Route path="/addproduct/" element={<Addproduct />} />
            <Route path="/updateproduct/:id" element={<Updateproduct />} />
          </Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/forgot" element={<Forgotpassword />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
