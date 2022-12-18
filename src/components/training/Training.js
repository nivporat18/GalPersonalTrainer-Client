import React, { useEffect, useState } from "react";
import "./Training.css";
import ReactPlayer from "react-player";
import { Card ,Typography} from "@mui/material";
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
    <div>
    <Card ><h2 className='title-training'> Training</h2></Card>

    <div className="allPage"> 
    
    {
        !done ? <ReactLoading type={"bars"} color={"black"} height={100} width={100}/>
    :


   training && training.map((t)=>
    <div key={t._id} className="allTraining">
      

      <div className="video">
      <ReactPlayer
        url={t.video}
        playing={false}
        controls
        volume={0}
        width="100%"
        height="auto"
      />
      </div>

    
  <div className="typography">
       <Typography gutterBottom variant="h5" >
          {t.description}
        </Typography>
      </div>
      
  </div>
  
    )}

    
      
    </div>

    </div>
  );
};

export default Training;
