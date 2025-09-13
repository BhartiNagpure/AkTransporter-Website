import { ChevronRight } from 'lucide-react'
import React from 'react';
import img from '../../assets/Bg.png';

function BannerSection({title}) {
    return (
        <div className='banner-img flex items-center'>
            <div className='max-w-7xl mx-auto '>
                <h1 className='font-poppins text-5xl text-[#FF6B00] font-bold '>{title}</h1>
                <p className='flex font-md font-medium'>Home<span> <ChevronRight /></span>{title}</p>
            </div>
        </div>
    )
}

export default BannerSection