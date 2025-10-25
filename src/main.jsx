import { createRoot } from 'react-dom/client'
import { Routes,Route, BrowserRouter } from "react-router-dom"
import Dataprovider from './Data.jsx'
import './index.css'
import App from './App.jsx'
import Loginpage from './Loginpage.jsx'
import Signup from './Signup.jsx'
import Dish from './Dish.jsx'  
import Cart from './Cart.jsx'  
import Orders from './Orders.jsx'   
import { UserProvider } from './UserContext.jsx'
import Userprofile from './Userprofile.jsx'
import About from './About.jsx'

  createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <UserProvider>

        <Dataprovider>
            <Routes>
              <Route path="/About" element={<About />} />

              <Route path="/Userprofile/*" element={<Userprofile/>}/>
              <Route path="/Orders/*" element={<Orders />} />
                <Route path="/Cart/*" element={<Cart />} />
                <Route path="/:name" element={<Dish />} />
                <Route path="/" element={<Loginpage />} />
                <Route path="/App" element={<App />} />
                <Route path="/Signup" element={<Signup />} />   
            </Routes>
        </Dataprovider>
        </UserProvider>
    </BrowserRouter>
  
)
