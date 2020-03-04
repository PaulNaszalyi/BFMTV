import React from "react"
import Icon from "./icon";
import arrow from "../assets/left-arrow.png"
import styled from 'styled-components'
import Logo from "./logo"

const Header = styled.div`
  width: 100%;
  height: 60px;
  background-color: #00447A;
  position: fixed;
  top: 0;
  left: 0;
`

const Navbar = () => {
    return (
        <Header>
            <Logo />
            <Icon file={arrow} small onclick={true}/>
        </Header>
    )
}

export default Navbar
