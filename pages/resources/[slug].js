import imageUrlBuilder from '@sanity/image-url';
import { useState, useEffect } from 'react';
import styles from '../../styles/Post.module.css';
import BlockContent from '@sanity/block-content-to-react';
import { Toolbar } from '../../components/toolbar';
import { sanityClient } from '@sanity/client'
import Link from "next/link"
import Footer from '../../components/Footer';
import Head from 'next/head';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import { browserName, CustomView } from "react-device-detect";

export const Resourcesp = ({ title, phonetextsupport, inperson, communitiesUk, communitiesGlobal, housing, grief, sexualhealth, antiblackness, fatphobia,
  suicide,
  substancereduction
  ,lgbtqiaherbalism 
  ,therapy
  ,movingyourbody
  ,transformativejustice  }) => {


  // console.log( title, phonetextsupport, inperson, communitiesUk, communitiesGlobal, housing,
  //   ,);
  // // The back-to-top button is hidden at the beginning
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
        <title>Resources for qtibpoc healing</title>
      </Head>
      <Toolbar /> 




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
  

      <MobileView>
      <section className=" ">

<div className='  z-0  top-0  mx-auto '>
<div className={styles.wrappermobileres}>    

          <div className=" ">
                      <h1 className={styles.crytext2}>{title}</h1>
                      </div>  

<div className=' '>
          <div className='  m-auto text-xl font-light'>
          <Link href="../crisis/crisis">*IF UR IN CRISIS CLICK HERE* ↗</Link>
            </div>
                  
                  <div className='  m-auto text-xl font-light'>
        <Link target="_blank" href="https://philome.la/jace_harr/you-feel-like-shit-an-interactive-self-care-guide/play/index.html">&quot;you feel like shit&quot; interactive self care guide ↗</Link>
          </div>
          </div>


      
        <section className='   list-none   pt-2 text-2xl font-thin '>
            <div className={styles.links}>
        <div className="  text-xl  px-0 ">
      <div className="  ">

<li><Link  href="#phonetextsupport">☆ phone/text support ☆</Link></li>
<li><Link href="#inperson">☆ in-person london-based support ☆</Link></li>
<li><Link href="#communitiesUk">☆ communities & collectives (uk) ☆</Link></li>
<div></div>
<li><Link href="#communitiesGlobal">☆ communities & collectives (global) ☆</Link></li>
<div></div>
<li><Link href="#housing">☆ housing (london/uk) ☆</Link></li>
</div>
</div>
</div>
</section>
<section className='  list-none  mx-auto  text-2xl font-thin '>
            <div className={styles.links}>
        <div className="  text-xl  px-0 ">
      <div className="  ">
      <li><Link  href="#grief">☆ grief ☆</Link></li>
      <li><Link href="#sexual">☆ sexual health ☆</Link></li>
      <li><Link href="#anti">☆ anti-blackness ☆</Link></li>
<div></div>
<li><Link href="#fatphobia">☆ fatphobia ☆</Link></li>
<div></div>
<li><Link href="#suicide">☆ suicide ☆</Link></li>
</div>
</div>
</div>
</section>
<section className='  list-none  mx-auto text-2xl font-thin '>
            <div className={styles.links}>
        <div className="  text-xl  px-0 ">
      <div className="  ">
      <li><Link  href="#substance">☆ substance use/harm reduction ☆</Link></li>
      <li><Link href="#lgbtqia">☆ lgbtqia+ & trauma herbalism ☆</Link></li>
      <li><Link href="#therapy">☆ therapy ☆</Link></li>
<div></div>
<li><Link href="#queer">☆ queer and trans friendly: moving your body! ☆</Link></li>
<div></div>
<li><Link href="#transformative">☆ transformative justice ☆</Link></li>
</div>
</div>
</div>
</section>


          <section id="phonetextsupport" className=' reletive flex  pt-12 lg:pt-62  z-50 '>
        <div className={styles.body}>
                    <h1 className='  py-8 tracking-wide  text-5xl font-semibold '>phone/text support</h1>
          <BlockContent blocks={phonetextsupport} />
        </div>
        </section>


        <section id="inperson" className=' reletive flex  pt-12 lg:pt-62   z-50 '>
        <div className={styles.body}>
                    <h1 className='  py-8 tracking-wide  text-5xl font-semibold '>in-person london-based support</h1>
          <BlockContent blocks={inperson} />
        </div>
        </section>


        <section id="communitiesUk" className=' reletive flex  pt-12 lg:pt-62  z-50 '>
        <div className={styles.body}>
                    <h1 className='  py-8 tracking-wide  text-5xl font-semibold '>communities & collectives (uk)</h1>
          <BlockContent blocks={communitiesUk} />
        </div>
        </section>



        <section id="communitiesGlobal" className=' reletive flex  pt-12 lg:pt-62  z-50  '>
        <div className={styles.body}>
                    <h1 className='  py-8 tracking-wide  text-5xl font-semibold '>communities & collectives (global)</h1>
          <BlockContent className={styles.body} blocks={communitiesGlobal} />
        </div>
        </section>




        <section id="housing" className=' reletive flex  pt-12 lg:pt-62  z-50 '>
        <div className={styles.body}>
                    <h1 className='  py-8 tracking-wide  text-5xl font-semibold '>housing (london/uk)</h1>
          <BlockContent className={styles.body} blocks={housing} />
        </div>
        </section>


        <section id="grief" className=' reletive flex  pt-12 lg:pt-62  z-50  '>
        <div className={styles.body}>
                    <h1 className='  py-8 tracking-wide  text-5xl font-semibold '>grief</h1>
          <BlockContent className={styles.body} blocks={grief} />
        </div>
        </section>

        <section id="sexual" className=' reletive flex  pt-12 lg:pt-62  z-50  '>
        <div className={styles.body}>
                    <h1 className='  py-8 tracking-wide  text-5xl font-semibold '>sexual health</h1>
          <BlockContent className={styles.body} blocks={sexualhealth} />
        </div>
        </section>

        <section id="anti" className=' reletive flex  pt-12 lg:pt-62 z-50  '>
        <div className={styles.body}>
                    <h1 className='  py-8 tracking-wide  text-5xl font-semibold '>anti-blackness</h1>
          <BlockContent className={styles.body} blocks={antiblackness} />
        </div>
        </section>

        <section id="fatphobia" className=' reletive flex  pt-12 lg:pt-62 z-50  '>
        <div className={styles.body}>
                    <h1 className='  py-8 tracking-wide  text-5xl font-semibold '>fatphobia</h1>
          <BlockContent className={styles.body} blocks={fatphobia} />
        </div>
        </section>

        <section id="suicide" className=' reletive flex  pt-12 lg:pt-62 z-50  '>
        <div className={styles.body}>
                    <h1 className='  py-8 tracking-wide  text-5xl font-semibold '>suicide</h1>
          <BlockContent className={styles.body} blocks={suicide} />
        </div>
        </section>
        

        <section id="substance" className=' reletive flex  pt-12 lg:pt-62  z-50  '>
        <div className={styles.body}>
                    <h1 className='  py-8 tracking-wide  text-5xl font-semibold '>substance use/harm reduction</h1>
          <BlockContent className={styles.body} blocks={substancereduction} />
        </div>
        </section>

        <section id="lgbtqia" className=' reletive flex  pt-12 lg:pt-62  z-50  '>
        <div className={styles.body}>
                    <h1 className='  py-8 tracking-wide  text-5xl font-semibold '>lgbtqia+ & trauma herbalism</h1>
          <BlockContent className={styles.body} blocks={lgbtqiaherbalism} />
        </div>
        </section>

        <section id="therapy" className=' reletive flex  pt-12 lg:pt-62  z-50  '>
        <div className={styles.body}>
                    <h1 className='  py-8 tracking-wide  text-5xl font-semibold '>therapy</h1>
          <BlockContent className={styles.body} blocks={therapy} />
        </div>
        </section>

        <section id="queer" className=' reletive flex  pt-12 lg:pt-62  z-50 '>
        <div className={styles.body}>
                    <h1 className='  py-8 tracking-wide  text-5xl font-semibold '>queer and trans friendly: moving your body!</h1>
          <BlockContent className={styles.body} blocks={movingyourbody} />
        </div>
        </section>

        <section id="transformative" className='  pt-12 lg:pt-62  z-50  '>
        <div className={styles.body}>
                    <h1 className='  py-8 tracking-wide  text-4xl font-semibold '>transformative justice</h1>
          <BlockContent className={styles.body} blocks={transformativejustice} />
        </div>
        </section>

        {showButton && (
        <button onClick={scrollToTop} className={styles.backtotop}>
          &#8679;
        </button>
      )}

        {/* <Footer></Footer> */}

        </div>
                  </div>
                  </section>
      </MobileView>

      <BrowserView>
      <section className=" pt-36 relative hidden md:block ">

      <div className='  z-0 p-5 top-0 w-10/12 mx-auto  max-w-4xl'>
      <div className={styles.wrapper}>    
      
                <div className=" ">
                            <h1 className={styles.crytext2}>{title}</h1>
                            </div>  

      <div className=' p-3'>
                <div className='  m-auto text-xl font-light'>
                <Link href="../crisis/crisis">*IF UR IN CRISIS CLICK HERE* ↗</Link>
                  </div>
                        
                        <div className='  m-auto text-xl font-light'>
              <Link target="_blank" href="https://philome.la/jace_harr/you-feel-like-shit-an-interactive-self-care-guide/play/index.html">&quot;you feel like shit&quot; interactive self care guide ↗</Link>
                </div>
                </div>


            
              <section className='  max-w-2xl list-none text-center mx-auto pt-10 text-2xl font-thin '>
                  <div className={styles.links}>
              <div className="  text-3xl tracking-wide px-0 ">
            <div className="  ">

      <li><Link  href="#phonetextsupport">☆ phone/text support ☆</Link></li>
      <li><Link href="#inperson">☆ in-person london-based support ☆</Link></li>
      <li><Link href="#communitiesUk">☆ communities & collectives (uk) ☆</Link></li>
      <div></div>
      <li><Link href="#communitiesGlobal">☆ communities & collectives (global) ☆</Link></li>
      <div></div>
      <li><Link href="#housing">☆ housing (london/uk) ☆</Link></li>
      </div>
      </div>
      </div>
      </section>
      <section className=' max-w-2xl list-none text-center mx-auto  text-2xl font-thin '>
                  <div className={styles.links}>
              <div className="  text-3xl tracking-wide px-0 ">
            <div className="  ">
            <li><Link  href="#grief">☆ grief ☆</Link></li>
            <li><Link href="#sexual">☆ sexual health ☆</Link></li>
            <li><Link href="#anti">☆ anti-blackness ☆</Link></li>
      <div></div>
      <li><Link href="#fatphobia">☆ fatphobia ☆</Link></li>
      <div></div>
      <li><Link href="#suicide">☆ suicide ☆</Link></li>
      </div>
      </div>
      </div>
      </section>
      <section className=' max-w-2xl list-none text-center mx-auto text-2xl font-thin '>
                  <div className={styles.links}>
              <div className="  text-3xl tracking-wide px-0 ">
            <div className="  ">
            <li><Link  href="#substance">☆ substance use/harm reduction ☆</Link></li>
            <li><Link href="#lgbtqia">☆ lgbtqia+ & trauma herbalism ☆</Link></li>
            <li><Link href="#therapy">☆ therapy ☆</Link></li>
      <div></div>
      <li><Link href="#queer">☆ queer and trans friendly: moving your body! ☆</Link></li>
      <div></div>
      <li><Link href="#transformative">☆ transformative justice ☆</Link></li>
      </div>
      </div>
      </div>
      </section>


                <section id="phonetextsupport" className=' reletive flex  pt-12 lg:pt-62 px-8  z-50 '>
              <div className={styles.body}>
                          <h1 className='  py-8 tracking-wide  text-5xl font-semibold '>phone/text support</h1>
                <BlockContent blocks={phonetextsupport} />
              </div>
              </section>


              <section id="inperson" className=' reletive flex  pt-12 lg:pt-62 px-8  z-50 '>
              <div className={styles.body}>
                          <h1 className='  py-8 tracking-wide  text-5xl font-semibold '>in-person london-based support</h1>
                <BlockContent blocks={inperson} />
              </div>
              </section>


              <section id="communitiesUk" className=' reletive flex  pt-12 lg:pt-62 px-8  z-50 '>
              <div className={styles.body}>
                          <h1 className='  py-8 tracking-wide  text-5xl font-semibold '>communities & collectives (uk)</h1>
                <BlockContent blocks={communitiesUk} />
              </div>
              </section>



              <section id="communitiesGlobal" className=' reletive flex  pt-12 lg:pt-62 px-8 z-50 p-10 '>
              <div className={styles.body}>
                          <h1 className='  py-8 tracking-wide  text-5xl font-semibold '>communities & collectives (global)</h1>
                <BlockContent className={styles.body} blocks={communitiesGlobal} />
              </div>
              </section>




              <section id="housing" className=' reletive flex  pt-12 lg:pt-62 px-8 z-50 p-10 '>
              <div className={styles.body}>
                          <h1 className='  py-8 tracking-wide  text-5xl font-semibold '>housing (london/uk)</h1>
                <BlockContent className={styles.body} blocks={housing} />
              </div>
              </section>


              <section id="grief" className=' reletive flex  pt-12 lg:pt-62 px-8 z-50 p-10 '>
              <div className={styles.body}>
                          <h1 className='  py-8 tracking-wide  text-5xl font-semibold '>grief</h1>
                <BlockContent className={styles.body} blocks={grief} />
              </div>
              </section>

              <section id="sexual" className=' reletive flex  pt-12 lg:pt-62 px-8 z-50 p-10 '>
              <div className={styles.body}>
                          <h1 className='  py-8 tracking-wide  text-5xl font-semibold '>sexual health</h1>
                <BlockContent className={styles.body} blocks={sexualhealth} />
              </div>
              </section>

              <section id="anti" className=' reletive flex  pt-12 lg:pt-62 px-8 z-50 p-10 '>
              <div className={styles.body}>
                          <h1 className='  py-8 tracking-wide  text-5xl font-semibold '>anti-blackness</h1>
                <BlockContent className={styles.body} blocks={antiblackness} />
              </div>
              </section>

              <section id="fatphobia" className=' reletive flex  pt-12 lg:pt-62 px-8 z-50 p-10 '>
              <div className={styles.body}>
                          <h1 className='  py-8 tracking-wide  text-5xl font-semibold '>fatphobia</h1>
                <BlockContent className={styles.body} blocks={fatphobia} />
              </div>
              </section>

              <section id="suicide" className=' reletive flex  pt-12 lg:pt-62 px-8 z-50 p-10 '>
              <div className={styles.body}>
                          <h1 className='  py-8 tracking-wide  text-5xl font-semibold '>suicide</h1>
                <BlockContent className={styles.body} blocks={suicide} />
              </div>
              </section>
              

              <section id="substance" className=' reletive flex  pt-12 lg:pt-62 px-8 z-50 p-10 '>
              <div className={styles.body}>
                          <h1 className='  py-8 tracking-wide  text-5xl font-semibold '>substance use/harm reduction</h1>
                <BlockContent className={styles.body} blocks={substancereduction} />
              </div>
              </section>

              <section id="lgbtqia" className=' reletive flex  pt-12 lg:pt-62 px-8 z-50 p-10 '>
              <div className={styles.body}>
                          <h1 className='  py-8 tracking-wide  text-5xl font-semibold '>lgbtqia+ & trauma herbalism</h1>
                <BlockContent className={styles.body} blocks={lgbtqiaherbalism} />
              </div>
              </section>

              <section id="therapy" className=' reletive flex  pt-12 lg:pt-62 px-8 z-50 p-10 '>
              <div className={styles.body}>
                          <h1 className='  py-8 tracking-wide  text-5xl font-semibold '>therapy</h1>
                <BlockContent className={styles.body} blocks={therapy} />
              </div>
              </section>

              <section id="queer" className=' reletive flex  pt-12 lg:pt-62 px-8 z-50 p-10 '>
              <div className={styles.body}>
                          <h1 className='  py-8 tracking-wide  text-5xl font-semibold '>queer and trans friendly: moving your body!</h1>
                <BlockContent className={styles.body} blocks={movingyourbody} />
              </div>
              </section>

              <section id="transformative" className=' reletive flex  pt-12 lg:pt-62 px-8 z-50 p-10 '>
              <div className={styles.body}>
                          <h1 className='  py-8 tracking-wide  text-5xl font-semibold '>transformative justice</h1>
                <BlockContent className={styles.body} blocks={transformativejustice} />
              </div>
              </section>

              {showButton && (
              <button onClick={scrollToTop} className={styles.backtotop}>
                &#8679;
              </button>
            )}

              {/* <Footer></Footer> */}

              </div>
                        </div>
                        </section>
      </BrowserView> 
    
      <Footer></Footer> 
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

  const query = encodeURIComponent(`*[ _type == "resources" && slug.current == "${pageSlug}" ] { 
    title, phonetextsupport, inperson, communitiesUk, communitiesGlobal, housing ,grief, sexualhealth, antiblackness, fatphobia,
    suicide,
    substancereduction
    ,lgbtqiaherbalism 
    ,therapy
    ,movingyourbody
    ,transformativejustice
    }`);

  const url = `https://jgs4s870.api.sanity.io/v1/data/query/production?query=${query}`;

  const result = await fetch(url).then(res => res.json());
  const resources = result.result[0];

  if (!resources) {
    return {
      notFound: true
    }
  } else {
    return {
      props: {
        title: resources.title,
        phonetextsupport: resources.phonetextsupport,
        inperson: resources.inperson,
        communitiesUk: resources.communitiesUk,
        communitiesGlobal: resources.communitiesGlobal,
        housing: resources.housing,
        grief: resources.grief,
        sexualhealth: resources.sexualhealth,
        antiblackness: resources.antiblackness,
        fatphobia: resources.fatphobia,
        suicide: resources.suicide,
        substancereduction: resources.substancereduction,
        lgbtqiaherbalism: resources.lgbtqiaherbalism,
        therapy: resources.therapy,
        movingyourbody: resources.movingyourbody,
        transformativejustice: resources.transformativejustice,
  
      }
    }
  }
};

export default Resourcesp;