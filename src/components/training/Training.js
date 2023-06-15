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

<div class="flex flex-wrap justify-center mt-20 ">

      
 {!done ? <ReactLoading className='mt-20 ' type={"bars"} color={"black"} height={100} width={100}/>
 :
  training && training.map((t)=>
  <div className="rounded-lg shadow-lg bg-white max-w-sm m-5">

  <a href="#!">
  <video width="320" height="240" controls className="w-full rounded-t-lg">
      <source src={t.video} type="video/mp4"/>
      <source src="movie.ogg" type="video/ogg"/>
      Your browser does not support the video tag.
  </video>
</a>

 
  <p className="text-gray-700 text-base mb-4 flex justify-center">
        {t.description}
  </p>

</div>
  )  
 }
</div>
    
  );
};

export default Training;

