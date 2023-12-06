import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Layout from '../../../component/main/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductId, updateProduct } from '../../../redux/Reducer/products';
import { toast } from 'react-toastify';

const Update = () => {
    const { id } = useParams(); 
    // console.log(id);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { selectedProduct } = useSelector((state) => state.product);
    // console.log("selected product", selectedProduct);
    const [formData, setFormData] = useState({
        title: '',
        category: '',
        price:'',
        description:'',
       
    });
    useEffect(() => {
        // console.log("Fetching product with ID:", id);
        dispatch(fetchProductId(id));
    }, [dispatch, id]);

    useEffect(() => {
        // console.log("Selected Product:", selectedProduct);
        if (selectedProduct) {
            setFormData({
                title: selectedProduct.title,
                category: selectedProduct.category,
                price: String(selectedProduct.price),
                description:selectedProduct.description,
                // image:selectedProduct.image
            });
            // console.log('Fetched Product Details:', selectedProduct);
        }
    }, [selectedProduct]);

    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(updateProduct({ id, ...formData }));
        navigate('/dashboard/product');
        console.log('product succeesfull')
        toast.success('successfully update record');
        
    }
    return (
        <Layout>
   
        <div className=' mt-5 w-75 mx-auto justify-content-center align-items-center vh-100'>
        <h3 className='fs-5 mb-3'>Product Name:&nbsp; {formData.title}</h3>
            <div className='card shadow-sm p-3'>
                <form onSubmit={handleSubmit}>
                <div className="mb-3">
                <label htmlFor="title" className="form-label">Title:</label>
                <input
                    type="text"
                    name='title'
                    value={formData.title}
                    className='form-control'
                    id="title"
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Category:</label>
                <input
                    type="text"
                    name='category'
                    value={formData.category}
                    className='form-control'
                    id="title"
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="price" className="form-label">Price:</label>
                <input
                    type="text"
                    name='price'
                    value={formData.price}
                    className='form-control'
                    id="price"
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description:</label>
                <textarea
                    name='description'
                    value={formData.description}
                    className='form-control'
                    rows={4}
                    id="description"
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
             </div>
             <button type='submit' className='btn btn-primary btn-lg mt-3 rounded-2'> Update</button>
                </form>
            </div>
        </div>
    </Layout>
    )
}

export default Update