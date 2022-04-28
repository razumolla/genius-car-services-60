import React from 'react';
import PageTitle from '../../../Shared/PageTitle/PageTitle';
import Banner from '../Banner/Banner';
import Experts from '../Experts/Experts';
import ServiceAll from '../ServiceAll/ServiceAll';

const Home = () => {
    return (
        <>
            <PageTitle title='Home'> </PageTitle>
            <Banner></Banner>
            <ServiceAll></ServiceAll>
            <Experts> </Experts>
        </>
    );
};

export default Home;