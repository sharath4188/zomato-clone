import './App.css'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Card from './Card'
import { useState } from 'react'
import { useContext } from 'react'
import { DataContext } from './Datacontext'
import FoodCarousel from './FoodCarousel'

function App() {
  const [activeFilter, setActiveFilter] = useState('all');
  
   const [isSearchFocused, setIsSearchFocused] = useState(false);
  const[filtertype,setfiltertype]=useState('all');
  const handlefilter=(type)=>{setfiltertype(type) ,  setActiveFilter(type); setIsSearchFocused(true);} 
 if (setfiltertype==='all'){
   setIsSearchFocused(false);

 }
      const { data } = useContext(DataContext);
      const[searchterm,setsearchterm]=useState('');
     
     const searcheddish= data.filter(searcheditem=>{return searcheditem.name.toLowerCase().includes(searchterm.toLowerCase())})
     const carousel=data.filter(items=>items.rating>=4.8)
  
  return (<>
 <Navbar searchTerm={searchterm}  setSearchTerm={setsearchterm} setIsSearchFocused={setIsSearchFocused}/>

 <FoodCarousel items={carousel} isSearchFocused={isSearchFocused}/>

  <div className='relative flex flex-col-reverse '>
<Card filtertype={filtertype}  searcheddish={searcheddish}/>  
   <Sidebar onfilter={handlefilter} isSearchFocused={isSearchFocused} activeFilter={activeFilter} />

  </div>
  
  
   


  </>
   
  )
}

export default App
