"use client"
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
export default function Navbaritem({ title, param }) {
  const searchparam=useSearchParams();
  const genre=searchparam.get('genre');
    return (
        <div>
        <Link
          className={`hover:text-pink-500 
            font-semibold
            ${genre === param ? 'underline underline-offset-8 decoration-pink-400 rounded-lg'
                 : ''}`}
          href={`/?genre=${param}`}
        >
          {title}
        </Link>
      </div>
      
  )
}
