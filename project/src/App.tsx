import React from 'react';
import SmoothScroll from './components/SmoothScroll';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import TopPlacements from './components/TopPlacements';
import MeetDirectors from './components/MeetDirectors';
import PopularCourses from './components/PopularCourses';
import LifeAtJD from './components/LifeAtJD';
import TopAlumni from './components/TopAlumni';
import AwardsRecognition from './components/AwardsRecognition';
import TalkOfTown from './components/TalkOfTown';
import Testimonials from './components/Testimonials';

import Contact from './components/Contact';
import WhatsAppFloat from './components/WhatsAppFloat';
import Footer from './components/Footer';

function App() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <HeroSection />
          <TopPlacements />
          <MeetDirectors />
          <PopularCourses />
          <LifeAtJD />
          {/* <TopAlumni />
          <AwardsRecognition /> */}
          <TalkOfTown />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        <WhatsAppFloat />

      </div>
    </SmoothScroll>
  );
}

export default App;