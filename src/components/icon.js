import React from 'react'
import styled from 'styled-components'
import user from '../assets/user.png'
import { useHistory } from "react-router-dom"

const Image = styled.img`
  width: 25px;
  margin: 15px;
`

const Icon = ({
    file = user,
    onclick = false
}) => {
    const history = useHistory()
    if(onclick)
        return <Image src={file} alt='icon' onClick={() => history.push("/")}/>
    else
        return <Image src={file} alt='icon'/>

}

export default Icon
