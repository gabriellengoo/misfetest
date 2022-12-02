import imageUrlBuilder from '@sanity/image-url';
// import client from './sanityClient'
import { useState, useEffect } from 'react';
import styles from '../../styles/Post.module.css';
import BlockContent from '@sanity/block-content-to-react';
import { Toolbar } from '../../components/toolbar';
import { sanityClient } from '@sanity/client'
// import Image from "../../components/Image"
import Link from "next/link"
import Head from 'next/head';
import Footer from '../../components/Footer';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import { browserName, CustomView } from "react-device-detect";

export const getin = ({ title, body, bodytwo,
    bodythree, bodyfour, bodyfive }) => {
//   const [imageUrl, setImageUrl] = useState('');
  console.log(title, body, bodytwo,
    bodythree, bodyfour, bodyfive,);

//   useEffect(() => {
//     const imgBuilder = imageUrlBuilder({
//       projectId: 'jgs4s870',
//       dataset: 'production',
//     });

    // setImageUrl(imgBuilder.image(images));
//   }, [images, imagestwo,]);

  return (
    <div>
             <Head>
<title>{title}</title>
      </Head>
      <Toolbar />




      <MobileView>
      <section className=" mx-auto  ">

<div className='  z-0 p-5 '>
  
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


<div className='fixed z-[-1]'>
<p className={styles.crytext2mobile}> {title}</p> 
</div>

<div className=' pt-32 max-w-3xl mx-auto'>
<div className={styles.wrappermobilepress}> 
{/* <p className="text-6xl font-semibold text-left text-[#ff00000] justify-center  "> 💧 u can cry if u want to 💧 </p>  */}
{/* <p className="text-center object-center pt-20 font-serif font-light "> u can cry if u want to</p> */}
{/* -webkit-text-stroke: 2px black; */}


<p className=' font-light p-3'>
it’s so affirming to hear from people who want to work with misery in some capacity. as you might have seen in our
<Link className=' font-semibold p-3 hover:text-[#85ff85]' href="../../videoBlogPost/our-story"> ☆‘about’☆ </Link>
section, we have a small core   
<Link className=' font-semibold p-3 hover:text-[#85ff85]' href="../../theteam"> ☆team☆</Link>
supported by many
<Link className=' font-semibold p-3 hover:text-[#85ff85]' href="../collaborators"> ☆collaborators☆ </Link>
we love and work with regularly. 
</p> 



{/* <div className={styles.main}> */}
{/* <div className={`container mx-auto flex items-center  ${styles.wrapper}`}>
<div className={"flex-auto flex-col md:flex-row items-center bg-white rounded-xl m-5 p-3 md:m-10 " + styles.shadow}> */}
<div className=''>
<h1 className=' py-8 tracking-wide  text-5xl font-semibold'>join the team</h1>
  <BlockContent className={styles.body} blocks={body} />
</div>
{/* </div>
</div> */}


{/* <div className={`container mx-auto flex items-center  ${styles.wrapper}`}>
<div className={"flex-auto flex-col md:flex-row items-center bg-white rounded-xl m-5 p-3 md:m-10 " + styles.shadow}> */}
<div className=''>
<h1 className=' py-8 tracking-wide  text-5xl font-semibold'>hire us</h1>
  <BlockContent className={styles.body} blocks={bodytwo} />
</div>
{/* </div>
</div> */}

{/* <div className={`container mx-auto flex items-center  ${styles.wrapper}`}>
<div className={"flex-auto flex-col md:flex-row items-center bg-white rounded-xl m-5 p-3 md:m-10 " + styles.shadow}> */}
<div className=''>
<h1 className=' py-8 tracking-wide  text-5xl font-semibold'>donate to us</h1>
  <BlockContent className={styles.body} blocks={bodythree} />
  <div className="beacon-form" data-account="nsun" data-form="3fa92214"></div>
</div>
{/* </div>
</div> */}

{/* <div className={`container mx-auto flex items-center  ${styles.wrapper}`}>
<div className={"flex-auto flex-col md:flex-row items-center bg-white rounded-xl m-5 p-3 md:m-10 " + styles.shadow}> */}
<div className=''>
<h1 className=' py-8 tracking-wide  text-5xl font-semibold'>share our work with someone</h1>
  <BlockContent className={styles.body} blocks={bodyfour} />
</div>
{/* </div>
</div> */}

{/* <div className={`container mx-auto flex items-center  ${styles.wrapper}`}>
<div className={"flex-auto flex-col md:flex-row items-center bg-white rounded-xl m-5 p-3 md:m-10 " + styles.shadow}> */}
<div className='pb-8'>
<h1 className=' py-8  tracking-wide  text-5xl font-semibold'>give us feedback</h1>
  <BlockContent className={styles.body} blocks={bodyfive} />
</div>
{/* </div>
</div> */}


</div> 
    
</div>


<Footer></Footer>
    </div>

</section>
      </MobileView>


      <BrowserView>
      <section className=" mx-auto pt-36  ">

      <div className='  z-0 p-5 '>
        
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


      <div className=' max-w-3xl mx-auto'>
      <div className={styles.wrapper}> 
      {/* <p className="text-6xl font-semibold text-left text-[#ff00000] justify-center  "> 💧 u can cry if u want to 💧 </p>  */}
      {/* <p className="text-center object-center pt-20 font-serif font-light "> u can cry if u want to</p> */}
      <p className={styles.crytext3}> {title}</p> 
      {/* -webkit-text-stroke: 2px black; */}


      <p className=' font-light p-3'>
      it’s so affirming to hear from people who want to work with misery in some capacity. as you might have seen in our
      <Link className=' font-semibold p-3 hover:text-[#85ff85]' href="../../videoBlogPost/our-story"> ☆‘about’☆ </Link>
      section, we have a small core   
      <Link className=' font-semibold p-3 hover:text-[#85ff85]' href="../../theteam"> ☆team☆</Link>
      supported by many
      <Link className=' font-semibold p-3 hover:text-[#85ff85]' href="../collaborators"> ☆collaborators☆ </Link>
      we love and work with regularly. 
      </p> 
      {/* <div className=' flex w-auto pt-5 h-auto '>
        {mappedPosts.length ? mappedPosts.map((p, index) => (
          <div onClick={() => router.push(`/eventsComming/${p.slug.current}`)} key={index}>
            <div className='z-0'>
                    <img className='flex w-80 h-auto p-1 ' src={p.image} />
                </div>
          </div>
        )) : <>No Posts Yet</>}
      </div> */}


      {/* <div className={styles.main}> */}
      {/* <div className={`container mx-auto flex items-center  ${styles.wrapper}`}>
      <div className={"flex-auto flex-col md:flex-row items-center bg-white rounded-xl m-5 p-3 md:m-10 " + styles.shadow}> */}
      <div className=''>
      <h1 className=' py-8 tracking-wide  text-5xl font-semibold'>join the team</h1>
        <BlockContent className={styles.body} blocks={body} />
      </div>
      {/* </div>
      </div> */}


      {/* <div className={`container mx-auto flex items-center  ${styles.wrapper}`}>
      <div className={"flex-auto flex-col md:flex-row items-center bg-white rounded-xl m-5 p-3 md:m-10 " + styles.shadow}> */}
      <div className=''>
      <h1 className=' py-8 tracking-wide  text-5xl font-semibold'>hire us</h1>
        <BlockContent className={styles.body} blocks={bodytwo} />
      </div>
      {/* </div>
      </div> */}

      {/* <div className={`container mx-auto flex items-center  ${styles.wrapper}`}>
      <div className={"flex-auto flex-col md:flex-row items-center bg-white rounded-xl m-5 p-3 md:m-10 " + styles.shadow}> */}
      <div className=''>
      <h1 className=' py-8 tracking-wide  text-5xl font-semibold'>donate to us</h1>
        <BlockContent className={styles.body} blocks={bodythree} />
        <div className="beacon-form" data-account="nsun" data-form="3fa92214"></div>
      </div>
      {/* </div>
      </div> */}

      {/* <div className={`container mx-auto flex items-center  ${styles.wrapper}`}>
      <div className={"flex-auto flex-col md:flex-row items-center bg-white rounded-xl m-5 p-3 md:m-10 " + styles.shadow}> */}
      <div className=''>
      <h1 className=' py-8 tracking-wide  text-5xl font-semibold'>share our work with someone</h1>
        <BlockContent className={styles.body} blocks={bodyfour} />
      </div>
      {/* </div>
      </div> */}

      {/* <div className={`container mx-auto flex items-center  ${styles.wrapper}`}>
      <div className={"flex-auto flex-col md:flex-row items-center bg-white rounded-xl m-5 p-3 md:m-10 " + styles.shadow}> */}
      <div className='pb-8'>
      <h1 className=' py-8  tracking-wide  text-5xl font-semibold'>give us feedback</h1>
        <BlockContent className={styles.body} blocks={bodyfive} />
      </div>
      {/* </div>
      </div> */}








      </div> 
          
      </div>


      <Footer></Footer>
          </div>

      </section>
      </BrowserView>




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

  const query = encodeURIComponent(`*[ _type == "getinvolved" && slug.current == "${pageSlug}" ] { 
    title, body, bodytwo,
    bodythree, bodyfour, bodyfive
}`);

  const url = `https://jgs4s870.api.sanity.io/v1/data/query/production?query=${query}`;

  const result = await fetch(url).then(res => res.json());
  const getinvolved = result.result[0];

  if (!getinvolved) {
    return {
      notFound: true
    }
  } else {
    return {
      props: {
        body: getinvolved.body,
        title: getinvolved.title,
        bodytwo: getinvolved.bodytwo,
      bodythree: getinvolved.bodythree,
      bodyfour: getinvolved.bodyfour,
      bodyfive: getinvolved.bodyfive,
    //   venue: getinvolved.venue,
        // address: getinvolved.address,
        // coordinates: getinvolved.coordinates,
    //     url: getinvolved.url,
    //   category: getinvolved.category,
      }
    }
  }
};

export default getin;