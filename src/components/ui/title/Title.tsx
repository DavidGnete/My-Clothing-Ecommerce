import { titleFont } from '@/config/fonts';
import React from 'react'

interface Props {
    title?:string;
    subtitle?:string;
    className?: string;
}

export const Title = ({title, subtitle, className}:Props ) => {
  return (
    <div className={`mt-10 mb-0 content-center ${className}`}>
    <h1 className={`${titleFont.className} antialiased text-4xl font-semibold my-10`}>
        {title}
    </h1>

    {
        subtitle && (
            <h3 className="text-xl mb-0">{subtitle} </h3>
            
        )
        
    }
    </div>
  )
}
