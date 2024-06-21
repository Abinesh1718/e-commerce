import React, { useCallback, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './App.css'

import { useDispatch, useSelector } from 'react-redux';
import { add } from './slice/cartSlice';
import { useNavigate } from 'react-router-dom'

import { getProducts } from './slice/productSlice'
import Cart from './cart';


function ProductComponant() {
    let dispatch = useDispatch()
    const navigate = useNavigate()
    const { data: products, status } = useSelector(state => state.product)
    const [count, setcount] = useState(0)

    // const [products, setproducts] = useState([])

    const addCount = useCallback(() => {
        setcount(prevCount => prevCount + 1)
    }, [count])

    useEffect(() => {
        dispatch(getProducts())


    }, [])

    const HandleFunction = (product) => {
        dispatch(add(product))

    }
    const cartItems = useSelector(state => state.carts)

    // setcards(cartItems)


    if (status === 'Loading') {
        return <p style={{ height: '50px', fontSize: "50px", alignContent: 'center', color: "black", }}>Loading.........</p>
    }


    if (status === 'Error') {
        return <p style={{ height: '50px', fontSize: "50px", alignContent: 'center', color: "black", backgroundColor: 'red' }} >Sorry Internal server Problem !!!!!!!!!!!!!!!!</p>
    }



    return (
        <div >
            <h2>Productss</h2>
            {/* <Button onClick={addCount}>Count self  {count}</Button> */}
            <br></br>
            
            <div className='container'>
                <div className="product-list">
                    {products.map((data, index) => (
                        <div key={index} className="product-item">
                            <Card style={{ width: '18rem' }}>
                                <div className='text-center'>
                                    <Card.Img variant="top" style={{ width: '100%', height: '130px' }} src={data?.image} />
                                </div>
                                <Card.Body>
                                    <Card.Title>{data.title}</Card.Title>
                                    <Card.Text>
                                        INR: {data.price}
                                    </Card.Text>
                                    <Button onClick={() => HandleFunction(data)} className='button' style={{ cursor: 'pointer', width: '50%', height: '40px' }} variant="primary">Add to Cart</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
                <div className='rightcontainer'>
                    <Button onClick={() => navigate('cart')} className='button' style={{ cursor: 'pointer', width: '50%', height: '40px', margin: 20 }} variant="primary">Cart page</Button>

                    <Cart />

                </div>
            </div>
        </div>
    )
}



export default ProductComponant