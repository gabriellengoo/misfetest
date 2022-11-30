import Link from 'next/link';
import Head from 'next/head';
import { Toolbar } from '../components/toolbar';
import Footer from '../components/Footer';
import styles from '../styles/Theteam.module.css';
import { useState, useEffect } from 'react';
import React from 'react';
import Layout from "../components/Layout";
import { useRouter } from 'next/router';
import imageUrlBuilder from '@sanity/image-url';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import { browserName, CustomView } from "react-device-detect";

      export default function MiserySite({ posts }) {
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
      
        <Layout>
            {/* HEad */}
        <Head>
            <title>.｡.:*☆ cOlԼ𝓐bOratOᎡs.｡.:*☆</title>
        </Head>

        <Toolbar />



        <MobileView>
        <section className="">

<div className=''>
      <div className=' z-0 pt-1  top-0  '>
            
                  <img className={styles.figure} src="https://i.ibb.co/sFyFWsf/Bald.png"/>
                  <img className={styles.figure2} src="https://i.ibb.co/Q6g7Tk0/Masturbator-White-Thick-Transparent.png" /> 
                  <p className={styles.crytextmobile}> cOlԼ𝓐bOratOᎡs </p>  

      </div>
</div>


<div className={styles.rowsallmobile}>
{mappedPosts.length ? mappedPosts.map((p, index) => (
<div key={index}>
<div className={styles.rowsmobile}>
{/* p1 */}
<div className=' '>
<div className=' duration-500   '>

<Link  target="_blank" lassName=' font-bold' href={p.url}>
    <div className={styles.cardmobile}>
            <div className="  hover:drop-shadow-[0_35px_35px_#ffffffd3]   duration-1000 bg-[#ffffffd3]  items-center border-[1px] rounded-[5%] z-50  border-[#efefef]">
                <div className="  text-xs  ">
                                    
                                  
                            <img className=' w-6/6' src={p.image} />
                            <p className=' text-base text-center font-bold  p-5 '>{p.name}</p>
                            <div className={styles.cardone}>
                            <div>{p.summary}</div>
                                    <p className=""> 
                                {/* find me @  */}
                                    </p>
                            </div>
                            </div>
                            
                </div>
            </div>
  
</Link>
</div>
</div>
</div>
{/* p1 */}
</div>
)) : <>No Posts Yet</>}
</div>

        </section>
        </MobileView>


        <BrowserView>
        <section className="">

        <div className='relative hidden lg:block'>
              <div className='  mx-auto pt-36 z-0 p-5 top-0 w-9/12 '>
                    
                          <img className={styles.figure} src="https://i.ibb.co/sFyFWsf/Bald.png"/>
                          <img className={styles.figure2} src="https://i.ibb.co/Q6g7Tk0/Masturbator-White-Thick-Transparent.png" /> 
                          <p className={styles.crytext}> cOlԼ𝓐bOratOᎡs </p> 

              </div>
        </div>


        <div className={styles.rowsall}>
        {mappedPosts.length ? mappedPosts.map((p, index) => (
        <div key={index}>
        <div className={styles.rows}>
        {/* p1 */}
        <div className=' w-1/6 '>
        <div className=' duration-500 p-10  '>

        <Link  target="_blank" lassName=' font-bold' href={p.url}>
            <div className={styles.card}>
                    <div className="  hover:drop-shadow-[0_35px_35px_#ffffffd3]   duration-1000 bg-[#ffffffd3]  items-center border-[1px] rounded-[5%] z-50  border-[#efefef]">
                        <div className="  text-xs  ">
                                            
                                          
                                    <img className=' w-6/6' src={p.image} />
                                    <p className=' text-base text-center font-bold  p-5 '>{p.name}</p>
                                    <div className={styles.cardone}>
                                    <div>{p.summary}</div>
                                            <p className=""> 
                                        {/* find me @  */}
                                            </p>
                                    </div>
                                    </div>
                                    
                        </div>
                    </div>
          
        </Link>
        </div>
        </div>
        </div>
        {/* p1 */}
        </div>
        )) : <>No Posts Yet</>}
        </div>

        </section>
        </BrowserView>

                




      {showButton && (
        <button onClick={scrollToTop} className={styles.backtotop}>
          &#8679;
        </button>
      )}
  
      {/* <Footer></Footer>  */}
  
      </Layout>
    )
  }


  export const getServerSideProps = async pageContext => {
      const query = encodeURIComponent('*[ _type == "collaborate" ]');
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