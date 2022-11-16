import imageUrlBuilder from '@sanity/image-url';
import { useState, useEffect } from 'react';
import styles from '../../styles/videoBlogPost.module.css';
import BlockContent from '@sanity/block-content-to-react';
import { Toolbar } from '../../components/toolbar';
import Footer from '../../components/Footer';
import Link from 'next/link';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';
import Head from 'next/head';
 
// bodytwo, bodythree, bodyfour, bodyfive, bodysix,bodyseven, bodyeight,
export const videoBlogPost = ({ name, body, summary, url, image}) => {
  
  const [imageUrl, setImageUrl] = useState('');
  useEffect(() => {
    const imgBuilder = imageUrlBuilder({
      projectId: 'jgs4s870',
      dataset: 'production',
    });

    setImageUrl(imgBuilder.image(image));
  }, []);

  return (
    
    <div>
  <Head>
  <title> .｡.:*☆ our story</title>
        </Head>

      <Toolbar />
      
      <section className="h-screen relative hidden md:block">
{/* <img className=" w-2/6 absolute drop-shadow-[0_0px_5px_red]" src="https://i.ibb.co/Q6g7Tk0/Masturbator-White-Thick-Transparent.png" />  */}




  <div className='flex h-screen'>


 {/* --------------------------------------------  right */}
 


  

{/* -------------------------------------------- left */}
        <div className=' pt-36 z-0 p-5 top-0 mx-auto h-screen w-9/12 overflow-scroll'>
          
        <img className={styles.figure} src="https://i.ibb.co/sFyFWsf/Bald.png"/>
        <img className={styles.figure2} src="https://i.ibb.co/Q6g7Tk0/Masturbator-White-Thick-Transparent.png" /> 
        {/* <Toolbar />  */}

        <p className={styles.crytext}> .｡.:*☆ our story ☆*: </p> 


<div><p className="  text-center text-base  font-light p-5 ">  <BlockContent blocks={body} /> 
</p> </div>







<div className='  mx-auto p-5 '>
        <iframe width="950" height="500" className='  mx-auto' src="https://www.youtube.com/embed/5TY_VbQXlkU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>

        {/* <Footer></Footer> */}
            </div>            
  </div>


  </section>

  
      {/* <Footer></Footer>  */}
     </div>

    
  );
};

export const getServerSideProps = async pageContext => {
  const pageSlug = pageContext.query.slug;
  
  if (!pageSlug) {
    return {
      notFound: true
    }
  }


      //  bodytwo, bodythree, bodyfour, bodyfive , bodysix, bodyseven, bodyeight
  const query = encodeURIComponent(`*[ _type == "videoBlogPost" && slug.current == "${pageSlug}" ]{ 
 name, body,summary, url, image,
}`);
  const url = `https://jgs4s870.api.sanity.io/v1/data/query/production?query=${query}`;

  const result = await fetch(url).then(res => res.json());
  const post = result.result[0];

  if (!post) {
    return {
      notFound: true
    }
  } else {
    return {
      props: {
        // description: post.description,
        name: post.name,
        body: post.body,
        summary: post.summary,
        url: post.url,
        image: post.image,
      // bodytwo: post.bodytwo,
      // bodythree: post.bodythree,
      // bodyfour: post.bodyfour,
      // bodyfive: post.bodyfive,
      // bodysix: post.bodysix,
      // bodyseven: post.bodyseven,
      // bodyeight: post.bodyeight,
      }
    }
  }
};

export default videoBlogPost;