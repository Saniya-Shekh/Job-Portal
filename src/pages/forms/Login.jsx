import {useState} from 'react'
import FormStructure from '../../Components/FormStructure'

const Login = () => {
  let[loginDetails, setLoginDetails] = useState({
    email: '',
    password: ''
  })

  let {email,password} = loginDetails

  let loginData = [
    {
      label: 'Email',
      placeholder: 'Enter Your Email',
      type: 'email',
      name : 'email',
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

  let handleChange = (e) => {
    let{name,value} = e.target 
    setLoginDetails ({
      ...loginDetails , [name]: value
    })
  }


  let handleSubmit = e => {
    e.preventDefault()
    console.log(loginDetails)

  setLoginDetails({
    email: '',
    password: ''
  })


  }
  return (
    <>
    <FormStructure 
     imagePath= '../../../public/favicon.svg'
     formData={loginData}
     handleChange={handleChange}
     handleSubmit={handleSubmit}>
    </FormStructure>
      
    </>
  )
}

export default Login
