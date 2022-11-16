import imageUrlBuilder from '@sanity/image-url';
// import client from './sanityClient'
import { useState, useEffect } from 'react';
import styles from '../../styles/Post.module.css';
import BlockContent from '@sanity/block-content-to-react';
import { Toolbar } from '../../components/toolbar';
import { sanityClient } from '@sanity/client'
// import Image from "../../components/Image"
import Link from "next/link"
// import Footer from '../../components/Footer';
import Head from 'next/head';
import { SectionTitle } from "../../components/SectionTitle";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import MuiNextLink from "../../components/MuiNextLink"
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import NewsletterForm from '../../components/NewsletterForm';
// import FooterComponent from '../components/foottest';
import FooterComponent from '../../components/foottest';
import Marquee from "react-fast-marquee";
import Footer from '../../components/Footer';

export const contactus = ({ title, body, bodytwo, }) => {
//   const [imageUrl, setImageUrl] = useState('');
  console.log(title, body, bodytwo,);

//   useEffect(() => {
//     const imgBuilder = imageUrlBuilder({
//       projectId: 'jgs4s870',
//       dataset: 'production',
//     });

    // setImageUrl(imgBuilder.image(images));
//   }, [images, imagestwo,]);

const MAILCHIMP_URL = process.env.NEXT_PUBLIC_MAILCHIMP_URL;

  return (
    <div>
             <Head>
       {/* <script src="https://unpkg.com/react@16.12.0/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@16.12.0/umd/react-dom.development.js"></script> */}
{/* <link href="../../index.html" rel="stylesheet" type="text/html"></link>  */}
<link href="//cdn-images.mailchimp.com/embedcode/classic-071822.css" rel="stylesheet" type="text/css"></link>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js" defer></script>
<script  type="module" src="../../assets/app.js" defer></script>
<title>contact</title>
      </Head>
      <div className=""><Toolbar /> </div> 
     






      <section className="">


 {/* --------------------------------------------  right */}

          
          <img className={styles.swerl} src="https://i.ibb.co/ZR9zG0V/Miserymeets09-29-Family.png" /> 
 

{/* -------------------------------------------- left */}
        <div className='  z-0 p-5 top-0 mx-auto pt-36'>
          
        {/* <img className={styles.figure} src="https://i.ibb.co/sFyFWsf/Bald.png"/> */}
        <img className={styles.figure2} src="https://i.ibb.co/Q6g7Tk0/Masturbator-White-Thick-Transparent.png" /> 
        {/* <Toolbar />  */}


<div className=''>
        {/* <p className="text-6xl font-semibold text-left text-[#ff00000] justify-center  "> 💧 u can cry if u want to 💧 </p>  */}
        {/* <p className="text-center object-center pt-20 font-serif font-light "> u can cry if u want to</p> */}
        <p className={styles.crytext4}>{title}</p> 
{/* -webkit-text-stroke: 2px black; */}


  


  
<div className=' '>
      {/* <div className={styles.main}> */}




        {/* <div className=' pb-5  text-base  relative hidden md:block '>
        <h1 className='  text-2xl font-light tracking-tighter  '>contact</h1>
        </div> */}


        <div className='   text-base  relative hidden md:block '>
        {/* <h1 className=' text-2xl font-light tracking-tighter ptracking-wide'>{title}</h1> */}
        {/* <h1 className='  text-2xl font-light   '>  email:<a href="mailto:hello@miseryparty.org"> hello@miseryparty.org</a></h1> */}
        <h1 className='  text-2xl font-light text-center   '> <a href="mailto:hello@miseryparty.org"> hello@miseryparty.org</a></h1>

        </div>

        <div className='   text-base  relative hidden md:block '>
        {/* <BlockContent className=' mx-auto text-2xl font-light text-center   ' blocks={body} /> */}
        <h1 className=' text-2xl font-light text-center   '>anonymous Feedback form! misery confessions: tell us ur secrets</h1>
         </div>
        

        <div className=' pt-10 text-center relative hidden md:block text-2xl font-light  '>
            <h1 className='  '>sign up to our Newsletter</h1>
        </div>

              
              {/* <!-- Begin Mailchimp Signup Form --> */}
      <div id="mc_embed_signup">
          <form action="https://instagram.us4.list-manage.com/subscribe/post?u=53ab2b977fbe8d08ff728f928&amp;id=92c2a49407&amp;f_id=00f305e9f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
              <div id="mc_embed_signup_scroll">
              <h2>join our newsletter &lt;3</h2>
              <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
      <div className="mc-field-group">
      <label htmlFor="mce-EMAIL">Email Address  <span className="asterisk">*</span>
      </label>
      <input type="email" value="" name="EMAIL" className="required email" id="mce-EMAIL" required />
      <span id="mce-EMAIL-HELPERTEXT" className="helper_text"></span>
      </div>
      <div id="mce-responses" className="clear foot">
      <div className="response" id="mce-error-response" ></div>
      <div className="response" id="mce-success-response" ></div>
      </div>   
      {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
          <div aria-hidden="true">
            <input type="text" name="b_53ab2b977fbe8d08ff728f928_92c2a49407" tabIndex="-1" value=""/></div>
              <div className="optionalParent">
                  <div className="clear foot">
                      <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" />
                      <p className="brandingLogo"><a href="http://eepurl.com/hVhJPv" title="Mailchimp - email marketing made easy and fun">
                        <img src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg"/></a></p>
                  </div>
              </div>
          </div>
      </form>
      </div>
      {/* <!--End mc_embed_signup--> */}
          
        

    




  







 

      {/* </div> */}
      </div>

 

      {/* </div> */}
             
      </div>


<Footer></Footer>
            {/* </div> */}

  </div>
  </section>
















      {/* <Toolbar /> */}
      

      {/* <div className="pt-28 bg-[white] ">
  <div className=" p-3 border-[.5px] border-[#030303] font-normal text-xl w-screen overflow-x-hidden text-[#005c99] underline ">
  <a href="mailto:hello@miseryparty.org">
<Marquee>
<span className="mx-4  ]">  &nbsp; .｡.:☆.｡.: &nbsp; hello@miseryparty.org</span>
    <span className="mx-4  ]">  &nbsp; .｡.:☆.｡.: &nbsp; hello@miseryparty.org</span>
    <span className="mx-4  ]">  &nbsp; .｡.:☆.｡.: &nbsp; hello@miseryparty.org</span>
    <span className="mx-4  ]">  &nbsp; .｡.:☆.｡.: &nbsp; hello@miseryparty.org</span>
    <span className="mx-4  ]">  &nbsp; .｡.:☆.｡.: &nbsp; hello@miseryparty.org</span>
</Marquee>
</a>
</div>
</div> */}



      {/* <FooterComponent></FooterComponent> */}
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

  const query = encodeURIComponent(`*[ _type == "contact" && slug.current == "${pageSlug}" ] { 
    title, body, bodytwo,
}`);

  const url = `https://jgs4s870.api.sanity.io/v1/data/query/production?query=${query}`;

  const result = await fetch(url).then(res => res.json());
  const contact = result.result[0];

  if (!contact) {
    return {
      notFound: true
    }
  } else {
    return {
      props: {
        body: contact.body,
        title: contact.title,
        // bodytwo: contact.bodytwo,
    //   venue: contact.venue,
        // address: contact.address,
        // coordinates: contact.coordinates,
    //     url: contact.url,
    //   category: contact.category,
      }
    }
  }
};

export default contactus;