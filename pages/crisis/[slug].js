import imageUrlBuilder from '@sanity/image-url';
// import client from './sanityClient'
import { useState, useEffect } from 'react';
import styles from '../../styles/Post.module.css';
import BlockContent from '@sanity/block-content-to-react';
import { Toolbar } from '../../components/toolbar';
import { sanityClient } from '@sanity/client'
// import Image from "../../components/Image"
import Link from "next/link"
import Footer from '../../components/Footer';
import Head from 'next/head';
// import { SectionTitle } from "../../components/SectionTitle";

export const Crisisp = ({ title, phonetextsupport, inperson, communitiesUk, communitiesGlobal, housing, grief, sexualhealth, antiblackness,fatphobia,suicide, substancereduction, lgbtqiaherbalism, therapy, movingyourbody, }) => {


  console.log( title, phonetextsupport, inperson, communitiesUk, communitiesGlobal, housing,
    grief, sexualhealth, antiblackness, fatphobia,);
  
    // The back-to-top button is hidden at the beginning
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };


  return (
    <div>
      <Head>
        <title>crisis</title>
      </Head>
      <Toolbar /> 







   
      <section className=" relative hidden md:block">


{/* -------------------------------------------- left */}
        <div className=' mx-auto pt-36 z-0 p-5 top-0 h-screen w-9/12 overflow-scroll'>
          
        <img className={styles.figure} src="https://i.ibb.co/sFyFWsf/Bald.png"/>
        <img className={styles.figure2} src="https://i.ibb.co/Q6g7Tk0/Masturbator-White-Thick-Transparent.png" /> 
        {/* <Toolbar />  */}
        {/* <p className="text-center  font-serif font-light "> u can cry if u want to</p> */}

        <div className=" flex-auto mb-2 w-full p-2  text-center text[red]">
                    <h1 className={styles.crytext}>{title}</h1>
                </div> 

                <div className={styles.main}>
 
 





 <section className=' justify-center  m-auto text-xl font-normal reletive flex  z-50 '>
 <div className='text-center'>
             {/* <h1 className='  py-8 font-black text-3xl tracking-wide'>phone/text support</h1> */}
   <BlockContent blocks={phonetextsupport} />
 </div>
 </section>


 <div className={`container mx-auto flex items-center p-12 lg:p-62  ${styles.wrapper}`}>
 <div className={"flex-auto flex-col md:flex-row items-center  bg-[#ffffff] drop-shadow-lg shadow-[#f70909] rounded-xl m-5 md:m-10 " + styles.shadow}>
 <section className=' justify-center  reletive flex   px-8  z-50 '>
 <div className='text-center py-8 font-black text-3xl tracking-wide'>
   <BlockContent blocks={inperson} />
 </div>
 </section>
 </div>
 </div>

 <section  className=' font-bold reletive text-xl flex lg:pt-62 px-8  z-50 '>
 <BlockContent blocks={communitiesUk} />
 </section>


 <section  className=' reletive   px-8  z-50 '>
 <div className={styles.body}>
 <BlockContent className={styles.body} blocks={communitiesGlobal} />
         </div>
 </section>
 <section  className=' reletive pl-20   px-8  z-50 '>
 <div className={styles.body}>
 <BlockContent className={styles.body} blocks={fatphobia} />
         </div>
 </section>
 {/*  */}



 <section  className=' reletive flex pt-20   px-8  z-50 '>
 <div className={styles.body}>
 <BlockContent className={styles.body} blocks={housing} />                </div>
 </section>

 <section  className=' reletive flex   px-8  z-50 '>
 <div className={styles.body}>
 <BlockContent className={styles.body} blocks={grief} />
         </div>
 </section>


 <section className=' reletive flex p-5   px-8  z-50 '>
 <div className={styles.body}>
 <BlockContent className={styles.body} blocks={sexualhealth} />
         </div>
 </section>


 <section className=' reletive flex p-5   px-8  z-50 '>
 <div className={styles.body}>
 <BlockContent className={styles.body} blocks={antiblackness} />
         </div>
 </section>

 <section className=' reletive flex p-5   px-8  z-50 '>
 <div className={styles.body}>
 <BlockContent className={styles.body} blocks={fatphobia} />
         </div>
 </section>

 <section className=' reletive flex p-5   px-8  z-50 '>
 <div className={styles.body}>
 <BlockContent className={styles.body} blocks={suicide} />
         </div>
 </section>


 <section className=' reletive flex p-5   px-8  z-50 '>
 <div className={styles.body}>
         <Link href="../resources/resources-for-qtibpoc-healing"><p className="text-2xl  text-center italic pt-10 font-semibold  "> if you’re looking for more resources: click here </p></Link>
         </div>
 </section>

 {showButton && (
 <button onClick={scrollToTop} className={styles.backtotop}>
   &#8679;
 </button>
)}

</div>


             




        {/* <Footer></Footer> */}

            
  </div>


  </section>














  
    </div>
  );
};

export const getServerSideProps = async pageContext => {
  const pageSlug = pageContext.query.slug;
  console.log(pageSlug)


  if (!pageSlug) {
    return {
      notFound: true
    }
  }

  const query = encodeURIComponent(`*[ _type == "crisis" && slug.current == "${pageSlug}" ] { 
    title, phonetextsupport, inperson, communitiesUk, communitiesGlobal, housing,
    grief, sexualhealth, antiblackness, fatphobia, suicide, substancereduction, lgbtqiaherbalism, therapy, movingyourbody, transformativejustice,
}`);

  const url = `https://jgs4s870.api.sanity.io/v1/data/query/production?query=${query}`;

  const result = await fetch(url).then(res => res.json());
  const crisis = result.result[0];

  if (!crisis) {
    return {
      notFound: true
    }
  } else {
    return {
      props: {
        // body: crisis.body,
        title: crisis.title,
        phonetextsupport: crisis.phonetextsupport,
        inperson: crisis.inperson,
        communitiesUk: crisis.communitiesUk,
        communitiesGlobal: crisis.communitiesGlobal,
        housing: crisis.housing,
        grief: crisis.grief,
        sexualhealth: crisis.sexualhealth,
        antiblackness: crisis.antiblackness, 
        fatphobia: crisis.fatphobia,
        suicide: crisis.suicide,
        // substancereduction: crisis.substancereduction,
        // lgbtqiaherbalism: crisis.lgbtqiaherbalism,
        // therapy: crisis.therapy,
        // movingyourbody: crisis.movingyourbody,
      }
    }
  }
};

export default Crisisp;