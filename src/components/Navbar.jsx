import React from 'react'
import Navbaritem from './Navbaritem'


export default function Navbar() {
  return (
    <div className='flex dark:bg-pink-600 bg-pink-100 p-4 lg:text-lg justify-center gap-6'>
   <Navbaritem title='Trending' 
   param='fetchTrending' />
   
   <Navbaritem title='Top Rated' 
   param='fetchToprated' />

    </div>
  )
}
