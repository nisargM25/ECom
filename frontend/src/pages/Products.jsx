import React, { useContext } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import { AuthContext } from "../context/authContext";


const Products = () => {
    const { currentUser } = useContext(AuthContext);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.get(`http://localhost:8800/api/product/${currentUser.v_id}`);
                setProducts(res.data);
            }
            catch (err) {
                console.log(err)
            }
        }
        fetchProducts();
    })
    const setToLocalStorage = (p_name,p_desc,p_price,p_image,cat_id) => {
        localStorage.setItem("name", p_name);
        localStorage.setItem("desc", p_desc);
        localStorage.setItem("price", p_price);
        localStorage.setItem("image", p_image);
        localStorage.setItem("cat", cat_id);
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8800/api/product/${id}`);
            window.location.reload();
        } catch (error) {
            console.log(error)
        }
    }
  
    return (

        <div className='Top'>

            <Card>
                <Card.Header><h2>Products</h2></Card.Header>
            </Card>
            <div className="products">
                {
                    products.length > 0 ? (
                        products.map(product => (
                            <div className='singleProduct' key={product.p_id}>
                                <Card style={{ width: '45rem' }}>
                                    <Card.Body>
                                        <Card.Title>{product.p_name}</Card.Title>
                                        <div className="gap-1">
                                            <Button variant="outline-dark" className="delete btnP" onClick={() => handleDelete(product.p_id)}>Delete</Button>
                                            <Link to={`/vendor/update/${product.p_id}`}>
                                                <button  className="Update btnP btn btn-outline-dark"
                                                    onClick={()=>setToLocalStorage(
                                                        product.p_name,
                                                        product.p_desc,
                                                        product.p_price,
                                                        product.p_image,
                                                        product.cat_id
                                                    )}
                                                >Update</button> </Link>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))) : (<Card style={{ width: '45rem' }}>
                            <Card.Body><h3> No Product Added, Add Product</h3></Card.Body>
                        </Card>)
                }

            </div>

        </div>
    )
}

export default Products