import React, { useEffect, useState } from 'react'
import './ChangePeople.css'
import ReactLoading from 'react-loading'


function ChangePeople() {

    const [changePeople,setChangePeople] = useState()
    const [done,setDone] = useState(undefined)

    const getAllChangePeople = async()=>{
      try{
        const url = "https://galporatpersonalbackend.onrender.com/api/before&after"
        const res = await fetch(url)
        const resJson =await res.json()
        setChangePeople(resJson)
        setDone(true)
      }catch(e){
        setChangePeople(e)
        setDone(e)
      }

    
    }


    useEffect(()=>{
      setTimeout(()=>{
        getAllChangePeople()
      },1000)
      
    },[])



  return (

    <div className="flex justify-center mt-20 container mx-auto px-8">
    <div className='grid lg:grid-cols-3 gap-6 md:grid-cols-2 '>


{
        !done ? <ReactLoading className=' mt-20' type={"bars"} color={"black"} height={100} width={100}/>
    :


   
      changePeople && changePeople.map((c)=>
      
      <div className=" shadow-lg rounded-lg">
        <img className=' round-t-lg' src={c.imgBefore} alt={c.description}/>
        <h3>{c.description}</h3>
      </div>
   


      )}
        </div>



    </div>

  )
}

export default ChangePeople
