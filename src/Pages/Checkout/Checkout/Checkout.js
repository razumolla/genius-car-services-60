import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../../hooks/useServiceDetail';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';

const Checkout = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetail(serviceId);
    const [user] = useAuthState(auth);
    console.log(user.email);
    /*  const [user, setUser] = useState({
         name: 'Akbar the great',
         email: 'akbar@momo.taj',
         address: 'Tajmohol Road Md.pur',
         phone: '012233332210'
     })
     const handleAddressChange = event => {
         console.log(event.target.value);
         const { address, ...rest } = user;
         const newAddress = event.target.value;
         const newUser = { address: newAddress, ...rest }
         setUser(newUser);
         console.log(newUser);
     } */
    const handlePlaceOrder = event => {
        event.preventDefault();
        const order = {
            service: service.name,
            email: user.email,
            serviceId: serviceId,
            address: event.target.address.value,
            phone: event.target.phone.value,
        }

        axios.post('https://glacial-plains-12438.herokuapp.com/order', order)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast('Your order is booked!!!');
                    event.target.reset();
                }
            })
    }
    return (
        <div className='w-50 mx-auto'>
            <h2>Please Order: {service.name} </h2>
            <form onSubmit={handlePlaceOrder}>
                <input className='w-100 mb-2' type="text" value={user?.displayName} name="name" placeholder='name' required readOnly disabled />
                <br />
                <input className='w-100 mb-2' type="email" value={user?.email} name="email" placeholder='email' required readOnly disabled />
                <br />
                <input className='w-100 mb-2' type="text" value={service.name} name="service" placeholder='service' required readOnly />
                <br />
                <input className='w-100 mb-2' type="text" name="address" placeholder='address' autoComplete='off' required />
                <br />
                <input className='w-100 mb-2' type="text" name="phone" placeholder='phone' required />
                <br />
                <input className='btn btn-primary' type="submit" value="Place Order" />
            </form>
        </div>
    );
};

export default Checkout;