import Advertisement from '@/components/organism/advertisement/Advertisement'
import BannerCardTwo from '@/components/molecules/card/BannerCardTwo'
import PostCard from '@/components/molecules/card/PostCard'
import PageInfo from '@/components/organism/pageInfo/PageInfo'
import React, { Fragment } from 'react'

export const metadata = {
   title: 'Blog Page | MetaBlog',
   description: 'Generated by create next app',
}

const BlogListing = () => {
   return (
      <Fragment>
         {/* Page Body */}
         <main className="container mx-auto">
            <PageInfo />
            <div className="my-12">
               <BannerCardTwo />
            </div>
            <div className="my-20">
               <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item: any) => (
                     <PostCard key={item} />
                  ))}
               </div>
               <div className="flex items-center justify-center w-full mt-8">
                  <button className="btn btn-outline btn-secondary font-work px-5">
                     Load More
                  </button>
               </div>
            </div>
            <div className="mb-24">
               <Advertisement />
            </div>
         </main>
      </Fragment>
   )
}

export default BlogListing
