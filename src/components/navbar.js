import React from 'react'
import styled from 'styled-components'
import Icon from './icon'
import icon from '../assets/Logo.png'
import tv from '../assets/screen.png'
import audio from '../assets/headphones.png'
import menu from '../assets/menu.png'

const Header = styled.div`
  width: 100%;
  height: 60px;
  background-color: #00447A;
  position: fixed;
  top: 0;
  left: 0;
`

const Logo = styled.img`
  width: 60px;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%);
`

const Bar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Navbar = () => {
    return (
        <Header>
            <Logo src={icon}/>
            <Bar>
                <Icon file={menu} small/>
                <div>
                    <Icon file={tv} />
                    <Icon file={audio} />
                </div>
            </Bar>
        </Header>
    )
}

export default Navbar
