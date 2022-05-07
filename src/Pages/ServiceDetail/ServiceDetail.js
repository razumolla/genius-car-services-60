import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useServiceDetail from '../../hooks/useServiceDetail';

const ServiceDetail = () => {
    let { serviceId } = useParams();
    const [service] = useServiceDetail(serviceId);

    return (
        <div>
            <h3>You are about to book:  {service.name}</h3>
            <div className='text-center'>
                <Link to={`/checkout/${serviceId}`}>
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;