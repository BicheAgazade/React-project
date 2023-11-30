import './App.css';
import Bracelet from './component/pages/bracelet';
import Earring from './component/pages/earring';
import Home from './component/pages/home';
import Necklace from './component/pages/necklace';
import Ring from './component/pages/ring';
import{Routes,Route} from 'react-router-dom'
import Shop from './component/pages/shop';
import AboutUs from './component/aboutus/AboutUs';
import Contact from './component/contact/Contact';
import Selling from './component/selling/Selling';



function App() {


  return (
    <div className="App">
           
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/earrings' element={<Earring/>} />
          <Route path='/necklaces' element={<Necklace/>} />
          <Route path='/bracelets' element={<Bracelet/>} />
          <Route path='/rings' element={<Ring/>} />
          <Route path='/shops' element={<Shop/>} />
          <Route path='/aboutus' element={<AboutUs/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/bestselling" element={<Selling/>} />
        </Routes>
        
    </div>
  )
   
}

export default App;












