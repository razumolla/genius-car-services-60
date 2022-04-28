import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageTitle from '../../Shared/PageTitle/PageTitle';

const About = () => {
    return (
        <div>
            <PageTitle title='About'></PageTitle>
            <h3>This is about us</h3>
        </div>
    );
};

export default About;