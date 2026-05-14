import { CalendarDays, MapPin, Sparkles, Hospital, Users, Mic, Building2, Presentation } from "lucide-react";
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Hero from '../components/home/Hero'
import WhyAttend from '../components/home/WhyAttend'
import Marquee from '../components/home/Marquee'
import About from '../components/home/About'
import WelcomeMessage from '../components/home/WelcomeMessage'
import Speakers from '../components/home/Speakers'
import EventHighlights from '../components/home/EventHighlights'
import Partners from '../components/home/Partners'
import Venue from '../components/home/Venue'
import CTA from '../components/home/CTA'


function Home() {
  return (
    <>
    <Hero />
    <Marquee />
    <WelcomeMessage />
    <About />
    <WhyAttend />
    <Speakers />
    <EventHighlights />
    <Partners />
    <Venue />
    <CTA />
    </>
  );
}

export default Home;
