import { useState } from 'react'
import { BrowserRouter,Routes ,Route} from 'react-router-dom'
import './App.css'
import './about.css'
import './plan.css'

// components


import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import Plan from './components/plan'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavBar />}>
          
              <Route index element={<Home />} />
              <Route path='about' element={<About />} />
              <Route path='plan' element ={<Plan />} /> 
            
          </Route>
        </Routes>
      </BrowserRouter>
        
    </>
  )
}

export default App
