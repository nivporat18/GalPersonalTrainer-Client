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
    <header className="bg-white">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-auto items-center justify-between">
      <div className="md:flex md:items-center md:gap-12">
        <img src={logo} alt="Logo" className="block text-teal-600 w-[73px]"/>
      </div>

      <div class="hidden md:block">
        <nav aria-label="Global">
          <ul class="flex items-center gap-6 text-sm">
            <li>
            <Link   className="text-gray-500 transition hover:text-gray-500/75" to="/home">About</Link>
            </li>

            <li>
            <Link className="text-gray-500 transition hover:text-gray-500/75" to="/training">Training</Link>
            </li>

            <li>
            <Link    className="text-gray-500 transition hover:text-gray-500/75" to="/before&after">Before & After</Link>
            </li>

            <li>
            <Link className="text-gray-500 transition hover:text-gray-500/75" to="/contact">Let's Talk</Link>
            </li>

          </ul>
        </nav>
      </div>

      <div className="flex items-center gap-4">

        <div className="block md:hidden" onClick={toggleNav}>
          {isOpen ?   <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"><img src={close} alt="close"/></button>    : 
           <button
            className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75" >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button> }
        </div>  
      </div>

        {isOpen && (
            <div className="items-center justify-between  w-full md:flex md:w-auto md:order-1" id="navbar-sticky">

               <div class="md:block">
               <nav aria-label="Global">
                 <ul className=" flex flex-col md:p-0 items-center font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800  dark:border-gray-700 ">
                   <li>
                   <Link   className="text-gray-500 transition hover:text-gray-500/75" to="/home">About</Link>
                   </li>
       
                   <li>
                   <Link className="text-gray-500 transition hover:text-gray-500/75" to="/training">Training</Link>
                   </li>
       
                   <li>
                   <Link    className="text-gray-500 transition hover:text-gray-500/75" to="/before&after">Before & After</Link>
                   </li>
       
                   <li>
                   <Link className="text-gray-500 transition hover:text-gray-500/75" to="/contact">Let's Talk</Link>
                   </li>
       
                 </ul>
               </nav>
             </div>

             </div>
        )}


    </div>
  </div>
</header>

  )
}

export default NavBar


   
  
    
    
