'use client'

import React from "react";
import { useRouter } from "next/navigation";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets:['latin'],
  weight:'500',
  style:'italic'
})
const Home = () => {
  const route = useRouter()

  return (
  <div>
    <h1 className={roboto.className}>This is Roboto Fonts</h1>
    <div>
    <button onClick={()=>route.push('login')}>Go to Login Page</button>
    <br/>
    <button onClick={()=>route.push('register')}>Go to register Page</button>
    </div>
    </div>
  )
};

export default Home;
