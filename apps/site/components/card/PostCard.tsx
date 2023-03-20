import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PostCard = () => {
   return (
      <div className="card w-fit p-4 border border-base-200 rounded-xl">
         <figure>
            <Image
               src="/blog1.png"
               alt="email"
               width={360}
               height={240}
               priority={true}
            />
         </figure>
         <div className="card-body py-6 px-2 font-medium text-sm">
            <span className="btn no-animation hover:bg-primary hover:text-primary-content bg-primary/5 border-0 text-primary text-sm px-3 py-2 min-h-fit h-fit rounded-md w-fit capitalize">
               Technology
            </span>
            <Link
               href="/"
               className=" text-neutral font-semibold text-lg md:text-xl lg:text-2xl mt-2"
            >
               The Impact of Technology on the Workplace: How Technology is
               Changing
            </Link>
            <div className="mt-5 flex items-center gap-5">
               <div className=" flex items-center gap-3">
                  <div className="avatar">
                     <div className="w-9 rounded-full">
                        <img src="/image1.png" alt={`avatar_image`} />
                     </div>
                  </div>
                  <Link
                     href="/"
                     className=" text-secondary-focus text-base font-medium hover:text-primary transition hover:duration-300"
                  >
                     Jason Francisco
                  </Link>
               </div>
               <p className="text-secondary-focus text-base">August 20, 2022</p>
            </div>
         </div>
      </div>
   )
}

export default PostCard
