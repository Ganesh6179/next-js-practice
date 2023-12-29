import React from 'react'

const All = ({params}) => {
    console.log(params)
  return (
    <div>
        <h1>Params</h1>
        {
            params.all.map((p)=>{
                return <li>{p}</li>
            })
        }
    </div>
  )
}

export default All