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
    back = false,
    plus = false
}) => {
    const history = useHistory()
    if(back)
        return <Image src={file} alt='icon' onClick={() => history.push("/")}/>
    else if(plus)
        return <Image src={file} alt='icon' onClick={() => history.push("/new-article")}/>
    else
        return <Image src={file} alt='icon'/>

}

export default Icon
