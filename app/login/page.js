import React from 'react'
import Image from 'next/image'
import NatureImage from '../../public/background.jpg'


const Login = () => {

  return (
    <div>
    <Image src={NatureImage} alt='Nature' width={1000} height={1000}/>
    <Image src='https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' width={1000} height={1000}/>
    </div>
  )
}

export default Login