import imageUrlBuilder from '@sanity/image-url';
// import client from './sanityClient'
import { useState, useEffect } from 'react';
import styles from '../../styles/Post.module.css';
import BlockContent from '@sanity/block-content-to-react';
import { Toolbar } from '../../components/toolbar';
import { sanityClient } from '@sanity/client'
import Link from "next/link"
import Footer from '../../components/Footer';
import Head from 'next/head';
import CarouselComponent from "../../components/carousel";


export const Pressp = ({ title, bodyfirst , bodypanels,  body, bodytwo,
    bodythree, images , imagestwo, bodylinks }) => {
  const [imageUrl, setImageUrl] = useState('');
  console.log(title, bodyfirst, bodypanels,  body, bodytwo,
    bodythree,);


    useEffect(() => {
      const imgBuilder = imageUrlBuilder({
        projectId: 'jgs4s870',
        dataset: 'production',
      });
    console.log(images)
    // setImageUrl(imgBuilder.image(mainImage));
  
    
  
      
  }, []);
  // useEffect(() => {
  //   const imgBuilder = imageUrlBuilder({
  //     projectId: 'jgs4s870',
  //     dataset: 'production',
  //   });

  //   setImageUrl(imgBuilder.image(images));
  // }, [images]);

  return (
    <div>
             <Head>
              <title>press</title>
             </Head>
      <Toolbar /> 






      <section className="h-screen relative hidden md:block">

{/* --------------------------------------------  right */}

         <img className={styles.swerl} src="https://i.ibb.co/ZR9zG0V/Miserymeets09-29-Family.png" /> 


{/* -------------------------------------------- left */}
       <div className='  z-0 p-5 top-0 h-screen w-9/12 mx-auto pt-36'>
         
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
       
       {/* <p className="text-6xl font-semibold text-left text-[#ff00000] justify-left  "> 💧 u can cry if u want to 💧 </p>  */}
       {/* <p className="text-left object-left pt-20 font-serif font-light "> u can cry if u want to</p> */}
       <p className={styles.crytext}> {title}</p> 

<div className={styles.wrapper}>

 
      <section className='  max-w-2xl list-none text-center mx-auto pt-10 text-2xl font-thin '>
                <div className={styles.links}>
            <div className="  text-3xl tracking-wide px-0 ">
          <div className="  ">

      <li><Link href="#press">☆ press ☆</Link></li>
      <li><Link href="#panels">☆ panels ☆</Link></li>
      <li><Link href="#awards">☆ awards ☆</Link></li>
      <div></div>
      <li><Link href="#research">☆ research ☆</Link></li>
      <div></div>
      <li><Link href="#feedback">☆ feedback ☆</Link></li>
      </div>
      </div>
      </div>
      </section>



       {/* <div className=' flex w-auto pt-5 h-auto '>
         {mappedPosts.length ? mappedPosts.map((p, index) => (
           <div onClick={() => router.push(`/eventsComming/${p.slug.current}`)} key={index}>
             <div className='z-0'>
                     <img className='flex w-80 h-auto p-1 ' src={p.image} />
                 </div>
           </div>
         )) : <>No Posts Yet</>}
       </div> */}


<div className={styles.main}>




    {/* <div className={`container mx-auto flex items-left  ${styles.wrapper}`}>
       <div className={"flex-auto flex-col md:flex-row items-left bg-white rounded-xl m-5 p-3 md:m-10 " + styles.shadow}> */}
       <div className=' text-l  font-light  text-left tracking-wide'>
       <h1 id="press" className=' py-8 tracking-wide  text-5xl font-semibold '>press </h1>
         <BlockContent className={styles.body} blocks={bodypanels} />
       </div>
       {/* </div>
   </div> */}


      <div className=' text-l  font-light indent-5 text-left tracking-wide'>
            <h1 id="panels" className=' py-8 tracking-wide  text-5xl font-semibold '>panels </h1>
            </div>
            <div className={styles.column}>
      <div className={styles.subimagessection}>
          <CarouselComponent images={imagestwo} />
      </div>
      <p className=' text-l  font-light  text-left tracking-wide underline '>
        <BlockContent className='list-decimal' blocks={bodylinks} />
        </p>
      </div>


       {/* <div className={`container mx-auto flex items-left  ${styles.wrapper}`}>
       <div className={"flex-auto flex-col md:flex-row items-left bg-white rounded-xl m-5 p-3 md:m-10 " + styles.shadow}> */}
       <div className=' text-l  font-light  text-left tracking-wide'>
       <h1 id="awards" className=' py-8 tracking-wide  text-5xl font-semibold '>awards</h1>
         <p><BlockContent className={styles.body} blocks={body} /></p>
       </div>
   {/* //     </div>
   // </div> */}


       {/* <div className={`container mx-auto flex items-left  ${styles.wrapper}`}>
       <div className={"flex-auto flex-col md:flex-row items-left bg-white rounded-xl m-5 p-3 md:m-10 " + styles.shadow}> */}
       <div className=' text-l font-light text-left  tracking-wide'>
       <h1 id="research" className=' py-8 tracking-wide  text-5xl font-semibold '>research</h1>
         <BlockContent className={styles.body} blocks={bodytwo} />
       </div>
   {/* //     </div>
   // </div> */}

 


<div className=' text-l  font-light  text-left tracking-wide'>
       <h1 id="feedback" className=' py-8 tracking-wide  text-5xl font-semibold '>feedback</h1>
       <div className={styles.column}>
 <div className={styles.subimagessection}>
 <CarouselComponent images={images} />
       </div>
 </div>        
 
</div>


     </div>
            



{/* <Footer></Footer> */}
           </div>

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

  const query = encodeURIComponent(`*[ _type == "press" && slug.current == "${pageSlug}" ] { 
    title, body,bodyfirst, bodytwo,bodypanels, images, imagestwo, bodylinks,
}`);

  const url = `https://jgs4s870.api.sanity.io/v1/data/query/production?query=${query}`;

  const result = await fetch(url).then(res => res.json());
  const press = result.result[0];

  if (!press) {
    return {
      notFound: true
    }
  } else {
    return {
      props: {
        body: press.body,
        title: press.title,
        images: press.images,
        bodytwo: press.bodytwo,
      // bodythree: press.bodythree,
      // imagestwo: press.imagestwo,
      bodyfirst: press.bodyfirst,
      bodypanels: press.bodypanels,
      imagestwo: press.imagestwo,
    //   venue: press.venue,
        // address: press.address,
        // coordinates: press.coordinates,
        bodylinks: press.bodylinks,
    //   category: press.category,
      }
    }
  }
};

export default Pressp;