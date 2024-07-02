"use client"
import React, { useState } from 'react';
import Navbaritem from './Navbaritem';

const albums = [
  { title: "Taylor Swift (2006)", param: 'taylorswift' },
  { title: "Fearless (Taylor's Version) (2021)", param: 'fearless' },
  { title: "Speak Now (Taylor's Version) (2023)", param: 'speaknow' },
  { title: "Red (Taylor's Version) (2021)", param: 'red' },
  { title: "1989 (Taylor's Version) (2023)", param: 'nineteeneightynine' },
  { title: "Reputation (2017)", param: 'reputation' },
  { title: "Lover (2019)", param: 'lover' },
  { title: "Folklore (2020)", param: 'folklore' },
  { title: "Evermore (2020)", param: 'evermore' },
  { title: "Midnights (2022)", param: 'midnights' },
  { title: "The Tortured Poets Department (2024)", param: 'thetorturedpoetsdepartment' },
];

export default function Navbar() {
  const [showAlbums, setShowAlbums] = useState(false);

  const toggleAlbums = () => {
    setShowAlbums(!showAlbums);
  };

  return (
   <div className='flex dark:bg-purple-600 bg-pink-100 p-4 lg:text-lg justify-center gap-6'>
      <div className="cursor-pointer" onClick={toggleAlbums}>
        <span className="hover:text-pink-500 font-semibold">
          Album
        </span>
       
      </div>
      {showAlbums && (
        <div className="flex flex-col gap-2">
          {albums.map(album => (
            <Navbaritem key={album.param} title={album.title} param={album.param} />
          ))}
        </div>
      )}
    </div>
  );
}






