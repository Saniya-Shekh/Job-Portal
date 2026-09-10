import React from 'react'
import Input from './Input'

const FormStructure = ({imagePath, formData, handleChange, handleSubmit}) => {
    return (
        <>
          <article>
            <img src={imagePath} alt="" />
          </article>
          <article>
          <form onSubmit={handleSubmit}>
             {formData.map(value => {
               return <Input data={value} handleChange= {handleChange}>
               </Input>
             
              })}
               <button>Submit</button>
           </form>
          </article>
    </>
  )
}

export default FormStructure
