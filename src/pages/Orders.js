import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { useStateValue } from "../StateProvider";
import Order from '../components/Order';
import { db } from "../firebase";
import "./Orders.css"

function Orders() {
    const [{ cartContents, user }, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if(user) {
            db
            .collection('users')
            .doc(user?.uid)
            .collection('orders')
            .orderBy('created', 'desc')
            .onSnapshot(snapshot => (
                setOrders(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                })))
            ))
        } else {
            setOrders([])
        }
    
      }, [user])

    return (
        <>
        <Header />
        <div className="orders">
            <h1 className="orders__title">Your Orders</h1>
            <div className='orders__order'>
                {orders?.map(order => (
                    <Order order={order} />
                ))}
            </div>
        </div>
        <Footer />
        </>
    )
}

export default Orders
