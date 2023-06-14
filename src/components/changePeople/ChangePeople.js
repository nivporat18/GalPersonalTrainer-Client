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

    <div class="flex flex-wrap justify-center mt-20">

{
        !done ? <ReactLoading className='mt-20' type={"bars"} color={"black"} height={100} width={100}/>
    :


      changePeople && changePeople.map((c)=>
      <div class="relative flex justify-center items-center w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md m-5">
      <div class="relative    overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg ">
        <img src={c.imgBefore} alt={c.description}/>
      </div>
    </div>


      )}


    </div>

  )
}

export default ChangePeople
