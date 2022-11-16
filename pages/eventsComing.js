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
            image: imgBuilder.image(p.image),
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
   
      <section className="  md:block">
{/* <img className=" w-2/6 absolute drop-shadow-[0_0px_5px_red]" src="https://i.ibb.co/Q6g7Tk0/Masturbator-White-Thick-Transparent.png" />  */}




  <div className=' '>


 {/* --------------------------------------------  right */}
 
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


{/* -------------------------------------------- left */}
        <div className=' mx-auto pt-36 z-0 p-5 top-0  w-9/12  '>
          
        <img className={styles.figure} src="https://i.ibb.co/sFyFWsf/Bald.png"/>
        <img className={styles.figure2} src="https://i.ibb.co/Q6g7Tk0/Masturbator-White-Thick-Transparent.png" /> 
        {/* <Toolbar />  */}

        {/* <p className="text-3xl  text-left pt-20 font-semibold  "> now & coming up</p>  */}
        {/* <p className="text-center object-center font-light "> now & coming up</p> */}



        <p className={styles.crytext2}> now </p> 

<div className='pt-60'>
<div className={styles.wrapper}>
        <div className=' w-9/12 flex'>
        <Link  className=" w-1/6  float-left italic text-left font-base text-[#e5e5e5] justify-center text-3xl pb-10  " href="./eventsComing">now</Link>
        <Link className="  w-1/6 float-right text-[#1b1b1b] hover:text-[#e5e5e5]  text-3xl " href="./eventarchive">archive</Link>
         </div>

        <div className=' container grid grid-cols-3 gap-1 mx-auto '>
          {mappedPosts.length ? mappedPosts.map((p, index) => (
            <div onClick={() => router.push(`/eventsComing/${p.slug.current}`)} key={index}>
              <div className='z-0'>
                {/* hover:saturate-50 w-96  hover:z-0 */}
                      <img  className='flex rounded-[30px] w-12/12 h-auto p-1 float-left hover:z-0 font-italic' src={p.image} />
                      <div className=" text-center object-center text-lg z-50 font-semibold ">{p.name}</div>
                      <div className=" text-center object-center text-lg z-50 font-light ">{p.summary}</div>
                  </div>
            </div>
          )) : <>No Posts Yet</>}
        </div>

       

        {/* <Link href="https://www.youtube.com/watch?v=5TY_VbQXlkU"><p className="text-2xl  text-center italic pt-10 font-semibold  "> WATCH: chosen family: exploring the importance of LGBTQI+ safe spaces with Aisha Mirza </p></Link> */}
            </div>
            {/* <FooterComponent></FooterComponent>  */}
  </div>
  </div>
  </div>
  </section>

  {/* <Footer></Footer> */}




      {/* <Toolbar /> */}
      {/* <div className="text-center  justify-center  mx-auto  p-0 ">
    
      <div className='pt-28  text-left text-xl max-w-7xl mx-auto my-md  relative hidden md:block '>
    </div>

    <div className="  ">
    <div className=' p-5 text-left h-5/6 text-9xl  font-semibold   relative hidden md:block '>
        <h1 className=' py-8  text-left  h-5/6  font-base  tracking-wide flex-none '>events</h1>
        <div className='m-auto text-2xl font-light'>
          </div>
        </div>
        </div>
  


<div className="">
    <div className=' p-5 text-5xl border-b-[.5px] border-[#030303]  font-light  relative hidden md:block '>
        <h1 className=' font-base text-center  tracking-wide flex-none text-5xl '>now & coming up</h1>
        <div className='m-auto text-2xl font-light'>
          </div>
        </div>
        </div> */}


        {/* <a className="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300">
  <h1  className="tracking-wider" >Title</h1>
  <p  className="mx-auto">Description</p>
  </a> */}
    {/* <div className=' text-center justify-center mx-auto my-md  relative hidden md:block '>
        <div className={styles.feed}>
          {mappedPosts.length ? mappedPosts.map((p, index) => (
            <div onClick={() => router.push(`/eventsComming/${p.slug.current}`)} key={index} className={styles.post}>
              <h3>{p.name}</h3>
              <h3>{p.div}</h3>
              <img className=' w-56 h-auto ' src={p.image} /> */}
{/* <a href="#" className="relative">
    <div className="w-56 h-auto flex flex-wrap content-center">
        <img src={p.image} className="w-56 h-auto   " alt=""/>
    </div>
</a> */}
            {/* </div>
          )) : <>No Posts Yet</>}
        </div>
      </div>
    </div> */}


        {/* <div className="  ">
    <div className=' p-5 text-left h-5/6 text-9xl  font-semibold   relative hidden md:block '>
        <h1 className=' py-8  text-left  h-5/6  font-base  tracking-wide flex-none '>archive</h1>
        <div className='m-auto text-2xl font-light'>
          </div>
        </div>
        </div>

        <div className=" bg-[white] ">
  <div className=" p-3 border-[.5px] border-[#030303] font-normal text-xl w-screen overflow-x-hidden ">

<Marquee>
<span className="mx-4  text-[#2b2b2b]">  .｡.:☆.｡.: &nbsp; events archive</span>
    <span className="mx-4  text-[#2b2b2b]">  &nbsp; .｡.:☆.｡.: &nbsp; events archive</span>
    <span className="mx-4  text-[#2b2b2b]">  &nbsp; .｡.:☆.｡.: &nbsp; events archive</span>
    <span className="mx-4  text-[#2b2b2b]">  .｡.:☆.｡.: &nbsp; events archive</span>
    <span className="mx-4  text-[#2b2b2b]">  &nbsp; .｡.:☆.｡.: &nbsp; events archive</span>
    <span className="mx-4  text-[#2b2b2b]">  &nbsp; .｡.:☆.｡.: &nbsp; events archive</span>
    <span className="mx-4  text-[#2b2b2b]">  .｡.:☆.｡.: &nbsp; events archive</span>
    <span className="mx-4  text-[#2b2b2b]">  &nbsp; .｡.:☆.｡.: &nbsp; events archive</span>
    <span className="mx-4  text-[#2b2b2b]">  &nbsp; .｡.:☆.｡.: &nbsp; events archive</span>
    <span className="mx-4  text-[#2b2b2b]">  .｡.:☆.｡.: &nbsp; events archive</span>
    <span className="mx-4  text-[#2b2b2b]">  &nbsp; .｡.:☆.｡.: &nbsp; events archive</span>
    <span className="mx-4  text-[#2b2b2b]">  &nbsp; .｡.:☆.｡.: &nbsp; events archive</span>

</Marquee>

</div>
</div> */}

{/* <div className="">
    <div className=' p-5 text-5xl font-light  relative hidden md:block '>
        <h1 className=' font-base text-center  tracking-wide flex-none text-5xl '>events archive</h1>
        <div className='m-auto text-2xl font-light'>
          </div>
        </div>
        </div> */}
        
        

    {/* <FooterComponent></FooterComponent> */}
    </div>
  );
}

export const getServerSideProps = async pageContext => {
  const query = encodeURIComponent('*[ _type == "eventsComing" ]');
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
