import React from 'react';
import { Link } from 'react-router-dom';
import Logo from 'components/header/logo';

const Index = () => {
    return (
        <div className='bg-light-background h-screen flex flex-col items-center justify-center w-full'>
            <Logo/>
            <h1 className='text-8xl font-bold'>Error occurs</h1>
            <h6 className='text-lg fontRegular'>Back to <span><Link className='hover:text-light-logo cursor-pointer' to='/'>Homepage</Link></span></h6>
        </div>
    )
}

export default Index;
