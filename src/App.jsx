
import { Suspense } from 'react';
import './App.css'
import DaisyNav from './Components/DaisyNav/DaisyNav';
import Navbar from './Components/Navbar/Navbar';
import PricingOptions from './Components/PricingOptions/PricingOptions';

const pricingPromises = fetch('Pricing.json').then(data => data.json())

function App() {

  return (
    <>
      <header>
        <Navbar></Navbar>
        {/* <DaisyNav></DaisyNav> */}
      </header>
      <main>
        <Suspense 
          fallback={<span className="loading loading-bars loading-xl "></span>}
        >
          <PricingOptions pricingPromises={pricingPromises}></PricingOptions>
        </Suspense>
      </main>
    </>
  );
}

export default App
