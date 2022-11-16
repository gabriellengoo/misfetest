import Link from 'next/link';
import Head from 'next/head';
import { Toolbar } from '../components/toolbar';
import Footer from '../components/Footer';
import styles from '../styles/Theteam.module.css';
import { useState, useEffect } from 'react';
import Script from "next/script";
import { useRouter } from 'next/router';
// import 'animate.css';
// import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import React from 'react';
import Layout from "../components/Layout";
import imageUrlBuilder from '@sanity/image-url';



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

         <Head>
                <title>.｡.:*☆ thƐ tƐ𝓐m.｡.:*☆</title>
        </Head>
        <Toolbar /> 


        <section className="h-screen relative hidden lg:block">

                  <div className={styles.wrapper}>
                                    <div className={styles.songinfo}>
                                                {mappedPosts.length ? mappedPosts.map((p, index) => (
                                                <div key={index}>
                                                {/* <div className='p-20 border-b border-[#1e90ff]'> */}
                                                <div className={styles.songcontainer}>
                                                      <div className={styles.songinfo}>
                                                            <div className={styles.songlink} >
                                                                  <div>
                                                                  <Link className={styles.songartist} href={p.url}>
                                                                        <img className={styles.songimg} src={p.image} />
                                                                  </Link>
                                                                              <div className={styles.play}>▶︎</div>
                                                                  </div>
                                                            </div>

                                                            <span  className={styles.songname}>{p.name}</span>
                                                            <div  className={styles.songdescription} >
                                                                  <div>{p.summary}</div>
                                                                  {/* ↗ */}
                                                                  {/* <a  className={styles.songartist}> {p.url}</a> */}
                                                                  {/* <Link className={styles.songartist} href={p.url}>listen here ↗ </Link> */}
                                                            </div>
                                                      </div>
                                                </div>
                                                </div>
                                                )) : <>No Posts Yet</>}
                                    </div>
                  </div>


        </section>











        {showButton && (
            <button onClick={scrollToTop} className={styles.backtotop}>
            &#8679;
            </button>
      )}
  
      {/* <Footer></Footer>  */}
      {/* <FooterComponent></FooterComponent> */}

  
      </Layout>
    )
  }


  export const getServerSideProps = async pageContext => {
      const query = encodeURIComponent('*[ _type == "mixtape" ]');
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
    