"use client"
import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

const RouterNavTesting = () => {
    const router = useRouter()
    function handleClick(){
        console.log('Clicked');
        router.refresh()
    }
    const pathname = usePathname()
    console.log(pathname);
    const  searchParams = useSearchParams();
    const keyword = searchParams.get("keyword");
    const category = searchParams.get("category");
    const q = searchParams.get("q");
    console.log(keyword, category, q);
  return (
    <div>

      <Link href='/' prefetch={false}>Return Home</Link><br></br>
      <button onClick={handleClick}>JayBaba</button>
    </div>
  )
}

export default RouterNavTesting
