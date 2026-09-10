import React from 'react'
import {Link} from 'react-router-dom'

const Ul = ({data}) => {
  return (
        <>
           <ul>
            {data.map(value => {
                return (
                 <li key={value.path}>
                    <Link to={value.path}>{value.name}</Link>
                </li>
                )
            })}
        </ul>
  </>
    
  )
}

export default Ul

