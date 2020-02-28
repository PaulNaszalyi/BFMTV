import React from 'react'
import styled from 'styled-components'
import user from '../assets/user.png'

const Image = styled.img`
  width: 25px;
  margin: 15px;
`



const Icon = ({
    file = user
}) => {
    return (
        <Image src={file} alt='icon'/>
    )
}

export default Icon
