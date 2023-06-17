import "./NavBar.css"
import logo from "../images/logo.jpg"
import close from "../images/close.png"
import { Link } from "react-router-dom"
import { useState } from "react"



const NavBar = () => {

  const [isOpen,setOpen] = useState(false)

  const toggleNav = ()=>{
    setOpen(!isOpen)
  }

  return (
<nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
 
  

 <div className='flex'>

 <div>
 <img src={logo} alt="Logo" className="block text-teal-600 w-[73px]"/>
 </div>
 





   

<div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto ">





   
 
 <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
   
 <ul className=" flex md:p-0 items-center font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 ">
  

             <li>
             <Link className="block m-3 py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" to="/home">אודות</Link>
             </li>

             <li>
             <Link className="block m-3 py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" to="/training">אימונים</Link>
             </li>

             <li>
             <Link className="block m-3 py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" to="/before&after">לפני & אחרי</Link>
             </li>

             <li>
             <Link  className="block m-3 py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" to="/contact">יצירת קשר</Link>
             </li>
  
  
 </ul>
 



 </div>
 
</div>













{/* {Mobile} */}
<div className="flex md:order-2 md:hidden" onClick={toggleNav}>

{isOpen ? <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"><img src={close} alt="close"/></button> :  
         <button
            className="rounded  p-2 text-gray-600 transition hover:text-gray-600/75" >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button> }  
</div>
</div>
 {isOpen && (


<div className="items-center justify-between  w-full md:flex md:w-auto md:order-1" id="navbar-sticky">




<ul className=" flex flex-col md:p-0 items-center font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 ">

              <li>
             <Link className="block m-3 py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" to="/home">אודות</Link>
             </li>

             <li>
             <Link className="block m-3 py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" to="/training">אימונים</Link>
             </li>

             <li>
             <Link className="block m-3 py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" to="/before&after">לפני & אחרי</Link>
             </li>

             <li>
             <Link  className="block m-3 py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" to="/contact">יצירת קשר</Link>
             </li>
  
 
</ul>

</div>


)}

</nav>

  )
}

export default NavBar


   