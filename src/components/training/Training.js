import React, { useEffect, useState } from "react";
import "./Training.css";
import ReactLoading from 'react-loading'


const Training = () => {



  const [training,setTraining] = useState()
  const [done,setDone] = useState(undefined)
  
  const getAllTraining = async ()=>{
    try{
    const url =  "https://galporatpersonalbackend.onrender.com/api/videotraining"
    const res = await fetch(url)
    const resJson = await res.json()
    setTraining(resJson)
    setDone(true)
    }catch(e){
      setTraining(e)
      setDone(false)
    }

  }

  useEffect(()=>{
    setTimeout(()=>{
      getAllTraining()
    },1000)

  },[])

  return (

    <div class="flex flex-wrap justify-center mt-20">
      
 {!done ? <ReactLoading className='mt-20' type={"bars"} color={"black"} height={100} width={100}/>
 :
  training && training.map((t)=>
  <div class="flex justify-center ">
  <div class="rounded-lg shadow-lg bg-white max-w-sm m-5">
 
          <video  controls className="w-full h-auto rounded-t-lg">
              <source src={t.video} type="video/mp4"/>
              <source src="movie.ogg" type="video/ogg"/>
          </video>
     
      <div class="p-6">
          <h5 class="text-gray-900 text-xl font-medium mb-2">{t.description}</h5>
       </div>
  </div>
 </div>
  )  
 }

    </div>
  );
};

export default Training;

