import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    let { serviceId } = useParams();
    return (
        <div>
            <h3>Welcome to Details {serviceId}</h3>
            <div className='text-center'>
                <Link to="/checkout">
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;