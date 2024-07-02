"use client"
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
export default function AlbumItem({ title, param }) {
  const searchParams = useSearchParams()
  const album = searchParams.get('album')
  
  return (
    <div>
      <Link
        className={`hover:text-pink-500 
          font-semibold
          ${album === param ? 'underline underline-offset-8 decoration-pink-400 rounded-lg' : ''}`}
        href={`/${param}`}
      >
        {title}
      </Link>
    </div>
  )
}
