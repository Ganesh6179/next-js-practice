import React from 'react'
import { Redirect, redirect } from 'next/navigation'

const users = ({params}) => {
    if(params.user==5){
        redirect('/')
    }
  return (
    <div>{params.user}</div>
  )
}

export default users