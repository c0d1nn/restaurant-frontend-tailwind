import Download from "./components/Download";
import Easy from "./components/Easy";
import Food from "./components/Food";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import {useState} from 'react'

function App() {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const toggleCartVisibility = () => {
    setIsCartVisible(prev => !prev);
  };

  return (
    <div>
      <Navbar toggleCartVisibility={toggleCartVisibility}/>
      <Hero/>
      <Food isCartVisible={isCartVisible}/>
      <Easy/>
      <Download/>
      <Footer/>
    </div>
  );
}

export default App;
