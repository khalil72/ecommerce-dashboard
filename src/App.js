import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Login from './screen/Auth/Login';
import Dashbaord from './screen/Dashboard/Dashbaord';
import Product from './screen/Dashboard/Product';
import 'react-toastify/dist/ReactToastify.css';
import Update from './screen/Dashboard/Products/Update';
import SingleProduct from './screen/Dashboard/Products/SingleProduct';
import Getdata from './screen/Dashboard/APi/Getdata';
import Createapi from './screen/Dashboard/APi/Createapi';

function App() {
  // const  user  = JSON.parse(sessionStorage.getItem('token'));
  return (
    <div>
      <Routes>
      <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />}  />
        <Route path="/dashboard" element={<Dashbaord />} />
        <Route path="/dashboard/product" element={<Product />} />
        <Route path="/dashbaord/product/:id" element={<Update />}/>
        <Route path="/dashboard/product/singleproduct/:id" element={<SingleProduct />} />
        <Route path="/dashbaord/api/getdata" element={<Getdata />} />
        <Route path="/dashbaord/api/createdata" element={<Createapi />} />
      </Routes>
    </div>
  );
}

export default App;
