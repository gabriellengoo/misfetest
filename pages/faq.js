import FaqComponent from "../components/faqAccordion/faq";
import styles from '../styles/Theteam.module.css';
import Link from "next/dist/client/link";
import Head from 'next/head';
import { Toolbar } from '../components/toolbar';
// import Footer from '../components/Footer';
import Footer from '../components/Footer';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import { browserName, CustomView } from "react-device-detect";

export default function Index() {
    
    const faqs = [
        {
            key: 0,
            title: "why “misery”?",
            description: "there is pressure on everyone, but particularly people of colour, queer people, trans people, marginalised people, to be happy / strong / fierce / hot / inspirational. \nwe too often hear accounts from people who have been miserable once they have found their way out the other side of it, as though sadness can only be tolerated in hindsight. misery is an invitation to come as you are. to be sad or quiet in public. to talk freely, listen actively and heal collectively. to celebrate, give gratitude for and remember those who support us and those who have not been supported. to dream of existence without fear, pain, greed or oppression and imagine the solidarities that might get us there. \n what does your misery have to teach you?  "
        
        },
        {
            key: 1,
            title: "why do you center qtibpoc?",
            description: "there is a bunch of research confirming what we know, that problematic substance use is much higher in lgbtq communities compared to other demographics. homelessness, mental health issues and suicide are also significantly more common among lgbtq populations. we’re living on a melting planet and sharing memes about wanting to die for sport -- it’s a hard time for everyone -- but it’s harder still for those of us who are different, for whom society was not designed to accommodate, let alone nurture. harder still for black and brown people who experience alarming levels of despair, isolation, barriers to support and oppression both in the world and within our often white-dominated lgbtq minority groups. misery was built by & for us.            "
        },
        {
            key: 2,
            title: "why “BPoC”?",
            description: "we use the phrase ‘black people and people of colour’ in recognition of the fact white supremacy is particularly violent towards Black people. we use this phrase to acknowledge the specific harms of anti-blackness which is perpetuated by all non-black people, and honour the intense oppression that black people have and do face. “the phrase ‘black people and people of colour’ is not perfect. terms and language are ongoing, constantly moving as power and resistance to oppression evolves. by the time our work has reached you, the terms we use may have become outdated or even redundant. we encourage you to engage with our work and text in a dynamic way that follows less the form and more the substance.”- adapted from voices that shake! an anthology of creative movements (2021)"
        },
        {key: 3, title: "why is misery a sober space?", description: "it’s not that we set out with a strictly sober vibe in mind, but the more we thought about it, the clearer it became that if we were trying to make some kind of real mental health intervention, we’d need people to be present for it. when we started out, trying to run a sober rave in an accessible venue in london on a friday or saturday night got us laughed at. nightlife, venues and as a result queer events programming is completely beholden to alcohol sales, hence the lack of sober spaces available. sober spaces aren’t just a health asset, but an anti-capitalist one too, which, call us dated or whatever, feels important. we’ve built misery - using harm reduction principles - as a non-judgmental space. we do not police anyone’s relationship to substances or what they do before or after our events. everyone is welcome, whatever their relationship to substance use and sobriety. we understand people’s trepidations about sober spaces. addiction rhetoric has historically been chock-full of judgement, moralism, unhelpful and unrealistic goal setting, and inherently shaming language like “getting clean”. we’re careful not to replicate these sometimes well-meaning but ultimately damaging frameworks and are looking instead to use our understanding of radical mental health practices which centre the voices of people in need, to create opportunities for marginalised people to have fun in alcohol-free spaces. we do this for friends actively struggling with mental health and/or substance use issues, for people who are curious about their relationship to intoxication and wellness, and for people who just want to have a good time. for many of us, moments of freedom are often facilitated by a kind of dissociation and self-medication that can only be provided by alcohol and other drugs. we deserve some other options too. if you have any questions or concerns about this, and where you fit in with it all, we are here to chat with you."},
       
       
        {key: 4, title: "what is harm reduction & why do you love it so much?", description: "harm reduction is a mental health framework that was developed in the uk in the 1980s in response to the increasing number of hiv cases among drug injectors. rather than shaming drug users, this radical rethinking resulted in the establishment of syringe exchange schemes, where injecting drug users were able to obtain sanitary hypodermic needles at little or no cost, reducing the spread of hiv. harm reduction is now applied globally as a way of engaging with communities and people who may be participating in risky behaviours without shaming, judging, stigmatising or simply telling them to stop. instead, it encourages us to support, listen, help inform others of risks and potential safety measures, and honour eachother’s agency to make choices for ourselves. this can be with regard to drinking, drugs, sex, self-harm – anything really.  haters will say that harm reduction increases the likelihood of people doing risky things, but it doesn’t. there are many studies that prove it doesn’t but also fuck a study and consider it. if we work to remove the stigma and judgement that so often silences and isolates vulnerable people and their coping mechanisms, and listen to them instead, it makes sense that they might feel more cared for and therefore empowered to do what’s right for them with the knowledge, support and resources to be safe while they’re doing it. this feels particularly important when thinking about qtibpoc who by nature of being othered so many times over are no strangers to judgement, guilt and shame and can so easily internalise the belief that they are not worthy of care."},
        
        
        // <Link  href="#whatismisery"><a className=' hover:text-[#dbff00]'>☆ what is misery?</a></Link>
        {key: 5, title: "how can i get involved?", link: "see here!"},

    ];

    const faqComponents = faqs.map((faq) => {
        // <div key={faqs.key}>
        return <FaqComponent  key={faqs.key}  title={faq.title} description={faq.description} link={faq.link}/>
        // </div>
    });




    

    return <div >

<Head>
         {/* <script src="https://unpkg.com/react@16.12.0/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@16.12.0/umd/react-dom.development.js"></script> */}
  <title>f𝓐q</title>
        </Head>
        <Toolbar /> 




        <MobileView>
        <section className="h-screen">
            {/* <img className=" w-2/6 absolute drop-shadow-[0_0px_5px_red]" src="https://i.ibb.co/Q6g7Tk0/Masturbator-White-Thick-Transparent.png" />  */}




            <div className='flex h-screen'>


                    <div className=' mx-auto z-0  top-0 h-screen  '>
                    
                    <img className={styles.figure} src="https://i.ibb.co/sFyFWsf/Bald.png"/>
                    <img className={styles.figure2} src="https://i.ibb.co/Q6g7Tk0/Masturbator-White-Thick-Transparent.png" /> 
                    {/* <Toolbar />  */}
                    {/* <p className="text-center  font-serif font-light "> u can cry if u want to</p> */}

                    <div className=" flex-auto mb-2 w-full  text[red]">
                                <h1 className={styles.crytext2mobile}>f𝓐q</h1>
                                {/* {faqComponents} */}
                            </div> 


                            <div className="  flex-auto mb-2 w-full  text[red]">
                                {/* <h1 className="border-b-[.5px] border-[#030303] flex-none pl-3 text-2xl py-8 font-black tracking-wide">.｡.:*☆ f𝓐q.｡.:*☆</h1> */}
                                {faqComponents}
                            </div> 




                    {/* <Footer></Footer> */}
                        </div>
                        
            </div>


            </section>
        </MobileView>

        <BrowserView>
            <section className="h-screen relative hidden md:block">
            {/* <img className=" w-2/6 absolute drop-shadow-[0_0px_5px_red]" src="https://i.ibb.co/Q6g7Tk0/Masturbator-White-Thick-Transparent.png" />  */}




            <div className='flex h-screen'>


                    <div className=' pt-36 mx-auto z-0 p-5 top-0 h-screen w-9/12 '>
                    
                    <img className={styles.figure} src="https://i.ibb.co/sFyFWsf/Bald.png"/>
                    <img className={styles.figure2} src="https://i.ibb.co/Q6g7Tk0/Masturbator-White-Thick-Transparent.png" /> 
                    {/* <Toolbar />  */}
                    {/* <p className="text-center  font-serif font-light "> u can cry if u want to</p> */}

                    <div className=" flex-auto mb-2 w-full p-2  text-center text[red]">
                                <h1 className={styles.crytext2}>f𝓐q</h1>
                                {/* {faqComponents} */}
                            </div> 


                            <div className="  flex-auto mb-2 w-full p-2  text-center text[red]">
                                {/* <h1 className="border-b-[.5px] border-[#030303] flex-none pl-3 text-2xl py-8 font-black tracking-wide">.｡.:*☆ f𝓐q.｡.:*☆</h1> */}
                                {faqComponents}
                            </div> 




                    {/* <Footer></Footer> */}
                        </div>
                        
            </div>


            </section>
        </BrowserView>



<div>
              
                </div> 
    {/* <FooterComponent></FooterComponent> */}
 
    </div>
}