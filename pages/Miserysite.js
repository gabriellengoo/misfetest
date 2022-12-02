
import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Toolbar } from '../components/toolbar';
import Footer from '../components/Footer';
import Image from 'next/image'
import imageUrlBuilder from '@sanity/image-url';
import { useState, useEffect } from 'react';
import Script from "next/script";
import { useRouter } from 'next/router';
// import 'animate.css';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import { browserName, CustomView } from "react-device-detect";
import React from 'react';
import Layout from "../components/Layout";


{/* <MobileView>
</MobileView>
<BrowserView>
</BrowserView> */}


export default function Home({ posts }) {


  const router = useRouter();
  const [mappedPosts, setMappedPosts] = useState([]);

  // <div  key={data}>
   

  const [showAll, setShowAll] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [showCurrent, setShowCurrent] = useState(false);

  const toggleAll = () => {
    setShowAll(val => !val);
    setShowCurrent(false);
  };

  const toggleCurrent = () => {
    if (!showCurrent) {
      setShowCurrent(true);
      setShowAll(false);
      return;
    }
  };

  const setCurrent = index => {
    setCurrentIdx(index);
    toggleCurrent();
  };

  
  useEffect(() => {
    if (posts.length) {
      const imgBuilder = imageUrlBuilder({
        projectId: 'jgs4s870',
        dataset: 'production',
      });

      setMappedPosts(
        posts.map(p => {
          return {
            ...p,
            image: imgBuilder.image(p.image),
          }
        })
      );
    } else {
      setMappedPosts([]);
    }
  }, [posts]);

  // const [data, setData] = useState([ <div className={styles.imgs}>
  //   <img className={styles.figure} src="https://i.ibb.co/sFyFWsf/Bald.png"/>
  //   <img className={styles.figure2} src="https://i.ibb.co/Q6g7Tk0/Masturbator-White-Thick-Transparent.png" />

  //   <img className={styles.figure3} src="https://i.ibb.co/x3yXp21/Misery-Meets2square-copy-2.png" /> 
  //   <img className={styles.figure5} src="https://i.ibb.co/VvxBzzg/Misery-Meets2square.png" /> 
  //   <img className={styles.figure4} src="https://i.ibb.co/42kZCsV/Miserymeets08-25-Recovered.png" /> 
  //   </div>]);


  return (
<Layout>
   
       <Head>
       {/* <script src="https://unpkg.com/react@16.12.0/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@16.12.0/umd/react-dom.development.js"></script> */}

<title>misery</title>

{/* <script src="https://cdn.jsdelivr.net/npm/@klaxit/cookie-consent@X.Y.Z/dist/cookie-consent.js"></script> */}
<script type="text/javascript" src="https://unpkg.com/jquery@1.11.1/dist/jquery.js" defer></script>

{/* <script async src="https://www.googletagmanager.com/gtag/js?id=UA-XXXXXX-X"></script> */}
{/* <script type="text/javascript" src="//www.PrivacyPolicies.com/cookie-consent/releases/3.0.0/cookie-consent.js"></script> */}
<script type="module" src="../assets/app.js" defer></script>

      </Head>




      <MobileView>
        
    <div className="isolate bg-white">
    <Toolbar /> 
      <main>

        <div className='h-[100vh] fixed  z-0'>
        {mappedPosts.length ? mappedPosts.map((p, index) => (
            <div key={index}>
              <div className='z-0'>
                      <img className='mx-auto h-[50vh] w-auto p-1 z-[0 !important] ' src={p.image} />
                  </div>
            </div>
          )) : <>No Posts Yet</>}
        </div>


            <div className="relative px-6 lg:px-8">
              <div className="mx-auto max-w-3xl pt-20 pb-10 sm:pt-48 sm:pb-10">
                  <div className=' flex mx-auto '>
                  <p className={styles.crytext4}> u can cry if u want to 🥲 </p> 
                  </div>
              </div> 


              
                  <div className='z-[50 !important]'>

                      <div className=' pb-10'>
                      <div className={styles.wrapper}>
                      {/* what is misery */}
                      <section id="whatismisery?" className={styles.whatismiserydas}>
                              <p className=' text-xl  text-left pt-10 font-semibold  '>what is misery?</p>
                              <p className='text-left text-base font-light pt-2'>misery is a mental health community and sober rave based in london and led by and for queer, trans, intersex, black people and people of colour (qtibpoc) with lived experience of madness, mental health challenges, time in hospital, addiction, public service use, disability, trauma, medication and neurodivergence.

                      we co-create free, playful, accessible sober spaces, services, practices, parties and resources to cultivate communities of care that can support and sustain the collective healing and resilience of qtibpoc world over.

                      misery is a reminder that you’re not too sensitive, it’s mad out here.</p>
                      </section>
                      </div>
                      </div>


                      <div className='pt-10 pb-10'>
                      <div className={styles.wrapper}>
                      {/* what we do */}
                      <section id="whatwedo" className={styles.whatismiserydas}>
                                  <p className=' text-xl text-left pt-10 font-semibold  '>what we do</p>
                              <p className='text-left font-light pt-2'>we strive to cultivate generative ecologies of connection, care and solidarity that can support and sustain the collective healing and resilience of our community. we know first hand that healing and liberation is interwoven and by nurturing community care and addressing collective trauma, we seek to disrupt the growing privatisation of healing and the “self-care industrial complex”. we work for and with lived experience leaders to co-create accessible, playful, and transformative peer-led healing spaces, services and resources by (un)archiving and (re)generating the vast wisdom, community resilience strategies and potential for joy that are abundant amongst our people..</p>
                      </section>
                      </div>
                      </div>


                      <div className='pt-10 pb-10'>
                      <div className={styles.wrapper}>
                      {/* our goals */}
                      <section id="ourgoals">
                      <div className='  font-light pt-10 '>
                                  <p className=' text-xl text-left font-semibold  '>our goals</p>
                                  <div className=' text-base list-[none] '>
                              <li className=' duration-500  pb-2 font-light '> to provide accessible, supportive and politically engaged events, spaces and services by and for qtibpoc to build community and help us to be in right relationship with ourselves, each other, and the land</li>
                      <li className=' duration-500 font-light  pb-2 '>to develop resources, research, artistic work, modalities and practices that facilitate healing and challenge dominant misperceptions about mental health, addiction, disability, trauma and neurodiversity</li>
                      <li className=' duration-500 font-light  pb-2 '>to promote leadership and development opportunities for qtibipoc with lived experience of mental health problems, madness, addiction, disability, trauma, and neurodivergence - within our communities, health and wellbeing settings, the arts and wider society</li>
                              </div>
                              </div>
                      </section>
                      </div>
                      </div>

                      <div className='pt-10 pb-10'>
                      <div className={styles.wrapper}>
                      {/* our roots */}
                      <section id="ourroots">
                      <div className=' pt-10 font-normal   '>
                                  <p className=' text-xl text-left font-semibold  '>our roots</p>
                                  <div className='text-left'>
                              <p className=' duration-500 pt-2 font-light'> the work of creating communities of care is not new, nor invented by us. it is ancient work that exists within communities, cultures and species around the world. we continue the legacies and lineages of our ancestors and the artists, activists and community workers that have come before us and those around the world that are committed to this work.</p>
                      <p className=' duration-500 font-light pt-2'>we are inspired by our friends and lovers, the creative power of our communities and the mistakes of our parents. we give thanks and draw strength from the disability and healing justice movements, black feminist theory and praxis, mad studies, queer of colour critique, radical transfeminists, our dyke, faggot and gender divine sibings worldwide, femmes of colour spaces, wxtchcraft, raving on the dancefloor, community-based transformative justice interventions, indigenous herbalists, generative somatics, revolutionary mothering, nurses, sex workers, teachers, survivors, carers, youth workers and black, brown, indigenous and diasporic spiritual traditions.</p>
                      <p className=' duration-500 font-light pt-2'>we have learnt that people are the experts in their own lives and believe that everyone should have the right to fail and the support they need to grow. we acknowledge that harm is an integral part of the human experience and that experiencing harm is one of the many ways our lives, minds, and hearts adapt to the world.</p>
                      <p className=' duration-500 font-light pt-2'>our work is rooted in the principles of healing centered harm reduction including trauma-informed care, agency, collaboration, intersectionality, consent and acknowledges the historical and on-going social, cultural, environmental and economic systems that constantly terrorise our communities including experiences of colonisation, anti-blackness and racism, sexism, homophobia, transphobia, classism, ableism and other oppressions.</p>
                      </div>   </div>
                      </section>
                      </div>
                      </div>

                      <div className='pt-10 pb-10'>
                      <div className={styles.wrapper}>
                      {/* our dreams */}
                      <section id="ourdreams">
                      <div className=' font-normal pt-10  '>
                                  <p className=' text-xl text-left font-semibold  '>our dreams</p>
                                  {/* <div className=' text-center flex p-10   font-normal  '>
                                  <p className=' flex-none text-8xl duration-500 font-light  m-auto'> 1｡ </p>
                                  <p className=' flex-none text-8xl duration-500 font-light  m-auto'> 2｡ </p>
                                  <p className=' flex-none text-8xl duration-500 font-light  m-auto'> Ɛ｡ </p>
                                  </div> */}
                                  <div className=' text-left  font-normal  '>
                              <p className=' duration-500  pt-5 font-light'> we are dreaming of worlds where every queer, trans, intersex black, brown and indigenous person has access to a choice of knowledges, resources, communities and health care services that they need to sustain their wellbeing.We are dreaming of worlds where every queer, trans, intersex black, brown and indigenous person has access to a choice of knowledges, resources, communities and health care services that they need to sustain their wellbeing.</p>
                      <p className=' duration-500  font-light pt-5 '> worlds that are safer, happier, healthier and more peaceful. worlds where we all work to acknowledge and minimise our own potential for intimate, interpersonal, structural and ecological violence and in doing so resolve conflict compassionately.</p>
                      <p className=' duration-500  font-light pt-5 '> worlds where people before profits, harm-reduction and post traumatic growth is the norm. where we are all supported in alchemising our pain through play, consent, connection, boundaries and rest. worlds where you can cry and be held, if you want to.</p>
                              </div>
                              </div>
                      </section>
                      </div>
                      </div>


                  </div>
            </div>

            


      </main>
    </div>
    <Footer></Footer> 
      </MobileView>

      {/* <CustomView condition={browserName === "Firefox"}></CustomView>  */}
      <BrowserView> 
      <Toolbar />  


  

<section className="h-screen relative hidden md:block">



  <div className='flex h-screen'>


        <div>
    


{/* -------old----- */}
        <div className='pt-36 flex p-10 pb-0 mx-auto '>
          {mappedPosts.length ? mappedPosts.map((p, index) => (
            <div key={index}>
              <div className='z-0'>
                      <img className='mx-auto rounded-[30px]  w-[55rem] p-1 ' src={p.image} />
                  </div>
            </div>
          )) : <>No Posts Yet</>}
        </div>

{/* className={styles.overlaypictop} pt-[85vh]*/}
{/* old  <div className=' pt-10 z-0 pb-5 pl-5 pr-5 top-0 h-screen w-9/12 mx-auto '> */}
        <div className=' z-0 pb-5 pl-5 pr-5 top-0 h-screen w-9/12 mx-auto '>


        <div id="tooltip"
                    className={
                        styles.cursorimg
                }>
                    <Image src="/images/Fish.png" alt="Flower" width="100" height="100"/>
                </div>
    



          <div className={styles.imgs}>
        <img className={styles.figure} src="https://i.ibb.co/sFyFWsf/Bald.png"/>
        <img className={styles.figure2} src="https://i.ibb.co/Q6g7Tk0/Masturbator-White-Thick-Transparent.png" />
        <img className={styles.figure3} src="https://i.ibb.co/x3yXp21/Misery-Meets2square-copy-2.png" /> 
        <img className={styles.figure5} src="https://i.ibb.co/VvxBzzg/Misery-Meets2square.png" /> 
        <img className={styles.figure4} src="https://i.ibb.co/42kZCsV/Miserymeets08-25-Recovered.png" /> 

        <img className={styles.figure6} src="https://i.ibb.co/BqcKgs4/Alien.png"/>
        <img className={styles.figure7} src="https://i.ibb.co/dbzp5KC/Cloud-tilt-right.png" />
        <img className={styles.figure8} src="https://i.ibb.co/V9vkXv8/Grinch-main.png" /> 
        <img className={styles.figure9} src="https://i.ibb.co/SnxtFYJ/Layer-9.png" /> 

        <img className={styles.figure10} src="https://i.ibb.co/7kdqWNg/Plant-Body.png"/>
        <img className={styles.figure11} src="https://i.ibb.co/h8SvV2k/Shape-2.png" />
        <img className={styles.figure12} src="https://i.ibb.co/kJWhGz8/Face.png" /> 
        </div>
  

 

{/* <div className={styles.crytextdown}><p className={styles.crytextdownarr}> ↓ </p>  </div>  */}
<p className={styles.crytext4}> u can cry if u want to 🥲 </p> 




<div className={styles.wrapper}>



    
<div className=" pt-10 list-[none] text-center max-w-3xl object-center mx-auto text-4xl font-thin  ">
      {/* <Link  href="#whatismisery"><p className=' hover:text-[#cccccca5]'>☆ what is misery? </p></Link> */}
{/* <Link href="#whatwedo"><a className=' hover:text-[#cccccca5] '>☆ what we do </a></Link>
<Link href="#ourgoals"><a className=' hover:text-[#cccccca5] '>☆ our goals ☆</a></Link> */}
</div>
{/* <div className=" pt-5 list-[none] text-center max-w-3xl object-center mx-auto text-4xl font-thin  ">
<Link href="#ourroots"><a className=' hover:text-[#cccccca5] '>☆ our roots </a></Link>
<Link href="#ourdreams"><a className=' hover:text-[#cccccca5] '>☆ our dreams ☆</a></Link>
</div> */}


<div className=''>
{/* what is misery */}
<section id="whatismisery?" className={styles.whatismiserydas}>
        <p className=' text-xl  text-left pt-10 font-semibold  '>what is misery?</p>
        <p className='text-left text-base font-light pt-2'>misery is a mental health community and sober rave based in london and led by and for queer, trans, intersex, black people and people of colour (qtibpoc) with lived experience of madness, mental health challenges, time in hospital, addiction, public service use, disability, trauma, medication and neurodivergence.

we co-create free, playful, accessible sober spaces, services, practices, parties and resources to cultivate communities of care that can support and sustain the collective healing and resilience of qtibpoc world over.

misery is a reminder that you’re not too sensitive, it’s mad out here.</p>
</section>


{/* what we do */}
<section id="whatwedo" className={styles.whatismiserydas}>
            <p className=' text-xl text-left pt-10 font-semibold  '>what we do</p>
        <p className='text-left font-light pt-2'>we strive to cultivate generative ecologies of connection, care and solidarity that can support and sustain the collective healing and resilience of our community. we know first hand that healing and liberation is interwoven and by nurturing community care and addressing collective trauma, we seek to disrupt the growing privatisation of healing and the “self-care industrial complex”. we work for and with lived experience leaders to co-create accessible, playful, and transformative peer-led healing spaces, services and resources by (un)archiving and (re)generating the vast wisdom, community resilience strategies and potential for joy that are abundant amongst our people..</p>
        </section>





{/* our goals */}
<section id="ourgoals">
<div className='  font-light pt-10 '>
            <p className=' text-xl text-left font-semibold  '>our goals</p>
            <div className=' text-base list-[none] '>
        <li className=' duration-500  pb-2 font-light '> to provide accessible, supportive and politically engaged events, spaces and services by and for qtibpoc to build community and help us to be in right relationship with ourselves, each other, and the land</li>
<li className=' duration-500 font-light  pb-2 '>to develop resources, research, artistic work, modalities and practices that facilitate healing and challenge dominant misperceptions about mental health, addiction, disability, trauma and neurodiversity</li>
<li className=' duration-500 font-light  pb-2 '>to promote leadership and development opportunities for qtibipoc with lived experience of mental health problems, madness, addiction, disability, trauma, and neurodivergence - within our communities, health and wellbeing settings, the arts and wider society</li>
        </div>
        </div>
</section>

{/* our roots */}
<section id="ourroots">
<div className=' pt-10 font-normal   '>
            <p className=' text-xl text-left font-semibold  '>our roots</p>
            <div className='text-left'>
        <p className=' duration-500 pt-2 font-light'> the work of creating communities of care is not new, nor invented by us. it is ancient work that exists within communities, cultures and species around the world. we continue the legacies and lineages of our ancestors and the artists, activists and community workers that have come before us and those around the world that are committed to this work.</p>
<p className=' duration-500 font-light pt-2'>we are inspired by our friends and lovers, the creative power of our communities and the mistakes of our parents. we give thanks and draw strength from the disability and healing justice movements, black feminist theory and praxis, mad studies, queer of colour critique, radical transfeminists, our dyke, faggot and gender divine sibings worldwide, femmes of colour spaces, wxtchcraft, raving on the dancefloor, community-based transformative justice interventions, indigenous herbalists, generative somatics, revolutionary mothering, nurses, sex workers, teachers, survivors, carers, youth workers and black, brown, indigenous and diasporic spiritual traditions.</p>
<p className=' duration-500 font-light pt-2'>we have learnt that people are the experts in their own lives and believe that everyone should have the right to fail and the support they need to grow. we acknowledge that harm is an integral part of the human experience and that experiencing harm is one of the many ways our lives, minds, and hearts adapt to the world.</p>
<p className=' duration-500 font-light pt-2'>our work is rooted in the principles of healing centered harm reduction including trauma-informed care, agency, collaboration, intersectionality, consent and acknowledges the historical and on-going social, cultural, environmental and economic systems that constantly terrorise our communities including experiences of colonisation, anti-blackness and racism, sexism, homophobia, transphobia, classism, ableism and other oppressions.</p>
</div>   </div>
</section>


{/* our dreams */}
<section id="ourdreams">
<div className=' font-normal pt-10  '>
            <p className=' text-xl text-left font-semibold  '>our dreams</p>
            {/* <div className=' text-center flex p-10   font-normal  '>
            <p className=' flex-none text-8xl duration-500 font-light  m-auto'> 1｡ </p>
            <p className=' flex-none text-8xl duration-500 font-light  m-auto'> 2｡ </p>
            <p className=' flex-none text-8xl duration-500 font-light  m-auto'> Ɛ｡ </p>
            </div> */}
            <div className=' text-left  font-normal  '>
        <p className=' duration-500  pt-5 font-light'> we are dreaming of worlds where every queer, trans, intersex black, brown and indigenous person has access to a choice of knowledges, resources, communities and health care services that they need to sustain their wellbeing.We are dreaming of worlds where every queer, trans, intersex black, brown and indigenous person has access to a choice of knowledges, resources, communities and health care services that they need to sustain their wellbeing.</p>
<p className=' duration-500  font-light pt-5 '> worlds that are safer, happier, healthier and more peaceful. worlds where we all work to acknowledge and minimise our own potential for intimate, interpersonal, structural and ecological violence and in doing so resolve conflict compassionately.</p>
<p className=' duration-500  font-light pt-5 '> worlds where people before profits, harm-reduction and post traumatic growth is the norm. where we are all supported in alchemising our pain through play, consent, connection, boundaries and rest. worlds where you can cry and be held, if you want to.</p>
        </div>
        </div>
       
</section>
</div>
</div>



{/* <CookieConsent
  location="bottom"
  buttonText="sure babes!!"
  cookieName="myAwesomeCookieName2"
  style={{ background: "grey" }}
  // fontSize: "13px"
  boxshadow= "10px 10px lightblue"
  color="grey"
  font-weight="semibold"
  buttonStyle={{ color: "grey", background: "white" , borderradius: "25px" }}
  expires={150}
>
  This website uses cookies to enhance the user experience.{" "}
</CookieConsent> */}


          <Footer></Footer> 
            </div>
            </div>
  </div>
  </section>

  </BrowserView>
            

    </Layout>
  )
}


// export const getServerSideProps = ({ req, res }) => {
//   setCookie('test', 'value', { req, res, maxAge: 60 * 6 * 24 });
//   getCookie('test', { req, res });
//   getCookies({ req, res });
//   deleteCookie('test', { req, res });

//   return { props: {} };
// };


// async pageContext  
export const getServerSideProps = async pageContext => {
  const query = encodeURIComponent('*[ _type == "homeimage" ]');
  const url = `https://jgs4s870.api.sanity.io/v1/data/query/production?query=${query}`;
  const result = await fetch(url).then(res => res.json());

  const getServerSideProps = ({ req, res }) => {
  setCookie('test', 'value', { req, res, maxAge: 60 * 6 * 24 });
  getCookie('test', { req, res });
  getCookies({ req, res });
  deleteCookie('test', { req, res });

  return { props: {} };
};

  if (!result.result || !result.result.length) {
    return {
      props: {
        posts: [],
      }
    }
  } else {
    return {
      props: {
        posts: result.result,
      }
    }
  }
};