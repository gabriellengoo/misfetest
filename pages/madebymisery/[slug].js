import imageUrlBuilder from '@sanity/image-url';
import { useState, useEffect } from 'react';
import styles from '../../styles/Post.module.css';
import BlockContent from '@sanity/block-content-to-react';
import { Toolbar } from '../../components/toolbar';
import { sanityClient } from '@sanity/client'
import Link from "next/link";
import Head from 'next/head';
import Footer from '../../components/Footer';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import { browserName, CustomView } from "react-device-detect";

export const Madebymisery = ({ title, body, bodytwo,
    bodythree, }) => {
      // const mixtapesAmount = mixtapes.length
  // const [imageUrl, setImageUrl] = useState('');

  // useEffect(() => {
  //   const imgBuilder = imageUrlBuilder({
  //     projectId: 'jgs4s870',
  //     dataset: 'production',
  //   });

  //   setImageUrl(imgBuilder.image(images));
  // }, [images]);


  // console.log(videocont)

  return (
    <div>
             <Head>
       {/* <script src="https://unpkg.com/react@16.12.0/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@16.12.0/umd/react-dom.development.js"></script> */}
<title>made by misery</title>
      </Head>
      <Toolbar /> 




      <MobileView>
      <section className=" relative ">

<div className=' mx-auto z-0 p-5 top-0 '>
  
<img className={styles.figure} src="https://i.ibb.co/sFyFWsf/Bald.png"/>
<img className={styles.figure2} src="https://i.ibb.co/Q6g7Tk0/Masturbator-White-Thick-Transparent.png" /> 

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


{/* <Toolbar />  */}

        <div className=" fixed z-[-1] flex-auto mb-2 w-full text-left text[red]">
            <h1 className={styles.crytext2}>{title}</h1>
        </div> 


        <div className=" z-[1000]">
          <div className={styles.wrapper}>


            <div className=" list-[none] text-left  object-left text-2xl font-thin  ">
        {/* <Link  href="#memes"><a className=' hover:text-[#7da392]'>☆ memes </a></Link> */}
        <Link href="#radio">☆ radio </Link>
        <Link href="#zine">☆ zine </Link>
        <Link href="#mixtapes">☆ mixtapes </Link>
        <Link href="#video">☆ video</Link>
            </div>



    <div id="zine" className=' pt-10 m-auto text-large font-light'>
    <h1 className="flex-none  text-left justify-center font-semibold border-b-[.5px] text-5xl tracking-wide">zine</h1>
    <p className='text-left justify-center font-base '> <BlockContent blocks={body} /></p>
    {/* <a href="https://heyzine.com/flip-book/86a7756ad4.html" target="_BLANK" class="heyzine-link fp-link">
      <img src="https://cdnc.heyzine.com/flip-book/cover/86a7756ad4.jpg" class="fp-thumb"
    /></a> */}
    <iframe scrolling="no"  src="https://heyzine.com/flip-book/86a7756ad4.html" className={styles.zine} ></iframe>
      </div>





      <div id="mixtapes" className=' pt-10 m-auto text-large font-light'>
    <h1 className="flex-none  text-left justify-center font-semibold border-b-[.5px] text-5xl tracking-wide">mixtapes</h1>
    {/* <p className=' text-left justify-center font-base text-2xl font-light tracking-tighter '>misery has a mixtape for every occasion. treat yourself to these communally compiled wonders</p> */}
    <p className='text-left justify-center font-base '><BlockContent blocks={bodytwo} /></p>
    <div className='text-left pl-5 justify-center font-base '>
    <Link  href="../mixtapes" >see them here ↗ </Link>
    </div>
      </div>






      <div id="videos" className=' pt-10 m-auto text-large font-light'>
    <h1 className="flex-none  text-left justify-center font-semibold border-b-[.5px] text-5xl tracking-wide">Videos</h1>
    {/* hosted by {videopart?.name} */}
                              {/* <div className={styles.songcontainer}>
                                    <div className={styles.songinfo}>
                                        <div className={styles.songlink} >
                                                <div>
                                                <p>{summary}</p>
                                                <Link className={styles.songartist} href={url}>
                                                  <img className={styles.songimg} src={p.image} />
                                                  <img className={styles.songimg} src={image} />
                                                  <div className={styles.play}>▶︎</div>
                                                </Link>   
                                                </div>
                                        </div>
                                    </div>
                              </div> */}
      </div>





        <div id="radio" className=' m-auto font-light'>
    <h1 className="flex-none pt-10 text-left justify-center font-semibold border-b-[.5px] text-5xl tracking-wide">radio</h1>
    <div className='z-0  pt-5 mx-auto w-12/12'>
                  <img src="https://i.ibb.co/6tzptwJ/radio3-1.jpg" alt="miseryparty" />
              </div>
    <p className='text-left justify-center font-base '><BlockContent blocks={bodythree} /></p>
      </div>


      {/* <div className=' m-auto text-xl font-light'>
    <h1 id="memes" className="flex-none pt-10 text-left justify-center font-semibold border-b-[.5px] text-5xl tracking-wide">memes</h1>
    {imageUrl && <img className={styles.images} src={imageUrl} />}
      </div> */}


    {/* <Footer></Footer> */}
        </div>            
</div>
</div>

</section>
      </MobileView>


      <BrowserView>
      <section className=" relative ">

        <div className=' mx-auto z-0 p-5 top-0  w-9/12 pt-36 max-w-4xl'>
          
        <img className={styles.figure} src="https://i.ibb.co/sFyFWsf/Bald.png"/>
        <img className={styles.figure2} src="https://i.ibb.co/Q6g7Tk0/Masturbator-White-Thick-Transparent.png" /> 
        
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


        {/* <Toolbar />  */}
        {/* <p className="text-center  font-serif font-light "> u can cry if u want to</p> */}
        <div className={styles.wrapper}>
        <div className=" flex-auto mb-2 w-full text-left text[red]">
                    <h1 className={styles.crytext2}>{title}</h1>
                    {/* {faqComponents} */}
                </div> 

                <div className=" list-[none] text-left  object-left text-2xl font-thin  ">
            {/* <Link  href="#memes"><a className=' hover:text-[#7da392]'>☆ memes </a></Link> */}
            <Link href="#radio">☆ radio </Link>
            <Link href="#zine">☆ zine </Link>
            <Link href="#mixtapes">☆ mixtapes </Link>
            <Link href="#video">☆ video</Link>
                </div>



<div id="zine" className=' pt-10 m-auto text-large font-light'>
        <h1 className="flex-none  text-left justify-center font-semibold border-b-[.5px] text-5xl tracking-wide">zine</h1>
        <p className='text-left justify-center font-base '> <BlockContent blocks={body} /></p>
        {/* <a href="https://heyzine.com/flip-book/86a7756ad4.html" target="_BLANK" class="heyzine-link fp-link">
          <img src="https://cdnc.heyzine.com/flip-book/cover/86a7756ad4.jpg" class="fp-thumb"
         /></a> */}
         <iframe scrolling="no"  src="https://heyzine.com/flip-book/86a7756ad4.html" className={styles.zine} ></iframe>
          </div>
        




          <div id="mixtapes" className=' pt-10 m-auto text-large font-light'>
        <h1 className="flex-none  text-left justify-center font-semibold border-b-[.5px] text-5xl tracking-wide">mixtapes</h1>
        {/* <p className=' text-left justify-center font-base text-2xl font-light tracking-tighter '>misery has a mixtape for every occasion. treat yourself to these communally compiled wonders</p> */}
        <p className='text-left justify-center font-base '><BlockContent blocks={bodytwo} /></p>
        <div className='text-left pl-5 justify-center font-base '>
        <Link  href="../mixtapes" >see them here ↗ </Link>
        </div>
          </div>


       



          <div id="videos" className=' pt-10 m-auto text-large font-light'>
        <h1 className="flex-none  text-left justify-center font-semibold border-b-[.5px] text-5xl tracking-wide">Videos</h1>
        {/* hosted by {videopart?.name} */}
                                  {/* <div className={styles.songcontainer}>
                                        <div className={styles.songinfo}>
                                            <div className={styles.songlink} >
                                                    <div>
                                                    <p>{summary}</p>
                                                    <Link className={styles.songartist} href={url}>
                                                      <img className={styles.songimg} src={p.image} />
                                                      <img className={styles.songimg} src={image} />
                                                      <div className={styles.play}>▶︎</div>
                                                    </Link>   
                                                    </div>
                                            </div>
                                        </div>
                                  </div> */}
          </div>





            <div id="radio" className=' m-auto font-light'>
        <h1 className="flex-none pt-10 text-left justify-center font-semibold border-b-[.5px] text-5xl tracking-wide">radio</h1>
        <div className='z-0  pt-5 mx-auto w-12/12'>
                      <img src="https://i.ibb.co/6tzptwJ/radio3-1.jpg" alt="miseryparty" />
                  </div>
        <p className='text-left justify-center font-base '><BlockContent blocks={bodythree} /></p>
          </div>


          {/* <div className=' m-auto text-xl font-light'>
        <h1 id="memes" className="flex-none pt-10 text-left justify-center font-semibold border-b-[.5px] text-5xl tracking-wide">memes</h1>
        {imageUrl && <img className={styles.images} src={imageUrl} />}
          </div> */}


        {/* <Footer></Footer> */}
            </div>            
  </div>


      </section>
      </BrowserView>

      <div >

      


      </div>


      {/* <FooterComponent></FooterComponent> */}
      {/* <Footer></Footer>  */}
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

  const query = encodeURIComponent(`*[ _type == "madebymisery" && slug.current == "${pageSlug}" ] { 
    title, body, bodytwo,
    bodythree, 
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
        // images: press.images,
        // mainImage: press.mainImage,
        bodytwo: press.bodytwo,
      bodythree: press.bodythree,
      // videopart: press. videopart,
      // videocont: press.videocont,
      // mixtapes: press.mixtapes,
      }
    }
  }
};

export default Madebymisery;