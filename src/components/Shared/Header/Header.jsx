import Image from 'next/image';
import React from 'react';
import newsLogo from '../../../assets/The Dragon News.png'
import { getCurrentDate } from '@/utilities/getCurrentDate';

const Header = () => {
    const date = getCurrentDate()
    return (
        <div className='text-center p-10'>
            <Image className='mx-auto' src={newsLogo} width={600} height={200} alt='dragon news,best news website,new portal,lates news' />
            <p className='text-neutral-800'>Journalist Without Fear or Favour</p>
            <p className='text-neutral-800'>{date}</p>
        </div>
    );
};

export default Header;