import Image from "next/image";
import Church from "../img/homepage.png";


export default function HomeMobile() {
  return (
    <div className="">
      <div className='flex'>
        <Image
          src={Church}
          alt="church"
          className='flex w-full'
        />
      </div>
      <div className="font-montserrat font-light text-xl pt-8 px-4">
        Hello there, I'm Nic!
      </div>
      <div className="py-6 px-4 font-montserrat font-extralight text-md text-justify flex flex-col gap-6">
        <p>I am a women's health and fitness coach with over 15 years of experience.</p>
        <p>Starting out in 2008, I had a large focus on pre and post-natal care and ran a variety of fitness groups for women during and after pregnancy. </p>
        <p>Around 2018, I expanded my business and developed a passion for perimenopausal and menopausal care. I now work largely with older and mid life women, providing the support so many of us need in this stage of life. </p>
        <p>If you are looking for a welcoming community to help make exercising fun no matter what level you are currently at, you have found the right place! </p>
        <p>Take a look at the different classes I offer or use the contact page to reach out if you want to discuss your needs with me. </p>
        <p>Nic x </p>  
      </div>

      <div className="font-montserrat font-light text-xl w-full h-full px-4">
        <p className="py-8 text-center">Join us on Facebook!</p>
        <iframe 
        className=""
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FCoachNicolaOstler&width=500&height=2000&small_header=true&hide_cover=false&show_facepile=false&appId" 
        height="100%"
        width="100%"
        allowFullScreen={true} 
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"/>
      </div>
    </div>
  )
}