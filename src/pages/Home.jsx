import Hero from '../components/home/Hero'
import WhyAttend from '../components/home/WhyAttend'
import Marquee from '../components/home/Marquee'
// import StackedCardsSection from '../components/home/StackedCardsSection'
import About from '../components/home/About'
import WelcomeMessage from '../components/home/WelcomeMessage'
import Speakers from '../components/home/Speakers'
import EventHighlights from '../components/home/EventHighlights'
//import Partners from '../components/home/Partners'
import Venue from '../components/home/Venue'
import CTA from '../components/CTA'


function Home() {
  return (
    <>
    <Hero />
    <Marquee />
    {/* <StackedCardsSection /> */}
    <WelcomeMessage />
    <About />
    <WhyAttend />
    <EventHighlights />
    {/* <Partners /> */}
    <Venue />
    <CTA />
    </>
  );
}

export default Home;
