import imageUrlBuilder from '@sanity/image-url';
import { useState, useEffect } from 'react';
import styles from '../../styles/videoBlogPost.module.css';
import BlockContent from '@sanity/block-content-to-react';
import { Toolbar } from '../../components/toolbar';
import { Aboutnav } from '../../components/aboutnav';
import FooterComponent from '../../components/foottest';
import Footer from '../../components/Footer';
import ReactPlayer from 'react-player'
import Link from 'next/link'
// import Footer from '../../components/Footer';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Head from 'next/head';
 
export const videoBlogPost = ({ name, body, bodytwo, bodythree, bodyfour, bodyfive, bodysix,bodyseven, bodyeight,}) => {
  // const [imageUrl, setImageUrl] = useState('');
 
  // useEffect(() => {
  //   const imgBuilder = imageUrlBuilder({
  //     projectId: 'jgs4s870',
  //     dataset: 'production',
  //   });

    // setImageUrl(imgBuilder.image(image));
  // }, []);

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
        {/* <p className="text-center  font-serif font-light "> u can cry if u want to</p> */}

{/* <section className=" z-50  font-normal text-base pt-5  text-center  ">
      <div className=" text-center   ">
<Link  href="../videoBlogPost/our-story"><a className=' text-xl pl-5 text-center  hover:text-[#dbff00] font-light'>our story</a></Link>
<Link href="../../theteam"><a className=' text-xl pl-5 text-center hover:text-[#dbff00] font-light'>the team</a></Link>
<Link href="../../collaborators"><a className=' pl-5 text-xl text-center hover:text-[#dbff00]  font-light'>collaborators</a></Link>
<Link href="../../faq"><a className=' text-xl pl-5 text-center hover:text-[#dbff00]  font-light'>faqs </a></Link>
</div>
</section> */}


                  {/* <div className='z-0 w-[100%]'>
                      <img src="/2.jpg" alt="image2" />
                  </div> */}

{/* <p className="text-2xl  text-center italic pt-10 font-semibold  "> our story </p>  */}

<div><p className="  text-center text-base  font-light p-5 ">  <BlockContent blocks={body} /> 
</p> </div>


{/* <div><p className="  text-center text-base  font-light p-5 ">  <BlockContent  blocks={bodytwo} />
</p> </div>


<div><p className="  text-center text-base  font-light p-5 ">  <BlockContent  blocks={bodythree} />
</p> </div>


<div><p className="  text-center text-base font-light  p-5 ">   <BlockContent  blocks={bodyfour} />
</p></div>
 

<div><p className="  text-center text-base  font-light  p-5 ">   <BlockContent  blocks={bodyfive} />
</p> 
</div>


<div><p className="  text-center text-base  font-light  p-5 ">   <BlockContent  blocks={bodysix} />
</p> 
</div>

<div><p className="  text-center text-base  font-light  p-5 ">   <BlockContent  blocks={bodyseven} />
</p> 
</div>

<div><p className="  text-center text-base  font-light  p-5 ">   <BlockContent  blocks={bodyeight} />
</p> 
</div> */}







<div className='  mx-auto p-5 '>
        {/* <iframe className=' h-screen w-5/6 z-0' src="https://player.vimeo.com/video/402987081?h=1d50017fb2" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe> */}
        {/* <iframe width="712" height="620" className=' p-10  px-auto mx-auto' src="https://www.youtube.com/embed/5TY_VbQXlkU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
        <iframe width="950" height="500" className='  mx-auto' src="https://www.youtube.com/embed/5TY_VbQXlkU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        {/* <iframe width="1424" height="620" src="https://www.youtube.com/embed/5TY_VbQXlkU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
        </div>

        <Footer></Footer>
        {/* <Link href="https://www.youtube.com/watch?v=5TY_VbQXlkU"><p className="text-2xl  text-center italic pt-10 font-semibold  "> WATCH: chosen family: exploring the importance of LGBTQI+ safe spaces with Aisha Mirza </p></Link> */}
            </div>
            {/* <FooterComponent></FooterComponent>  */}
            
  </div>


  </section>

  

      {/* <div className={styles.main}>
        <section className=' pt-36 border-b-[.5px] border-[#030303] z-50 text-4xl font-normal text-center items-center m-auto flex justify-center pb-5 px-8 font-black '>
        <p className=''> .｡.:*☆ our story </p>
        </section>  */}



        {/* <section className=" z-50 w-screen font-normal text-base mx-auto px-0  ">
      <div className=" flex w-screen  ">
<Link  href="../videoBlogPost/our-story"><a className='  hover:bg-[#dbff00] border-l-[.5px] border-[#030303] rounded-full p-4 m-auto items-center justify-evenly  tracking-wide"'>our story</a></Link>
<Link href="../../theteam"><a className='  hover:bg-[#dbff00] border-l-[.5px] border-[#030303] rounded-full p-4 m-auto items-center justify-evenly tracking-wide"'>the team</a></Link>
<Link href="../../collaborators"><a className='  hover:bg-[#dbff00] border-l-[.5px] border-[#030303] rounded-full p-4 m-auto items-center justify-evenly  tracking-wide"'>collaborators</a></Link>
<Link href="../../faq"><a className='  hover:bg-[#dbff00] border-l-[.5px] border-[#030303] rounded-full p-4 m-auto items-center justify-evenly tracking-wide"'>faqs </a></Link>
</div>
</section> */}





{/* <div className='flex overflow-scroll h-screen'>
        <div className=' object-cover  border-[.5px] border-[#030303] z-0  top-0 cursor-grabbing h-6/6 w-5/6 overflow-hidden'>
              <Carousel zIndex={-2}  dynamicHeight={false} minHeight={5} interval={4000} showThumbs={false} showIndicators={false} showArrows={false} infiniteLoop={true} emulateTouch={true} swipeable={true} >
                
        
                  <div className='z-0 w-[160%]'>
                      <img src="/2.jpg" alt="image2" />
  
                  </div>
                  <div className='z-0 w-[160%]'>
                      <img src="/3.jpg" alt="image3"/>
  
                  </div>
                  <div className='z-0 w-[160%]'>
                      <img src="/4.jpg" alt="image4"/>
  
                  </div>
                  <div className='z-0 w-[160%]'>
                      <img src="/5.jpg" alt="image5"/>
  
                  </div>
                
              </Carousel>
            </div>
            <div className='float-right right-0 overflow-scroll border-[.5px] border-[#030303]  w-3/6 h-6/6 top-0 font-normal text-lg '>
          <BlockContent blocks={description} />
        </div>

        
            </div> */}




       
            {/* <div className='float-right right-0 overflow-scroll border-[.5px] border-[#030303]  w-3/6 h-4/6 top-0 font-normal text-sm '>
          <BlockContent blocks={description} />
        </div> */}

        
{/* <section className=' float-left border-[.5px] border-[#030303] reletive flex justify-center pt-12 lg:pt-62 px-8 z-50 '>
        <div className='float-left font-light text-xl '>
          <BlockContent blocks={description} />
        </div>
        </section> */}

        {/* <section className=' text-[48px]  font-black text-center items-center m-auto flex justify-center pt-12 lg:pt-62 px-8'>
        <p className=''> <a href="https://vimeo.com/402987081">QB FILM gal-dem x Levi&#039;s x Queer Britain: Aisha Mirza &amp; DJ Ritu</a> from <a href="https://vimeo.com/queerbritain">Queer Britain</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
        </section>  */}

        {/* <div className='border-[.5px] border-[#030303] '>
        <iframe className=' object-cover h-screen w-screen z-0' src="https://player.vimeo.com/video/402987081?h=1d50017fb2" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
        </div> */}

      {/* </div> */}

      {/* <FooterComponent></FooterComponent> */}
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

  const query = encodeURIComponent(`*[ _type == "videoBlogPost" && slug.current == "${pageSlug}" ]{ 
 name, body, bodytwo,
    bodythree, bodyfour, bodyfive , bodysix,
    bodyseven, bodyeight
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
        bodytwo: post.bodytwo,
      bodythree: post.bodythree,
      bodyfour: post.bodyfour,
      bodyfive: post.bodyfive,
      bodysix: post.bodysix,
      bodyseven: post.bodyseven,
      bodyeight: post.bodyeight,
      }
    }
  }
};

export default videoBlogPost;