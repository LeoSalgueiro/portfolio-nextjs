'use client'

import Navbar from '../components/navbar/Navbar'
import Image from 'next/image'
import Counter from '../counter'
import BannerCarousel from '../components/complementos/BannerCarousel'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <Navbar />

     <div>
       <section>
         <BannerCarousel/>
       </section>
     </div>

    </main>
  )
}
