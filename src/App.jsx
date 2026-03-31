
import { Suspense } from 'react';
import './App.css'
import DaisyNav from './Components/DaisyNav/DaisyNav';
import Navbar from './Components/Navbar/Navbar';
import PricingOptions from './Components/PricingOptions/PricingOptions';
import ResultsChart from './Components/ResultsChart/ResultsChart';
import axios from 'axios';
import MarkDataChart from './Components/MarkDataChart/MarkDataChart';

const pricingPromises = fetch('Pricing.json').then(data => data.json())
const marksPromises = axios.get('MarksData.json')

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

        <Suspense
          fallback={<span className="loading loading-bars loading-xl "></span>}
        >

          <MarkDataChart marksPromises={marksPromises}></MarkDataChart>
        </Suspense>

        <ResultsChart></ResultsChart>
      </main>
    </>
  );
}

export default App
