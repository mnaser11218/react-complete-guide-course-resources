import { Title } from '@mui/icons-material'
import Img from './assets/react-core-concepts.png'
import CoreConcepts from './components/CoreConcepts.jsx';
import Header from './components/Header/Header';
import TabButton from './components/TabButton';
import { useState } from 'react';
import {CORE_CONCEPTS} from './data.js'
import Examples from './components/Examples.jsx';
function App() {
  return (
    <div>
     <Header/>
      <main>
        <CoreConcepts/>
        <Examples/>
      </main>
    </div>
  );
}

export default App;
