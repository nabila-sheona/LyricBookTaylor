// D:\sophomore\sophomore summer\ts\taylorswift\src\pages\page.js

import React from 'react'
import AlbumItem from '../app/AlbumItem'

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
]

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Taylor Swift Albums</h1>
      <div className="flex flex-col gap-2">
        {albums.map(album => (
          <AlbumItem key={album.param} title={album.title} param={album.param} />
        ))}
      </div>
    </div>
  )
}
