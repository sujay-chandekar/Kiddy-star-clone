import React from 'react';
import Header from '@/Componets/Header';
import Main from './Main/page';
import Creativity from './Creatvity/page';
import About from './About/page';
import Resources from './Resources/page';
import  Teachers  from './Teachers/page';
import Contact from './Contact/page';

export default function Home() {
  return (
    <div>
      <Main />
      <About />
      <Resources />
      <Creativity />
      <Teachers />
      <Contact />
    </div>
  );
}
