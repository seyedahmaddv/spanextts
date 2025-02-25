import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Contactform from "./components/Contactform";
import Herosection from "./components/Herosection";
import '@iconscout/unicons/css/line.css';
import Secondsection from "./components/Secondsection";
import TirthSection from "./components/TirthSection";
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
