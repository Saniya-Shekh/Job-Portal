import {useState}from 'react'
import FormStructure from '../../Components/FormStructure'

const SchoolRegister = () => {
    let[registerDetails,setRegisterDetails] = useState({
        email: '',
        password: ''
    })

    let{email,password} = registerDetails

    let registerData = [
        {
            label : 'Email',
            placeholder: 'Enter Your Email',
            type: 'email',
            name: 'email',
            value: email
        },
        {
            label: 'Password',
            placeholder: 'Enter Your Password',
            type: 'password',
            name: 'password',
            value: password
        }
    ]

   let handleChange = e => {
    let {name,value} = e.target
    setRegisterDetails({
        ...registerDetails , [name]: value
    })
   }

   let handleSubmit = e => {
    e.preventDefault()
    console.log(registerDetails)
    

    setRegisterDetails({
        email: '',
        password: ''
    })
   }


  return (
    <>
    <FormStructure
      imagePath = '../../../public/favicon.svg'
      formData={registerData}
      handleChange = {handleChange}
      handleSubmit={handleSubmit}>
    </FormStructure>

    </>
     
    
  )
}

export default SchoolRegister
