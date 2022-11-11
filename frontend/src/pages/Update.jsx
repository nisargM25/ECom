import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Update = () => {

    const [product, setProduct] = useState({
        p_name: "",
        p_desc: "",
        p_image: "",
        p_price: null,
        cat_id: 1,
        v_id: 1
    });

    const navigate = useNavigate()
    const location = useLocation()
    const pid = location.pathname.split('/')[2];
    const handleChange = (e) => {
        setProduct(prev => ({ ...product, [e.target.name]: e.target.value }));

    };

    const handleClick = async e => {
        e.preventDefault()
        try {
            await axios.put("http://localhost:8800/updateProduct/" + pid, product)

            navigate("/Home")
        } catch (err) {
            console.log(err)
        }

    }
    console.log(product)
    return (
        <div className='form'>
            <h1>Update the Product</h1>
            <Form>
                <Form.Group className="mb-3" >
                    <Form.Control type="text" onChange={handleChange} name='p_name' placeholder="Enter Product Name" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Control as="textarea" rows={3} onChange={handleChange} name='p_desc' placeholder="Enter Product Description" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control type="number" onChange={handleChange} name='p_price' placeholder="Enter Product Price" />
                </Form.Group>
                <Form.Select onChange={handleChange} className="mb-3" name='cat_id' >
                    <option disabled>Open this select menu</option>
                    <option value="1">Mobile</option>
                    <option value="2">Laptop</option>
                    <option value="3">Accessories</option>
                </Form.Select>
                <Form.Group className="mb-3" >
                    <Form.Control type="file" onChange={handleChange} name='p_image' placeholder="Upload Image" />
                </Form.Group>
                <Button variant="outline-dark" onClick={handleClick}>Update Product</Button>
            </Form>

        </div>
    )
}

export default Update

