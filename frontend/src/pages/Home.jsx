import React from 'react';
import '../styles/homeComponents.css'
import homevideo from '../assets/videos/vid9.mp4';
import WelcomSection from '../components/home/WelcomSection';
import WhyusSection from '../components/home/WhyusSection';
import OurcoursesSection from '../components/home/OurcoursesSection';
import OurteachersSection from '../components/home/OurteachersSection';

const Home = () => {
  return (
    <>
      <div className='maindivhome my-20'>
        <div className="homevideo">
          <video 
            id="homevideo" 
            src={homevideo} 
            autoPlay 
            muted 
            loop 
            style={{ width: '100%' }} 
          />
        </div>
        <WelcomSection />
        <WhyusSection />
        <OurcoursesSection />
        <OurteachersSection />
      </div>
    </>
  );
}

export default Home;
