import Image from 'next/image'
import React from 'react'

const NewsLetter = () => {
   return (
      <div className="w-full">
         <div className="bg-base-100 py-8 px-9 ">
            <h5 className="text-center text-xl font-semibold text-secondary">
               Weekly Newsletter
            </h5>
            <h4 className=" mt-2 text-base text-center text-base-content">
               Get blog articles and offers via email
            </h4>
            <div className="relative">
               <input
                  placeholder="Your Email"
                  type="email"
                  className="px-4 py-2 border border-base-content w-full outline-none mt-7 text-base placeholder:text-base bg-base-100 "
               />{' '}
               <br />
               <Image
                  src="/email.png"
                  alt="email"
                  width={18}
                  height={14}
                  priority={true}
                  className=" absolute  right-4 top-10"
               />
            </div>
            <button className="bg-primary py-3 text-center font-medium w-full rounded-md mt-2 text-white">
               {' '}
               Subscribe
            </button>
         </div>
      </div>
   )
}

export default NewsLetter
