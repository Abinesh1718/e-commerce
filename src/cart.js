import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { remove } from './slice/cartSlice';

function Cart() {
    const [cards, setcards] = useState([])
    const cartItems = useSelector(state => state.carts)
    const dispatch = useDispatch()

    useEffect(() => {
        setcards(cartItems);
    }, [cartItems]); 

    const handleREmove = (data) => {
        dispatch(remove(data.id))
    }


    return (
        <div className="product-list-cart">

            {cards.length != 0 && cards?.map((data, index) => (
                <div key={index} className="product-item">
                    <Card style={{ width: '18rem' }}>
                        <div className='text-center'>
                            <Card.Img variant="top" style={{ width: '100%', height: '130px' }} src={data?.image} />
                        </div>
                        <Card.Body>
                            <Card.Title>{data.title}</Card.Title>
                            <Card.Text>
                                {/* {data.description} */}
                                INR: {data.price}
                            </Card.Text>
                            <Button onClick={() => handleREmove(data)} className='removebutton' style={{ cursor: 'pointer', width: '50%', height: '40px' }} variant="primary">Remove</Button>
                        </Card.Body>
                    </Card>
                </div>
            ))}
        </div>
    )
}

export default Cart