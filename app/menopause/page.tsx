'use client'
import Image from "next/image";
import Athena from "../../img/athenaproject.png"


export default function GroupSessions() {
  return (
    <div className="mx-2 sm:mx-8">
      <div className="text-center font-montserrat font-light text-lg pt-4 sm:text-3xl sm:py-8">
        <p>Menopause Support</p>
      </div>
      <div className="">
        <div className="py-4 px-4 sm:px-8 font-montserrat font-extralight text-md sm:text-xl text-justify flex flex-col gap-4">
          <p>Why is it necessary? As young girls, we are taught about puberty; what will happen to our bodies, how periods will affect us. When we think about having a family, the information is there too. We talk to our friends, our relatives who have had babies…there are support groups, the NCT, books etc etc to help us prepare to bring a baby into the world. </p>
          <p>But where is the support for us mid-lifers? Why do we start feeling fatigued, more stressed out, start putting on weight when nothing else in our lifestyle has changed.. who knew that the months and years leading to menopause can be very much affected by changes in our hormones? The average age of menopause is 51, so you can be in the perimenopausal period for 10-15 years before this. </p>
          <p>I feel that, much like there has been a gap in general healthcare for new mums, hello 6 week postnatal check, there is a massive gap at recognising perimenopausal symptoms in women, and we are palmed off with anti depressants or some cream or mostly, nothing at all. Most women don’t realise that their symptoms could be perimenopausal,  and so present themselves to the GP with a single most troubling issue, that is often dismissed or misdiagnosed. Mid life women are wrongly prescribed antidepressants and other medications, and symptoms put down to stress, when it is in fact their fluctuations in their oestrogen, progesterone and testosterone levels that are the issue. </p>
          <p>I also feel that there is such negativity surrounding this period in a woman’s life, when there really shouldn’t be. We are beginning to have more time to ourselves again as our children get older, we have more time for our partners, we are usually more financially stable, accomplished in our careers. We know what we like and what we don’t like, what we’ll put up with and what we won’t. We are less worried about what other people think..what a great time to be alive! </p>
          <p>There has been some suggestion that the more you know about the menopause, the fewer effects you will experience. It really is a case of knowledge is power. My aim here is to educate midlife women, so that we can seek the right help and go to the GP armed with the right information and our story. That way, no precious time is wasted during your appointment and those GPs stand a better chance of helping us or getting us the right referrals. </p>
          <p>I want to help you recognise that a lot of the symptoms you may be experiencing are normal, treatable and because of your hormones, not because you are going crazy! I also want to share loads of ways in which you can make tweaks to your lifestyle to make this period enjoyable and bring back the fun you, the you that enjoyed life, who had a real sense of who you are. Bring back that confidence. That spark. Don’t write yourself off. The fun is only just beginning!</p>
          <p></p>
        </div>
      </div>

      <div>
        <div className="w-full p-4 sm:hidden">
          <Image
            src={Athena}
            alt="athena"
            className=''
          />
        </div>
        <div className="text-center font-montserrat font-light text-lg pt-4 sm:text-3xl sm:py-8">
          <p>Athena Project:</p>
          <p>The Wonder Women Years</p>
        </div>
        <div className="py-4 px-4 sm:px-8 font-montserrat font-extralight text-md sm:text-xl text-justify flex">
          <div className="flex flex-col gap-4">
            <p>This is a four week programme for women who are entering into mid- life and desire support for the peri-menopausal period as well as for those women who have experienced the menopause and want to continue to live the healthiest and most positive life possible. You will receive a variety of video lessons (15-55 minutes long), linked to easing specific perimenopausal and post menopausal symptoms.</p>
            <p>You will also receive information from me explaining why you may be experiencing the feelings and physical symptoms and action points on what you can do to help yourself. You will receive email support and I will be here to answer your questions throughout.</p>
            <p>Topics covered throughout the programme include:</p>
            <div className="sm:flex sm:gap-24">
              <div>
                <p className="text-lg sm:text-xl font-light pb-2">Movement</p>
                <ul className="list-disc px-8 text-md sm:text-lg pb-4">
                  <li>Flexibility</li>
                  <li>Cardiovascular training</li>
                  <li>Pelvic Floor Health</li>
                  <li>Posture</li>
                  <li>Mobility</li>
                  <li>Strength</li>
                  <li>Resistance training</li>
                  <li>Balance</li>
                  <li>Core</li>
                </ul>
              </div>
              <div>
                <p className="text-lg sm:text-xl font-light pb-2">Information and Support</p>
                <ul className="list-disc px-8 text-md sm:text-lg">
                  <li>Sleep</li>
                  <li>Anxiety and Mood</li>
                  <li>Food and Nutrition</li>
                  <li>Stress</li>
                  <li>Weight gain</li>
                  <li>Fatigue</li>
                  <li>Brain fog</li>
                  <li>Achy joints and muscles</li>
                </ul>
              </div>
            </div>
            <p>Please email for more information and to sign up. The whole four weeks, with daily support is only £100.</p>
          </div>
          <div className="hidden w-full pl-8 sm:block">
            <Image
              src={Athena}
              alt="athena"
              className=''
            />
          </div>
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