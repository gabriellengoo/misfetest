import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Toolbar } from '../components/toolbar';
import imageUrlBuilder from '@sanity/image-url';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Footer from '../components/Footer';
// import FooterComponent from '../components/foottest';
// import Marquee from "react-fast-marquee";
import Link from 'next/link';
import { urlFor } from "../sanity"
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import { browserName, CustomView } from "react-device-detect";

export default function Home({ posts }) {
  const router = useRouter();
  const [mappedPosts, setMappedPosts] = useState([]);

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
            image: imgBuilder.image(p.mainImage),
          }
        })
      );
    } else {
      setMappedPosts([]);
    }
  }, [posts]);

  return (

    
    <div>

<Head>
       {/* <script src="https://unpkg.com/react@16.12.0/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@16.12.0/umd/react-dom.development.js"></script> */}
<title>events</title>
      </Head>
      <Toolbar />  
   



      <MobileView>
      <section className=" ">

<div className='  mx-auto  z-0 p-5 top-0'>
  
<img className={styles.figure} src="https://i.ibb.co/sFyFWsf/Bald.png"/>
<img className={styles.figure2} src="https://i.ibb.co/Q6g7Tk0/Masturbator-White-Thick-Transparent.png" /> 
{/* <Toolbar />  */}
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


<div className='pt-60'>
<div className={styles.wrapper}>
<p className={styles.crytext2}> archive </p> 
<div className=' flex justify-evenly'>
<Link  className=" float-left italic text-left font-base text-[#1b1b1b]  justify-center text-3xl pb-10 no-underline  " href="./eventsComing">now</Link>
<Link  className="  float-right text-[#e5e5e5] hover:text-[#1b1b1b]  text-3xl " href="./eventarchive">archive</Link>
 </div>

<div className=' container grid grid-cols-1 gap-1 mx-auto '>
  {mappedPosts.length ? mappedPosts.map((p, index) => (
    <div onClick={() => router.push(`/eventsarchivebby/${p.slug.current}`)} key={index}>
      <div className='z-0'>
        {/* hover:saturate-50 w-96  hover:z-0 */}
              {/* <img  className='flex w-12/12 h-auto p-1 float-left hover:z-0 font-italic' src={p.mainImage} /> */}
              <img  className='flex w-12/12 rounded-[30px] h-auto p-1 float-left hover:z-0 font-italic' src={urlFor(p.mainImage)} /> 
              <div className=" text-center object-center text-lg z-50 font-semibold ">{p.name}</div>
              <div className=" text-center object-center text-lg z-50 font-light ">{p.summary}</div>
          </div>  
    </div>
  )) : <>No Posts Yet</>}
</div>



    </div>
</div>
</div>
</section>
</MobileView>
<BrowserView>
<section className="relative hidden md:block">

<div className=' pt-36 mx-auto  z-0 p-5 top-0 w-9/12'>
  
<img className={styles.figure} src="https://i.ibb.co/sFyFWsf/Bald.png"/>
<img className={styles.figure2} src="https://i.ibb.co/Q6g7Tk0/Masturbator-White-Thick-Transparent.png" /> 
{/* <Toolbar />  */}
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


<div className='pt-60'>
<div className={styles.wrapper}>
<p className={styles.crytext2}> archive </p> 
<div className='w-9/12 flex'>
<Link  className=" w-1/6  float-left italic text-left font-base text-[#1b1b1b]  justify-center text-3xl pb-10 no-underline  " href="./eventsComing">now</Link>
<Link  className="  w-1/6 float-right text-[#e5e5e5] hover:text-[#1b1b1b]  text-3xl " href="./eventarchive">archive</Link>
 </div>

<div className=' container grid grid-cols-3 gap-1 mx-auto '>
  {mappedPosts.length ? mappedPosts.map((p, index) => (
    <div onClick={() => router.push(`/eventsarchivebby/${p.slug.current}`)} key={index}>
      <div className='z-0'>
        {/* hover:saturate-50 w-96  hover:z-0 */}
              {/* <img  className='flex w-12/12 h-auto p-1 float-left hover:z-0 font-italic' src={p.mainImage} /> */}
              <img  className='flex w-12/12 rounded-[30px] h-auto p-1 float-left hover:z-0 font-italic' src={urlFor(p.mainImage)} /> 
              <div className=" text-center object-center text-lg z-50 font-semibold ">{p.name}</div>
              <div className=" text-center object-center text-lg z-50 font-light ">{p.summary}</div>
          </div>  
    </div>
  )) : <>No Posts Yet</>}
</div>



    </div>
</div>
</div>
</section>
</BrowserView>



  <Footer></Footer>


    </div>
  );
}

export const getServerSideProps = async pageContext => {
  const query = encodeURIComponent('*[ _type == "eventsarchivebby" ]');
  const url = `https://jgs4s870.api.sanity.io/v1/data/query/production?query=${query}`;
  const result = await fetch(url).then(res => res.json());

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
