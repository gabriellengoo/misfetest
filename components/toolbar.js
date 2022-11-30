// bg-[#c2c4fe] border-b-2 border-solid border-[#dbff00]
// bg-gradient-to-bl from-[#11fbcd] to-[#e151e7]  border-b-4 border-solid border-[#787870] bg-[#1a1a1a]
// bg-[#e7dbef]
// bg-[#5f5c6138]
          {/* <img class=" animate__animated animate__fadeIn z-0 -top-1 absolute   " src="https://i.ibb.co/qB2YqyQ/MISERY-FAUX-FUR.png" style={{width: "12%", height: "auto"}}/> */}
          // <div className=' bg-black drop-shadow-[0_35px_35px_rgba(0,0,0,0.95)]  border border-solid rounded-full border-[#20291709] p-3' onClick={() => router.push('../Miserysite')}>Events</div>
  {/* <div className='   z-0   flex justify-center'>
          <img class="animate__animated animate__fadeIn absolute top-0 z-0  " src="https://i.ibb.co/4Jddjys/misery-site-slime.png" style={{width: "auto", height: "200%"}}/>
          </div> */}

      {/* newsec  hover:w-3/12 pb-20 z-0 drop-shadow-[0_0px_5px_grey]  bg-[#f2f2f28a] shadow-slate-200 mix-blend-overlay*/}

import { useRouter } from 'next/router';
import styles from '../styles/Toolbar.module.css';
import Link from 'next/link';
import React, { useState } from 'react';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import { browserName, CustomView } from "react-device-detect";
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'



