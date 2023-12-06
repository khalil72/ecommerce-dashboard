import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import Layout from '../../../component/main/Layout';
import { fetchProductId } from '../../../redux/Reducer/products';

const SingleProduct = () => {
    const { id } = useParams();
    // console.log(id);
    const { selectedProduct } = useSelector((state) => state.product);
    const dispatch = useDispatch();
    // console.log(selectedProduct);
    useEffect(()=>{
        dispatch(fetchProductId(id))
    },[dispatch ,id])
  return (
    <Layout>
    <div className='container mt-5'>
     <div className='card w-75 mx-auto justify-content-center p-3 shadow-sm'>
       <h2> {selectedProduct?.title}</h2>
       <hr />
       <div className='row row-cols-3 mt-3 mb-0'>
         <div className='col'>
         <p>
         <strong>Category:</strong>
          &nbsp;&nbsp; {selectedProduct?.category}
          </p>
         </div>
         <div className='col'>
         <p>
         <strong>Price:</strong>
          &nbsp;&nbsp; {selectedProduct?.price}
          </p>
         </div>
         <div className='col'>
          <p>
            <strong>Rating:</strong>
            &nbsp;&nbsp; {selectedProduct?.rating?.rate}
          </p>
         </div>
         
       </div>
       <hr />
       <div className='row row-cols-2'>
            <div className='cols'>
            <strong>Description</strong>
            <p>{selectedProduct?.description}</p>
            </div>
            <div className='cols'>
            <strong>Image</strong><br/>
            <img src={selectedProduct?.image} alt='image' className='w-100 object-fit-contain' style={{width:'100%' ,height:'200px' ,objectFit:'contain'}}/>
            </div>
       </div>
       
       </div>
       </div>
    </Layout>
  )
}

export default SingleProduct