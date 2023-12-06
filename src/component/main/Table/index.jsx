import { map } from 'lodash'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteProduct, fetchProductId } from '../../../redux/Reducer/products';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const ProductTable = ({allProduct}) => {
  const dispatch = useDispatch();
  const [confirmDelete , setConfirmDelete] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleDelete = (productId) => {
  //  dispatch(deleteProduct(productId));
  setConfirmDelete(productId);
  //  console.log(productId);
  }
  const handleConfirmDelete = () => {
    // Dispatch the deleteProduct action with the confirmed product ID
    dispatch(deleteProduct(confirmDelete));
    // Reset the confirmation state
    setConfirmDelete(null);
    toast.success('Successfully deleted');
  };
  const handleCancelDelete = () => {
    // Reset the confirmation state
    setConfirmDelete(null);
  };
  const handleEdit = (productId)=>{
  navigate(`/dashbaord/product/${productId}`);
  }
  const handleView =(productId) => {
    navigate(`/dashboard/product/singleproduct/${productId}`);
  }
  const filteredProducts = Array.isArray(allProduct)
  ? allProduct.filter((item) => {
      const matchesSearchTerm =
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesSearchTerm;
    })
  : [];
console.log(filteredProducts)

  return (
    <>
    <input
    type="text"
    placeholder="Search by Product by name ,category"
    className='form-control'
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />
    <table className='table table-bordered full-width'>
      <thead className='text-center'>
        <tr>
        <th>
            id
          </th>
          <th>
            Name
          </th>
          <th>
            Category
          </th>
          <th>
            Price
          </th>
          <th>
            Action
          </th>
        </tr>
      </thead>
      <tbody className=' text-justify'>
      {map(filteredProducts, (item ,index)=>(
        <tr index={index.id}>
         <td>{item?.id}</td>
         <td>{item?.title.slice(0,60)}</td>
         <td>{item?.category}</td>
         <td>{item?.price}$</td>
         <td >
         <button className='btn btn-danger mx-2' onClick={() => handleDelete(item.id)}>Delete</button>
         <button className='btn btn-success mx-2' onClick={() => handleEdit(item.id)}>Edit</button>
        //  <button className='btn btn-warning mx-2'>Cart</button>
         <button className='btn btn-primary mx-2'  onClick={() => handleView(item.id)}>view</button>
         </td>
        </tr>
      ))}
      </tbody>
      {confirmDelete !== null && (
        <div className="modal" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirm Delete</h5>
                <button type="button" className="btn-close" onClick={handleCancelDelete}></button>
              </div>
              <div className="modal-body">
                Are you sure you want to delete this product?
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCancelDelete}>Cancel</button>
                <button type="button" className="btn btn-danger" onClick={handleConfirmDelete}>Delete</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </table>
    </>
    
  )
}
// eslint-disable-next-line no-lone-blocks

export default ProductTable