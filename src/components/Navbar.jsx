import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav className='flex justify-between items-center bg-slate-800 px-8 py-3'>
                <Link className='text-white font-bold text-2xl' href='/'>Next App</Link>
                <Link className='bg-white rounded-sm p-2 text-black font-medium' href='/addTopic'>Add Topic</Link>
            </nav>
        </div>
    );
};

export default Navbar;