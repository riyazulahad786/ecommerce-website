import Navbar from './components/Navbar';

import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react';
import Calorfonia from './components/Calorfonia';
import Home from './components/Home';
import {Routes,Route} from 'react-router-dom'
import Product from './components/product';
function App() {
  const [progress, setProgress] = useState(100)

  return (
    <div >
    {/* <Routes> */}
      <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(100)}
      />
     <Navbar title='Europe'/>
     {/* <Route exact path='/' component={ <Home/>}/>
     <Route exact path='/products' component={ <Product/>}/> */}
     <Home/>
     {/* </Routes> */}
 
     
    </div>
  );
}

export default App;
