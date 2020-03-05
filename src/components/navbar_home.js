import React from 'react'
import styled from 'styled-components'
import Icon from './icon'
import tv from '../assets/screen.png'
import audio from '../assets/headphones.png'
import plus from '../assets/plus.png'
import Logo from "./logo"
import { useHistory } from 'react-router-dom'

const Header = styled.div`
  width: 100%;
  height: 60px;
  background-color: #00447A;
  position: fixed;
  top: 0;
  left: 0;
`

const Bar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Navbar_home = () => {
    const history = useHistory()

    return (
        <Header>
            <Logo />
            <Bar>
                <Icon file={plus} small onClick={() => history.push('/new-article')}/>
                <div>
                    <Icon file={tv} />
                    <Icon file={audio} />
                </div>
            </Bar>
        </Header>
    )
}

export default Navbar_home
