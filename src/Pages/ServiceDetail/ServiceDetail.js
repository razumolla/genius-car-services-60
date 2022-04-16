import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
    let { serviceId } = useParams();
    return (
        <div>
            <h3>Welcome to Details {serviceId}</h3>
        </div>
    );
};

export default ServiceDetail;