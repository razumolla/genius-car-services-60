import React from 'react';
import google from '../../../images/social/google.png'
import facebook from '../../../images/social/facebook.png'
import github from '../../../images/social/github.png'
const SocialLogin = () => {
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-3 px-2'>OR</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            <div className=''>
                <button className='btn btn-info w-75 mx-auto d-block my-2'>
                    <img height={25} src={google} alt="" />
                    <span className='px-2'>Google Sign In </span>
                </button>
            </div>
            <div className=''>
                <button className='btn btn-info w-75 mx-auto d-block my-2'>
                    <img height={25} src={facebook} alt="" />
                    <span className='px-2'>Facebook Sign In </span>
                </button>
            </div>
            <div className=''>
                <button className='btn btn-info w-75 mx-auto d-block'>
                    <img height={25} src={github} alt="" />
                    <span className='px-2'>Github Sign In </span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;