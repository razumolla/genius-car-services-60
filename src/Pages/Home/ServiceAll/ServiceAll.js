import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './ServiceAll.css';
// import repair1 from '../../../images/repair1.png'

// const services = [
//     { id: 1, name: 'oil change', price: 100, description: '', img: 'https://i.ibb.co/0MqcrpY/repair1.png' },
// ]


const ServiceAll = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div className='container'>
            <div className="row">
                <h1 className=' text-primary text-center mt-5'> Our Services</h1>
                <div className="services-container">
                    {
                        services.map(service => <Service
                            key={service.id}
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