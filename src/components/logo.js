import React from "react"
import icon from "../assets/Logo.png";
import styled from 'styled-components'

const Image = styled.img`
  width: 60px;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%);
`

const Logo = () => {
    return (
        <Image src={icon}/>
    )
}

export default Logo
