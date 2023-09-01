import Image from "next/image";
import Homepage from "../img/homepage.png";
import Nicola from "../img/nicola.jpeg"

export default function HomeDesktop() {
  return (
    <div>
      <div className=''>
        <div className="py-10">
          <Image
            src={Homepage}
            alt="homepage"
            className='object-cover w-full max-h-full'
          />
        </div>

        <div className="grid grid-cols-2">
          
          <div className="bg-white -mt-24 px-10 py-8 absolute w-2/4 left-10 h-full rounded-md grid">
            <div className="font-montserrat font-light text-4xl pb-10">
              <p>Hello there, I'm Nic! </p>
            </div>
            <div className="font-montserrat font-extralight text-2xl flex flex-col gap-6 text-justify">
              <p>I am a women's health and fitness coach with over 15 years of experience.</p>
              <p>Starting out in 2008, I had a large focus on pre and post-natal care and ran a variety of fitness groups for women during and after pregnancy. </p>
              <p>Around 2018, I expanded my business and developed a passion for perimenopausal and menopausal care. I now work largely with older and mid life women, providing the support so many of us need in this stage of life. </p>
              <p>If you are looking for a welcoming community to help make exercising fun no matter what level you are currently at, you have found the right place! </p>
              <p>Take a look at the different classes I offer or use the contact page to reach out if you want to discuss your needs with me. </p>
              <p>Nic x </p>
              <Image
                src={Nicola}
                alt="nicola"
                height={350}
                className='place-self-center my-10'
              />
            </div>
          </div>

          <div className="font-montserrat font-light text-4xl right-10 py-10 px-10 absolute w-2/5 right-0 h-full">
            <p className="py-8">Join us on Facebook!</p>
            <iframe 
            className="pb-16"
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FCoachNicolaOstler&tabs=timeline&width=500&height=2000&small_header=true&hide_cover=false&show_facepile=false&appId" 
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