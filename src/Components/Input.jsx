import React from 'react'


const Input = ({data,handleChange}) => {
  return (
    <aside> 
        <label htmlFor={data.name}>{data.label}</label>
        <input
         type= {data.type}
        placeholder = {data.placeholder}
        name = {data.name}
        value = {data.value}
        onChange = {handleChange}/>
    </aside>
  )
}

export default Input