const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export const Toolbar = () => {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    
    <section >

<MobileView>
    {/* header */}
    <div className=" z-[10000] t-0 ">

      <div className="px-6 pt-6 z-[10000] fixed justify-between w-96 lg:px-8">
        <div>
          <nav className="flex z-[10000]  h-9 items-center justify-between" aria-label="Global">

            {/* logo */}
            <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
              <a href="#" className="-m-1.5 p-1.5">
                {/* <img className="h-8" src="https://i.ibb.co/GJvJYg3/misery-logo-1-min.png" alt="" /> */}
              </a>
            </div>

            {/* open menu */}
              <div className="flex lg:hidden">
                <button
                  type="button"
                  className="-m-2.5 inline-flex items-center justify-center p-1.5  text-black border-[.5px] rounded-full bg-white border-black pr-[2.5vw] pl-[2.5vw] "
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <span className="sr-only">Open main menu</span>
                    <div class="cta cta_menu" data-close="Close" data-menu="Menu" ndx--menu="Menu" ndx--close="Close">
                    <span>Menu</span>
              </div>
                {/* <Bars3Icon className="h-6 w-6" aria-hidden="true" /> */}
               </button>
    
            </div>

          {/* nav stuff */}
            {/* <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="font-semibold text-gray-900 hover:text-gray-900">
                  {item.name}
                </a>
              ))}
            </div>

            <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
              <a
                href="#"
                className="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20"
              >
                Log in
              </a>
            </div> */}

                </nav>
          


          <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <Dialog.Panel focus="true" className="fixed inset-0 z-10 overflow-y-auto bg-[#ffffffdd] bg-gradient-to-r from-[#ffffff69] to-[#c7c7c7b6] px-6 py-6 lg:hidden">
              <div className="flex h-9 items-center justify-between fixed w-80">
                <div className="flex">
                  <a href="./" className="-m-1.5 p-1.5">
                    {/* <span className="sr-only">Your Company</span> */}
                    <img
                      className="h-8"
                      src="https://i.ibb.co/GJvJYg3/misery-logo-1-min.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="flex">
                  <button
                    type="button"
                    className="-m-2.5 inline-flex items-center justify-center p-1.5 text-black border-[.5px] rounded-full border-black pr-[2.5vw] pl-[2.5vw]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {/* <span className="sr-only">Close menu</span> */}
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>


              <div className="mt-6  flow-root">
                <div className=" ">
                  {/* <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div> */}
                   {/* about */}
                   {/* <div className=" pt-5 w-3/12 "> */}
                  <div className={styles.dropdown}>
                <button>
                <img className=" flex  p-5 h-auto mx-auto w-5/12  duration-500 hover:drop-shadow-[0_0px_5px_#479ab3] " src="https://i.ibb.co/DMmhFb6/Layer-2.png"/>
                </button>
                <div className={styles.dropdowncontent}>
                <a><Link href="../Miserysite#whatismisery"> what is misery?</Link></a>
                <a><Link href="../miserymoods/misery-mood"> misery moods </Link></a>
                <a><Link href="../videoBlogPost/our-story"> our story </Link></a>
                <a><Link href="../theteam"> the team </Link></a>
                <a><Link href="../collaborators"> collaborators </Link></a>
                <a><Link href="../faq"> faq </Link></a>
                </div>
              </div>
              {/* </div> */}

              {/* events */}
              {/* <div className=" pt-6 w-3/12 "> */}
              <div className={styles.dropdown}>
                <button>
                <img className="  p-5 h-auto mx-auto w-5/12 flex duration-500 hover:drop-shadow-[0_0px_5px_#479ab3]"  src="https://i.ibb.co/PC6ndJ5/Layer-3.png"/>
                </button>
                <div className={styles.dropdowncontent}>
                <a><Link href="../eventsComing"> now & coming up</Link></a>
                <a><Link href="../eventarchive"> archive </Link></a>
              
                </div>
              </div>
              {/* </div> */}

              {/* made by mis */}
              {/* <div className=" pt-5 p-5"> */}
              {/* <div className=" pt-10 w-3/12 p-0"> */}
                      <div className={styles.dropdown}>
                    <button className="">
                    <img  className=" p-5 h-auto mx-auto w-5/12 duration-500 hover:drop-shadow-[0_0px_5px_#479ab3]" src="https://i.ibb.co/p0pqK5H/Layer-1-2.png"/>
                    </button>
                    <div className={styles.dropdowncontent}>
                    <a><Link href="../madebymisery/made-by-misery">zine</Link></a>
                    <a><Link href="../mixtapes"> mixtapes </Link></a>
                    <a><Link href="../madebymisery/made-by-misery"> radio </Link></a>
                    </div>
                  </div>
                  {/* </div> */}
                  {/* </div> */}

                  {/* resorses */} 
                  {/* <div className=" pt-16  w-3/12 p-5"> */}
                      <div className={styles.dropdown}>
                    <button>
                    <img className=" p-5 h-auto mx-auto w-5/12  duration-500 hover:drop-shadow-[0_0px_5px_#479ab3]"  src="https://i.ibb.co/V25jWY5/Layer-5.png"/>
                    </button>
                    <div className={styles.dropdowncontent}>
                    <a><Link href="../crisis/crisis">crisis</Link></a>
                    <a><Link href="../resources/resources-for-qtibpoc-healing"> resources </Link></a>
                    {/* <a><Link href="../miserydatabase"> misery’s database </Link></a> */}
                    </div>
                  </div>
                  {/* </div> */}
                  
                  
                  
                  {/* press  */}
                      {/* <div className=" pt-5 w-1/12 "> */}
                  <div className={styles.dropdown}>
                <button>
                <img className=" flex p-5 mx-auto h-auto  w-5/12 duration-500 hover:drop-shadow-[0_0px_5px_#479ab3] "  src="https://i.ibb.co/mCW1MxP/Layer-6.png"/>
                </button>
                <div className={styles.dropdowncontent}>
                <a><Link href="../press/press#press"> press </Link></a>
                <a><Link href="../press/press#panels"> panels </Link></a>
                <a><Link href="../press/press#awards"> awards </Link></a>
                <a><Link href="../press/press#research"> research </Link></a>
                <a><Link href="../press/press#feedback"> feedback </Link></a>
                </div>
              </div>
              {/* </div> */}

                  {/* get involed */}
                  <div className={styles.dropdown}>
                    <button>
                    <img className="  h-auto mx-auto  pt-5  w-5/12 duration-500 hover:drop-shadow-[0_0px_5px_#479ab3]  "  src="https://i.ibb.co/SfDXr6F/Layer-3.png"/>
                    </button>
                    <div className={styles.dropdowncontent}>
                    <a><Link href="../getinvolved/get-involved"> join the team</Link></a>
                    <a><Link href="../getinvolved/get-involved"> hire us </Link></a>
                    <a><Link href="../"> donate </Link></a>
                    <a><Link href="../getinvolved/get-involved"> share our work with a friend </Link></a>
                    <a><Link href="../getinvolved/get-involved"> give us feedback </Link></a>
                    </div>
                  </div>
                  
                  {/* contact */}
                  <img className="pt-10 p-5 flex  mx-auto  w-5/12 h-1/6  duration-500 hover:drop-shadow-[0_0px_5px_#479ab3] " onClick={() => router.push('/contact/contact')} src="https://i.ibb.co/6FJhfp7/Layer-8.png"/>

                  {/* <div className="py-6">
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10"
                    >
                      Log in
                    </a>
                  </div> */}

                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </div>
      </div>
      </div>
            {/* end of header */}
            </MobileView>





            <BrowserView> 
    <div className="top-0 z-50 fixed  ">
      
      {/* mis home */}
        <div className={styles.back}>
            {/* <img className="pl-2 flex w-2/12 h-auto z-50 duration-500 absolute drop-shadow-[5px_5px_5px_#30ff35] " onClick={() => router.push('../')} src="https://i.ibb.co/S66hH07/MISERY-SLIME-2.png"/> */}
                <img className="pl-2 flex w-1/12 pt-5  h-auto z-50 duration-500 absolute drop-shadow-[5px_5px_5px_black] " onClick={() => router.push('../')} src="https://i.ibb.co/GJvJYg3/misery-logo-1-min.png"/>
              <div className='flex pl-24 pt-5 z-40 overflow-scroll h-min  '>

              {/* home */}
              {/* <div className=" pt-5 w-12/12 p-5"> */}
                  {/* <img className="pl-2 pt-5 p-5 flex w-2/12 h-1/6  duration-500 hover:drop-shadow-[0_0px_5px_#30ff35] " onClick={() => router.push('/Miserysite')} src="https://i.ibb.co/37Sd6XV/Layer-1.png"/> */}
              {/* </div> */}

              {/* about */}
              <div className=" pt-5 w-12/12 ">
                  <div className={styles.dropdown}>
                <button>
                <img className=" pt-5 flex p-5 mx-auto  w-[100%] h-auto duration-500 hover:drop-shadow-[0_0px_5px_#479ab3] " onClick={() => router.push('/videoBlogPost/our-story')} src="https://i.ibb.co/DMmhFb6/Layer-2.png"/>
                </button>
                <div className={styles.dropdowncontent}>
                <a><Link href="../Miserysite#whatismisery"> what is misery?</Link></a>
                <a><Link href="../miserymoods/misery-mood"> misery moods </Link></a>
                <a><Link href="../videoBlogPost/our-story"> our story </Link></a>
                <a><Link href="../theteam"> the team </Link></a>
                <a><Link href="../collaborators"> collaborators </Link></a>
                <a><Link href="../faq"> faq </Link></a>
                </div>
              </div>
              </div>

              {/* events */}
              <div className=" pt-6 w-12/12 ">
              <div className={styles.dropdown}>
                <button>
                <img className="  pt-5 flex pr-5 mx-auto  w-[100%]  h-auto duration-500 hover:drop-shadow-[0_0px_5px_#479ab3]" onClick={() => router.push('/eventsComing')} src="https://i.ibb.co/PC6ndJ5/Layer-3.png"/>
                </button>
                <div className={styles.dropdowncontent}>
                <a><Link href="../eventsComing"> now & coming up</Link></a>
                <a><Link href="../eventarchive"> archive </Link></a>
              
                </div>
              </div>
              </div>






              {/* made by mis */}
              {/* <div className=" pt-5 p-5"> */}
              <div className=" pt-10 w-[150%] p-0">
                      <div className={styles.dropdown}>
                    <button className="w-[70%]">
                    <img  className="  w-[100%] duration-500 hover:drop-shadow-[0_0px_5px_#479ab3]" onClick={() => router.push('/madebymisery/made-by-misery')} src="https://i.ibb.co/p0pqK5H/Layer-1-2.png"/>
                    </button>
                    <div className={styles.dropdowncontent}>
                    <a><Link href="../madebymisery/made-by-misery">zine</Link></a>
                    <a><Link href="../mixtapes"> mixtapes </Link></a>
                    <a><Link href="../madebymisery/made-by-misery"> radio </Link></a>
                    </div>
                  </div>
                  </div>
                  {/* </div> */}

                  {/* resorses */} 
                  <div className=" pt-16  w-12/12 p-5">
                      <div className={styles.dropdown}>
                    <button>
                    <img className=" duration-500 hover:drop-shadow-[0_0px_5px_#479ab3]"  onClick={() => router.push('/resources/resources-for-qtibpoc-healing')} src="https://i.ibb.co/V25jWY5/Layer-5.png"/>
                    </button>
                    <div className={styles.dropdowncontent}>
                    <a><Link href="../crisis/crisis">crisis</Link></a>
                    <a><Link href="../resources/resources-for-qtibpoc-healing"> resources </Link></a>
                    {/* <a><Link href="../miserydatabase"> misery’s database </Link></a> */}
                    </div>
                  </div>
                  </div>
                  
                  
                  
                  {/* press  */}
                  
                      {/* <img className="pt-14 flex p-5 pl-auto mx-auto  w-[13%] h-1/6   duration-500 hover:drop-shadow-[0_0px_5px_#479ab3] " onClick={() => router.push('../press/press')} src="https://i.ibb.co/mCW1MxP/Layer-6.png"/> */}
                  
                      <div className=" pt-5 w-12/12 ">
                  <div className={styles.dropdown}>
                <button>
                <img className=" pt-5 flex p-5 mx-auto  w-[100%] h-auto duration-500 hover:drop-shadow-[0_0px_5px_#479ab3] " onClick={() => router.push('../press/press')} src="https://i.ibb.co/mCW1MxP/Layer-6.png"/>
                </button>
                <div className={styles.dropdowncontent}>
                <a><Link href="../press/press#press"> press </Link></a>
                <a><Link href="../press/press#panels"> panels </Link></a>
                <a><Link href="../press/press#awards"> awards </Link></a>
                <a><Link href="../press/press#research"> research </Link></a>
                <a><Link href="../press/press#feedback"> feedback </Link></a>
                </div>
              </div>
              </div>




                  {/* get involed */}

                  {/* <img className=" pl-2  pr-2 p-5  pt-10 mx-auto  w-3/12 h-1/6 duration-500 hover:drop-shadow-[0_0px_5px_#3d9335]  " onClick={() => router.push('../getinvolved/get-involved')} src="https://i.ibb.co/s3Mfn3q/Layer-7.png"/> */}
              
                      <div className={styles.dropdown}>
                    <button>
                    <img className="  h-auto pt-5 mx-auto w-8/12 duration-500 hover:drop-shadow-[0_0px_5px_#479ab3]  " onClick={() => router.push('../getinvolved/get-involved')} src="https://i.ibb.co/SfDXr6F/Layer-3.png"/>
                    </button>
                    <div className={styles.dropdowncontent}>
                    <a><Link href="../getinvolved/get-involved"> join the team</Link></a>
                    <a><Link href="../getinvolved/get-involved"> hire us </Link></a>
                    <a><Link href="../"> donate </Link></a>
                    <a><Link href="../getinvolved/get-involved"> share our work with a friend </Link></a>
                    <a><Link href="../getinvolved/get-involved"> give us feedback </Link></a>
                    </div>
                  </div>
                  
                  
                  
                  {/* contact */}
                      <img className="pt-10 p-5 flex pl-auto mx-auto  w-[15%] h-1/6  duration-500 hover:drop-shadow-[0_0px_5px_#479ab3] " onClick={() => router.push('/contact/contact')} src="https://i.ibb.co/6FJhfp7/Layer-8.png"/>
                  
                  {/* shop */}
                      {/* <img className="pt-8 p-5 flex  mx-auto  w-[12%] h-1/6  duration-500 hover:drop-shadow-[0_0px_5px_#479ab3] " onClick={() => router.push('/Shop')} src="https://i.ibb.co/g7LwM63/Layer-9.png"/> */}
                      
                  {/* <img className="pt-5 pl-5 flex w-5/12 h-1/6  duration-500 hover:drop-shadow-[0_0px_5px_green] " onClick={() => router.push('/madebymisery/made-by-misery')} src="https://i.ibb.co/tXp19yy/Layer-4.png"/>
                  <img className="pt-5 pl-5 flex  w-3/12 h-1/6  duration-500 hover:drop-shadow-[0_0px_5px_#3d9335]"  onClick={() => router.push('/resources/resources-for-qtibpoc-healing')} src="https://i.ibb.co/V25jWY5/Layer-5.png"/>
                  <img className="pt-5 pl-5 flex w-2/12 h-1/6   duration-500 hover:drop-shadow-[0_0px_5px_red] " onClick={() => router.push('../press/press')} src="https://i.ibb.co/mCW1MxP/Layer-6.png"/>
                  <img className="pt-5 pl-5 flex w-3/12 h-1/6  duration-500 hover:drop-shadow-[0_0px_5px_pink]  " onClick={() => router.push('../getinvolved/get-involved')} src="https://i.ibb.co/s3Mfn3q/Layer-7.png"/>
                  <img className="pt-5 pl-5 flex w-2/12 h-1/6  duration-500 hover:drop-shadow-[0_0px_5px_#479ab3] " onClick={() => router.push('/contact/contact')} src="https://i.ibb.co/6FJhfp7/Layer-8.png"/>
                  <img className=" pt-2 pl-2 flex w-1/12 h-1/6   duration-500 hover:drop-shadow-[0_0px_5px_#479ab3] " onClick={() => router.push('/Shop')} src="https://i.ibb.co/g7LwM63/Layer-9.png"/> */}
              </div>
        </div>
    </div>
    </BrowserView> 





      


  </section>
  );
};



