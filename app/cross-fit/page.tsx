'use client'
import Image from "next/image";
import CrossFit from "../../img/crossfit.jpeg"
import CrossFit2 from "../../img/crossfit2.jpeg"


export default function GroupSessions() {
  return (
    <div className="">
      <div className="w-full sm:hidden">
        <Image
          src={CrossFit2}
          alt="crossfit2"
          className=''
        />
      </div>
      <div className="text-center font-montserrat font-light text-lg pt-4 sm:text-3xl sm:py-8 flex flex-col">
        <p>CrossFit</p>
      </div>
      <div className="flex mx-2">
        <div className="py-4 px-4 sm:px-8 font-montserrat font-extralight text-md sm:text-xl text-justify flex flex-col gap-4">
          <p>Weight training is fabulous and important for women as there are so many benefits to it; muscular strength and endurance, cardio fitness, bone health improvement, variety of movements and equipment and the confidence and buzz that it gives you! My classes out of CrossFit Stags and Does and AlphaFit in Milton aim to introduce, or reintroduce women to weight and strength training in a safe and inclusive environment.</p>
          <p>We use kettlebells, dumbbells, barbells and all the rest of the equipment the gym has to offer, including boxes, rigs, bands, steps and benches. The classes are hugely varied and all exercises modified to your level of fitness, stage in life, injuries and enthusiasm. We are always aiming for a fun atmosphere and a great workout!</p>
          <p>Classes are 45 minutes long and £10 per class as part of a block. We run alongside the school terms in blocks of 6 or 7 weeks at a time.</p>
          <p className="sm:pt-8 text-lg sm:text-3xl font-light">Locations and Times:</p>
          <div className="sm:flex sm:justify-between text-md sm:text-xl">
            <div>
              <p className="font-light text-lg sm:text-2xl">AlphaFit, Milton</p>
              <p>Tuesdays, 7:45pm</p>
              <p>Located on the road towards Milton Country</p>
              <p>Park, behind the Dulux building.</p>
            </div>
            <div>
              <p className="font-light text-lg sm:text-2xl">CrossFit Stags and Does, Milton</p>
              <p>Wednesdays, 1:15pm </p>
              <p>Also located on the industrial estate, opposite </p>
              <p>Milton Tesco.</p>
            </div>
          </div>
        </div>
        <div className="hidden w-full py-4 px-8 sm:block">
          <Image
            src={CrossFit}
            alt="crossfit"
            className=''
          />
        </div>
      </div>

      <div className="font-montserrat font-light text-xl sm:pt-8">
        <div className="w-full text-center p-4">
          <p className="">Join us on Facebook!</p>
        </div>
        <div className="w-full flex flex-col place-items-center">
          <div>
            <iframe 
            className=""
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FCoachNicolaOstler&width=500&height=2000&small_header=true&hide_cover=false&show_facepile=false&appId" 
            height="100%"
            width="100%"
            allowFullScreen={true} 
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"/>
          </div>
        </div>
      </div>
    </div>
  )
}