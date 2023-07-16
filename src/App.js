
import './App.css';
import GoogleFontLoader from 'react-google-font-loader';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Footer from './components/Footer';
import Home from './components/main/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PeoplesData from './components/main/peopleInfo/PeoplesData';
import Navigationbar from './components/Navigationbar';
import MoreAbout from './components/main/moreAbout/MoreAbout';
import Contact from './components/main/contactsection/Contact';
import Payment from './components/main/payment/Payment';




function App() {

  AOS.init({
    offset: 150,
    duration: 800,
  });


  return (
    
    <div className="App">
       <GoogleFontLoader
        fonts={[
          {
            font: 'Playfair Display',
            weights: [400, 700],
          },
          {
            font: 'PT Sans',
            weights: [400, 600],
          },
          {
            font: 'Quicksand',
            weights: [400, 600],
          },
        ]}
      />
      
      <Navigationbar/>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Home/>}/>
          <Route path='more_about_us' element={<MoreAbout/>} />
          <Route path='people_details' element={<PeoplesData/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='donation' element={<Payment/>}/>
          
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
