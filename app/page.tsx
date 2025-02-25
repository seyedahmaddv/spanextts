
import Navbar from "./components/Navbar";
import Contactform from "./components/Contactform";
import Herosection from "./components/Herosection";
import '@iconscout/unicons/css/line.css';
import Secondsection from "./components/Secondsection";

import Fourthsection from "./components/Fourthsection";
export default function Home() {
  return (
    <>
    <Navbar/>
    <Herosection/>
    <Secondsection/>
    
    <Fourthsection/>
    <Contactform/>
    </>
  );
}
