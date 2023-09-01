'use client'
import HomeDesktop from "@/components/homeDesktop";
import HomeMobile from "@/components/homeMobile";


export default function Home() {
  return (
    <main>
      <Md/>
    </main>
  )
}

function Md() {
  return (
    <div>
      <div className='hidden md:block'>
        <HomeDesktop/>
      </div>
      <div className="block md:hidden">
        <HomeMobile />
      </div>
    </div>
  )
}