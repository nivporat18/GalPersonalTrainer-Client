import React, { useEffect, useState } from 'react'
import './ChangePeople.css'
import { Card } from "@mui/material";
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
    <div > 
<Card ><h2 className='title-training'> Before & After</h2></Card>

<div className="allPage"> 

{
        !done ? <ReactLoading type={"bars"} color={"black"} height={100} width={100}/>
    :


changePeople && changePeople.map((c)=>
   <div key={c._id} className="allChange">
<div key={c.id} className="changePeople">

  <div className='img1'>
    <img src={c.imgBefore} alt={c.description} width="400px"/>
    </div>


</div>
</div>

      )}





   
</div>
</div>
  )
}

export default ChangePeople