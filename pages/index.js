import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Toolbar } from '../components/toolbar';
import imageUrlBuilder from '@sanity/image-url';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Layout from "../components/Layout";
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import { browserName, CustomView } from "react-device-detect";

export default function FirstPost() {

  // const [data, setData] = useState(null)
  // const [isLoading, setLoading] = useState(false)

  // useEffect(() => {
  //   setLoading(true)
  //   fetch('/api/profile-data')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data)
  //       setLoading(false)
  //     })
  // }, [])

  // if (isLoading) return <LoadingScreen/>
  // if (!data) return <p>No profile data</p>


  return (
    
    <Layout>
       <Head>
      {/* absolute   bottom-0 justify-evenly */}
       {/* <script src="https://unpkg.com/react@16.12.0/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@16.12.0/umd/react-dom.development.js"></script> */}
<title>misery ♡ </title>
<link href="//cdn-images.mailchimp.com/embedcode/classic-071822.css" rel="stylesheet" type="text/css"></link>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js" defer></script>
<script  type="module" src="../assets/app.js" defer></script>
      </Head>

      <MobileView>
        <div className='px-6 pt-6 lg:px-8'>
        <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">We are currently in development for mobile :'(</h1>
        <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">Please view on desktop</p>   
          </div>  
      </MobileView>


      <BrowserView> 
      {/* <Scene3 className="canvas3d"></Scene3> */}
<div className={styles.das}>
   
    
      {/* <Link  href="./"><img className="z-50 text-center items-center m-auto w-5/12 hover:w-7/12 duration-500 drop-shadow-[0_0px_5px_#c21b9e] " src="https://i.ibb.co/6yR3mjn/misery-world-glitter.png"/></Link>
<Link  href="./Miserysite"><img className="z-50 text-center pb-20 items-center m-auto w-5/12 hover:w-7/12 duration-500 drop-shadow-[0_0px_5px_#c21b9e] " src="https://i.ibb.co/bQ4n39B/misery-site-slime.png"/></Link>
     */}

{/* -bottom-20  style="width: 100vw; height: 100vh;" className={styles.das}*/}


{/* <div id="myCanvas" className={styles.myCanvas}>
      <canvas id="defaultCanvas0" className={styles.p5Canvas} >
      </canvas>
    </div> */}

{/* <Link  href="./Miserysite"><img className=" overflow-hidden z-50 absolute right-0   p-10  w-4/12 hover:w-5/12 duration-500 hover: drop-shadow-[1rem_1rem_1rem_yellow]" src="https://i.ibb.co/bQ4n39B/misery-site-slime.png"/></Link> */}
{/* <img className={styles.figuredas} src="https://i.ibb.co/sFyFWsf/Bald.png"/> */}


{/* <img className={styles.logomis} src="https://i.ibb.co/qB2YqyQ/MISERY-FAUX-FUR.png"/> */}

{/* <div className={styles.rotate}>
  <div className=' m-auto flex text-center  mx-auto px-0 '>
<Image
        src={mypic}
        width="350px"
        height="350px"
    />
</div>
</div>  */}

{/* <div  className=' blur flex h-screen mx-auto px-0  '>
    <div className={styles.logoaa}>
  <img className={styles.swerl} src="https://i.ibb.co/ZR9zG0V/Miserymeets09-29-Family.png" /> 
  <img className={styles.swerl1} src="https://i.ibb.co/ZR9zG0V/Miserymeets09-29-Family.png" /> 
  <img className={styles.swerl2} src="https://i.ibb.co/ZR9zG0V/Miserymeets09-29-Family.png" /> 
  </div>
  </div> */}


{/* middle logo */}
<div>
{/* <img  className={styles.logomis} src="https://i.ibb.co/qB2YqyQ/MISERY-FAUX-FUR.png"/> */}
<img  className={styles.logomis} src="https://i.ibb.co/GJvJYg3/misery-logo-1-min.png"/>
<div className={styles.logomisbot}>
<p><i>misery is...</i></p></div>

</div>


        <img className={styles.swerldas} src="https://i.ibb.co/ZR9zG0V/Miserymeets09-29-Family.png" /> 
        {/* <img className={styles.swerldas2} src="https://i.ibb.co/B2Rcd4b/Misery-Meets-Confidence-11-24-2020.png" />  */}





<div className=' p-5 flex  w-6/6 h-screen mx-auto px-0  '>
        <div className="  z-50 float-right pl-10 pt-16  w-3/12 duration-500 drop-shadow-[1rem_1rem_1rem_yellow] absolute bottom-50" >
        <Link  href="http://hello.world.miseryparty.org/"><img className={styles.misworld}  src="https://i.ibb.co/qBjDYzY/misery-world-glitter.png"/></Link>
        </div>
        {/* <div className=" text-8xl text-[#ef549d] overflow-hidden z-50 float-right absolute duration-500 drop-shadow-[1rem_1rem_1rem_yellow]" > ← </div> */}

        <div className=" z-50 right-0   w-3/12 pt-10  pr-10  duration-500 drop-shadow-[1rem_1rem_1rem_yellow] absolute bottom-50" >
        <Link  href="./Miserysite"><img className={styles.misworld}  src="https://i.ibb.co/QrJJVDy/misery-site-slime.png"/></Link>
        </div>
        {/* <div className=" text-8xl text-[green] overflow-hidden z-50 absolute right-0   w-2/12  duration-500 drop-shadow-[1rem_1rem_1rem_yellow]">→</div> */}

        </div>
        {/* <p className="text-center ">Is this <a>The Internet Arcitect</a> ?</p> p-15 */}

        <div className={styles.imageright}>
            <img className={styles.decorimage} src="https://i.ibb.co/sFyFWsf/Bald.png" data-spai="1" data-spai-upd="389"/>
        </div>
    
        <div className={styles.imageleft}>
            {/* <img className={styles.decorimage} src="https://i.ibb.co/JyJxKXh/Esther-copy-2-Glow.png" data-spai="1" data-spai-upd="200"/> */}
            <img className={styles.decorimage} src="https://i.ibb.co/TKVh7wG/Misery-Meets-Confidence-11-24-2020-1.png" data-spai="1" data-spai-upd="200"/>
        </div>

        <div className={styles.imageleft2}>
            <img className={styles.decorimage} src="https://i.ibb.co/VvxBzzg/Misery-Meets2square.png" data-spai="1" data-spai-upd="200"/>
        </div> 



        <div className={styles.imageright2}>
            <img className={styles.decorimage} src="https://i.ibb.co/dbzp5KC/Cloud-tilt-right.png" data-spai="1" data-spai-upd="389"/>
        </div>
    
        <div className={styles.imageleft3}>
            {/* <img className={styles.decorimage} src="https://i.ibb.co/JyJxKXh/Esther-copy-2-Glow.png" data-spai="1" data-spai-upd="200"/> */}
            <img className={styles.decorimage} src="https://i.ibb.co/V9vkXv8/Grinch-main.png" data-spai="1" data-spai-upd="200"/>
        </div>

        <div className={styles.imageleft22}>
            <img className={styles.decorimage} src="https://i.ibb.co/7kdqWNg/Plant-Body.png" data-spai="1" data-spai-upd="200"/>
        </div> 


{/* bottom poem */}
        <section className=' p-5  flex  justify-center text-center w-6/6 h-screen mx-auto px-0 mix-blend-difference  '>
    <p className=' text-[#515151d3] text-2xl m-auto p-6 font-normal z-0 h-2/5 w-3/6  overflow-scroll justify-center absolute bottom-0' >
    <p className=' z-0 p-3  '></p>
      <p className=' hover:text-[#1fd705] drop-shadow-[1rem_1rem_1rem_red] hover:font-normal  p-7 m-auto hover:ml-9 duration-1000  '> ＊*•̩̩͙✩•̩̩͙*˚ crying at the party *•̩̩͙✩•̩̩͙*˚＊</p>
      <p className=' hover:text-[#1fd705] drop-shadow-[1rem_1rem_1rem_red] hover:font-normal  p-7  hover:ml-9 duration-1000 '>＊*•̩̩͙✩•̩̩͙*˚ your emotional support stuffed animal that looks more depressed than you do *•̩̩͙✩•̩̩͙*˚</p>
      <p className=' hover:text-[#1fd705] drop-shadow-[1rem_1rem_1rem_red] hover:font-normal  p-7  hover:ml-9 duration-1000 '>＊*•̩̩͙✩•̩̩͙*˚being a fag and a dyke at the same time *•̩̩͙✩•̩̩͙*˚</p>
      <p className=' hover:text-[#1fd705] drop-shadow-[1rem_1rem_1rem_red] hover:font-normal  p-7  hover:ml-9 duration-1000 '>＊*•̩̩͙✩•̩̩͙*˚a 4 hour bath and a 7 day free trial *•̩̩͙✩•̩̩͙*˚</p>
      <p className=' hover:text-[#1fd705] drop-shadow-[1rem_1rem_1rem_red] hover:font-normal  p-7  hover:ml-9 duration-1000 '>＊*•̩̩͙✩•̩̩͙*˚that one piece of butt hair the beautician forgot about *•̩̩͙✩•̩̩͙*˚</p>
      <p className=' hover:text-[#1fd705] drop-shadow-[1rem_1rem_1rem_red] hover:font-normal  p-7  hover:ml-9 duration-1000 '>＊*•̩̩͙✩•̩̩͙*˚waxing your butt in the first place *•̩̩͙✩•̩̩͙*˚</p>
      <p className=' hover:text-[#1fd705] drop-shadow-[1rem_1rem_1rem_red] hover:font-normal  p-7  hover:ml-9 duration-1000 '>＊*•̩̩͙✩•̩̩͙*˚living in your overdraft but eating out anyway *•̩̩͙✩•̩̩͙*˚</p>
      <p className=' hover:text-[#1fd705] drop-shadow-[1rem_1rem_1rem_red] hover:font-normal  p-7  hover:ml-9 duration-1000 '>＊*•̩̩͙✩•̩̩͙*˚searching for a halal photo to send nani ji *•̩̩͙✩•̩̩͙*˚</p>
      <p className=' hover:text-[#1fd705] drop-shadow-[1rem_1rem_1rem_red] hover:font-normal  p-7  hover:ml-9 duration-1000 '>＊*•̩̩͙✩•̩̩͙*˚putting your headphones in at the back of the cab but not even listening to anything you just don’t want to chat *•̩̩͙✩•̩̩͙*˚</p>
      <p className=' hover:text-[#1fd705] drop-shadow-[1rem_1rem_1rem_red] hover:font-normal  p-7  hover:ml-9 duration-1000 '>＊*•̩̩͙✩•̩̩͙*˚forgiving your younger self for the things they did to get you here *•̩̩͙✩•̩̩͙*˚</p>
      <p className=' hover:text-[#1fd705] drop-shadow-[1rem_1rem_1rem_red] hover:font-normal  p-7  hover:ml-9 duration-1000 '>＊*•̩̩͙✩•̩̩͙*˚your second hand binder *•̩̩͙✩•̩̩͙*˚</p>
      <p className=' hover:text-[#1fd705] drop-shadow-[1rem_1rem_1rem_red] hover:font-normal  p-7  hover:ml-9 duration-1000 '>＊*•̩̩͙✩•̩̩͙*˚falling in love with your therapist *•̩̩͙✩•̩̩͙*˚</p>
      <p className=' hover:text-[#1fd705] drop-shadow-[1rem_1rem_1rem_red] hover:font-normal  p-7  hover:ml-9 duration-1000 '>＊*•̩̩͙✩•̩̩͙*˚ this too shall pass *•̩̩͙✩•̩̩͙*˚</p>
      <p className=' hover:text-[#1fd705] drop-shadow-[1rem_1rem_1rem_red] hover:font-normal  p-7  hover:ml-9 duration-1000 '>＊*•̩̩͙✩•̩̩͙*˚freedom is sorrow is moments of connection is dissociation is remembering is moving through *•̩̩͙✩•̩̩͙*˚</p>
      <p className=' hover:text-[#1fd705] drop-shadow-[1rem_1rem_1rem_red] hover:font-normal  p-7  hover:ml-9 duration-1000 '>＊*•̩̩͙✩•̩̩͙*˚company *•̩̩͙✩•̩̩͙*˚</p>
      <p className=' text-[#1fd705] ml-0 text-9xl hover:ml-9 duration-1000 drop-shadow-[1rem_1rem_1rem_yellow] '><i>me and you</i></p>
      <p className=' p-10 '></p>
    </p>
</section>
    



    


        {/* <div className=" flex mix-blend-multiply top-0 border-[.5px] border-[#030303]  ">
  <div className="absolute bg-[#fbf9d5] text-[#4eb2e8b9] font-light w-screen flex overflow-x-hidden ">
  <div className=" text-5xl animate-marquee whitespace-nowrap">
    <span className="mx-4 ">  &nbsp;  .｡.:☆.｡.: &nbsp; u can cry if u want to</span>
    <span className="mx-4 ">  &nbsp; .｡.:☆.｡.: &nbsp;  u can cry if u want to</span>
    <span className="mx-4 ">  &nbsp; .｡.:☆.｡.: &nbsp;  u can cry if u want to</span>
    <span className="mx-4 ">  &nbsp; .｡.:☆.｡.: &nbsp;  u can cry if u want to</span>
    <span className="mx-4 ">  &nbsp; .｡.:☆.｡.: &nbsp;  u can cry if u want to</span>
  </div>

  <div className="absolute text-5xl bottom-0 animate-marquee2 whitespace-nowrap">
    <span className="mx-4 ">  &nbsp; .｡.:☆.｡.: &nbsp;  u can cry if u want to</span>
    <span className="mx-4 ">  &nbsp; .｡.:☆.｡.: &nbsp;  u can cry if u want to</span>
    <span className="mx-4 ">  &nbsp; .｡.:☆.｡.: &nbsp;  u can cry if u want to</span>
    <span className="mx-4 ">  &nbsp; .｡.:☆.｡.: &nbsp;  u can cry if u want to</span>
    <span className="mx-4 ">  &nbsp; .｡.:☆.｡.: &nbsp;  u can cry if u want to</span>
  </div>
</div>
</div> */}

      {/* <div className={css.scene}>
      <Canvas
        shadows={true}
        className={css.canvas}
        camera={{
          position: [-6, 7, 7],
        }}
      >
        <ambientLight color={"white"} intensity={0.2} />
        <LightBulb position={[0, 30, 0]} />
        <Draggable></Draggable>
        <OrbitControls />
        <Box rotateX={3} rotateY={0.2} />
        <Floor position={[0, -1, 0]} />
      </Canvas>
    </div> */}

    
{/* <script src="/scripts/bundle.min.js"></script> */}
    </div>

    </BrowserView> 

    </Layout>
  )
}
