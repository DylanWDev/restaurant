"use client"
import axios from 'axios'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Navbar from './components/navbar'



export default function Home() {
  async function axiosCall() {
   
      const api_url = 'https://www.jsonkeeper.com/b/MDXW'
      const result = await axios.get(api_url);
      console.log(result)
    
  }
  axiosCall()
  return (
    <>
      <Navbar/>
    </>
  )

}

