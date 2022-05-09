import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './ServiceAll.css';

const ServiceAll = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://glacial-plains-12438.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div id="services" className='container'>
            <div className="row">
                <h1 className=' text-primary text-center mt-5'> Our Services</h1>
                <div className="services-container">
                    {
                        services.map(service => <Service
                            key={service._id}
                            service={service}
                        >
                        </Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ServiceAll;