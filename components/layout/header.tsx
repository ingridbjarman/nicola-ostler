'use client'
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import BurgerMenu from "./burgerMenu";
import Monogram from "../../img/NicolaMontserrat.png"

const links = [
  { name: 'Home', href: '/' },
  { name: 'Group Sessions', href: '/group-sessions' },
  { name: 'CrossFit', href: '/cross-fit' },
  { name: 'Menopause Support', href: '/menopause' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {

return (
  <header>
    <Md />
  </header>
);

}

function Md() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  return (
    <div className='px-8 pt-4'>
      <div className="grid grid-cols-6">
        <div className='col-start-2 col-span-4 flex flex-col grid place-content-center'> 
          <div>
            <Link href='/' className="grid place-content-center">
              <Image
                src={Monogram}
                alt="monogram"
                width={250}
                height={250}
                className="flex h-auto w-40 sm:h-auto sm:w-64"
              />
            </Link>
          </div>
          <div className='hidden sm:block'>
            {links.map((link, index) => <Link key={index} href={link.href} className='p-3 font-montserrat font-extralight text-2xl hover:underline'>{link.name}</Link>)}
          </div>
          <div className="block sm:hidden flex place-content-center">
            <BurgerMenu />
          </div>
        </div>
      </div>
    </div>
  )
}
