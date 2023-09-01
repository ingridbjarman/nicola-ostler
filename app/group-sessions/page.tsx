'use client'
import Image from "next/image";
import BuggyBootcamp from "../../img/buggyBootcamp.jpeg"


export default function GroupSessions() {
  return (
    <div className="">
      <div className="w-full sm:hidden">
        <Image
          src={BuggyBootcamp}
          alt="buggyBootcamp"
          className=''
        />
      </div>
      <div className="text-center font-montserrat font-light text-lg pt-4 sm:text-3xl sm:py-8 flex flex-col">
        <p>Strength and Cardio classes</p>
      </div>
      <div className="flex mx-2">
        <div className="py-4 px-4 sm:px-8 font-montserrat font-extralight text-md sm:text-xl text-justify flex flex-col gap-4">
          <p>My strength and cardio fitness classes are aimed at women at all ages and stages. These include prenatal, postnatal, peri and post menopausal, post injury, and ladies returning to exercise after months and sometimes years of not exercising. </p>
          <p>The classes are very varied and I include exercises that form a combination of mobility, flexibility and importantly strength and cardio. All exercises can be modified for you specifically so that you get a safe and supported workout. </p>
          <p> We use resistance bands, body weight and I will also bring equipment for a circuit style class sometimes too. This will include weighted bars, kettlebells and dumbbells.  It would be great if you could please bring a yoga mat for floor work but don't worry if you can’t get one immediately, I can lend you one.</p>
          <p>Classes are £8 each as part of a block and are bookable in advance. The blocks run alongside term times as so many of us have family commitments during the holidays.</p>
          <p className="sm:pt-8 text-lg sm:text-3xl font-light">Locations and Times:</p>
          <div className="sm:flex sm:justify-between text-md sm:text-xl">
            <div>
              <p className="font-light text-lg sm:text-2xl">Waterbeach</p>
              <p>Time: Mondays at 7pm</p>
              <p>Meeting point: The Green in Waterbeach</p>
            </div>
            <div>
              <p className="font-light text-lg sm:text-2xl">Stretham</p>
              <p>Time: Wednesdays at 7pm</p>
              <p>Meeting point: Stretham Primary School</p>
            </div>
          </div>
        </div>
        <div className="hidden w-full p-8 sm:block">
          <Image
            src={BuggyBootcamp}
            alt="buggyBootcamp"
            className=''
          />
        </div>
      </div>

      <div className="font-montserrat font-light text-xl">
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