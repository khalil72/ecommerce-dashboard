import React, { useEffect } from 'react'
import Layout from '../../component/main/Layout'
import ProductTable from '../../component/main/Table'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProduct } from '../../redux/Reducer/products'
const Product = () => {
  const dispatch = useDispatch();
  const { product } = useSelector(state => state.product);
  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);
  // console.log(product);
  return (
    <Layout>
    <div className='container'>
     <div className='row p-5'>
      <div className='col align-self-start'>
       <h4>All Product</h4>
      </div>
      <div className='col'>
       <h4>Search Product</h4>
      </div>
      </div>
      <ProductTable  allProduct={product} />
    </div>

    </Layout>
  )
}

export default Product