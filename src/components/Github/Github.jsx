import React, { useState,useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // const [data,setData]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         setData(data);
    //     })
    // },[])
    const data=useLoaderData()

  return (
    <div className='text-center m-4 bg-gray-700 text-white p-4 text-3xl'>
      Github Followers:{data.followers}
      <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader=async()=>{
  const res=await fetch('https://api.github.com/users/mdarbaz1712')
  return res.json();
}
