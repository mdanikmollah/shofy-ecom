import Link from 'next/link';
import React from 'react'
import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { twMerge } from 'tailwind-merge';

const linksData = [
    {
        icon: <FaGithub/>, 
        href: "https://github.com/"
    },
    {
        icon: <FaFacebook/>, 
        href: "https://github.com/"
    },
    {
        icon: <FaYoutube/>, 
        href: "https://github.com/"
    },
    {
        icon: <FaLinkedin/>, 
        href: "https://github.com/"
    },
    {
        icon: <FaEnvelope/>, 
        href: "https://github.com/"
    },
];

const SocialLink = ({className,iconStyle} : { className?:string,iconStyle?:string }) => {
  return (
    <div className={twMerge('text-xl py-2 text-white/20 flex items-center gap-x-2',className)}>
        {linksData?.map((item,index)=>(
            <Link 
             key={index} 
             href={item?.href} 
             target='blank' 
             className={twMerge('border border-white/20 inline-flex p-2 rounded-full hover:text-skyColor hover:border-skyColor duration-300 cursor-pointer',iconStyle)}>
                { item?.icon }
            </Link>
        ))

        }
    </div>
  )
}

export default SocialLink