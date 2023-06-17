import {useRef, useState } from "react"
import "./Contact.css"
import { Card ,Button} from "@mui/material";
import swal from 'sweetalert'
import emailjs from 'emailjs-com';





const Contact = () => {

  const [FullName,setFullName] = useState('')
  const [email,setEmail] = useState('')
  const [phoneNumber,setPhoneNumber] = useState('')
  const [message,setMessage] = useState('')
  const from = useRef()
 
  const handleFullName = (e)=>{
    setFullName(e.target.value)
  }

  const handleEmail = (e)=>{
    setEmail(e.target.value)
  }

  const handlePhoneNumber = (e)=>{
    setPhoneNumber(e.target.value)
  }

  const handleTextInput = (e)=>{
    setMessage(e.target.value)
  }


const handelSend = async (e)=>{
  e.preventDefault()


    emailjs.sendForm('service_12jj8l8', 'template_a5hzny3', from.current, 'bOd7qfOOwQ3FR-WG0')
      .then((result) => {

          swal({
            title:"SEND",
            button:"OK"
          })
          
          setFullName("")
          setEmail("")
          setPhoneNumber("")
          setMessage("")
      }, (error) => {
          console.log(error.text);
      });

  
  
}
  

  return (

    <div>
          <Card ><h1 className='title-training'> Let's Talk</h1></Card>

    <div className="flex justify-center  overflow-hidden">
    <div className="bg-black/25 p-8 md:p-12 lg:px-16 lg:py-4 mt-7">
      
    <div  className="container px-8 md:px-12 ">
        <div class=" grid gap-x-8 md:grid-cols-2 lg:grid-cols-3">
          
          <div class="mx-auto mb-12 text-center lg:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
              stroke="currentColor" class="mx-auto mb-6 h-8 w-8 text-primary dark:text-primary-400">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
            </svg>
            <h6 class="font-medium">ישראל</h6>
          </div>

          <div class="mx-auto mb-12 text-center lg:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
              stroke="currentColor" class="mx-auto mb-6 h-8 w-8 text-primary dark:text-primary-400">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            <h6 class="font-medium">תל-אביב</h6>
          </div>

          <div class="mx-auto mb-6 text-center md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
              stroke="currentColor" class="mx-auto mb-6 h-8 w-8 text-primary dark:text-primary-400">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            <h6 class="font-medium">054-4825725</h6>
          </div>

    




    </div>
    <form ref={from} onSubmit={handelSend}  >

    <div class="relative mb-6" data-te-input-wrapper-init>
             <input className="peer block min-h-[auto] w-full rounded border-0 py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0" onInput={handleFullName} id="FullName" name="FullName"  placeholder="Full Name"  value={FullName} type="text" required />
             <label className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-900 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary" for="exampleInput90">שם מלא</label>
            </div>


            <div class="relative mb-6" data-te-input-wrapper-init>
            <input className="peer block min-h-[auto] w-full rounded border-0 py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0" onInput={handleEmail} id="email" name="email"  placeholder="Email" value={email} type="email" required/>
             <label className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-900 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary" for="exampleInput90">מייל</label>
            </div>

            <div class="relative mb-6" data-te-input-wrapper-init>
              <input className="peer block min-h-[auto] w-full rounded border-0 py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0" onChange={handlePhoneNumber} id="phoneNumber" name="phoneNumber" value={phoneNumber} placeholder="Phone Number" type="tel" required/>
             <label className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-900 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary" for="exampleInput90"> טלפון</label>
            </div>
            
             <div class="relative mb-6" data-te-input-wrapper-init>
             <textarea className="peer block min-h-[auto] w-full rounded border-0 py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0" onChange={handleTextInput} id="message" name="message" placeholder="Message" value={message} type="text" rows="10" maxLength="100" required/>
             <label className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-900 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary" for="exampleInput90">הודעה</label>
            </div>

            <Button className="inline-block w-full rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] lg:mb-0" type="submit" variant="contained">שליחה</Button>
      </form>
    
    </div>
    </div>
    </div>
    </div>
  )
}

export default Contact

