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


    emailjs.sendForm('service_gkku8kk', 'template_a5hzny3', from.current, 'bOd7qfOOwQ3FR-WG0')
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

    <div className="allPageContact">


    <form ref={from} onSubmit={handelSend}  >

      <div >

        <div className="fullName">

      <input onInput={handleFullName} id="FullName" name="FullName"  placeholder="Full Name"  value={FullName} type="text" required />
      </div>
     
      <div className="email">
     
      <input onInput={handleEmail} id="email" name="email"  placeholder="Email" value={email} type="email" required/>
      </div>


      <div className="phoneNumber">
    
      <input onChange={handlePhoneNumber} id="phoneNumber" name="phoneNumber" value={phoneNumber} placeholder="Phone Number" type="tel" required/>
      </div>


      <div className="inputText">
      <textarea onChange={handleTextInput} id="message" name="message" placeholder="Message" value={message} type="text" rows="10" maxLength="100" required/>
      </div>

    <div className="btn">
      <Button type="submit"   variant="contained">SEND</Button>
    </div>
    


      </div>
  

      </form>
      </div>
    </div>
  )
}

export default Contact



