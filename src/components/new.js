import React from "react"
import styled from "styled-components"
import clock from '../assets/clock.png'

const Container = styled.div`
  padding: 10px;
`

const Icon = styled.img`
  width: 10px;
`

const Time = styled.span`
  color: #9e9e9e;
  font-weight: bold;
  font-size: 14px;
  margin: 0 10px 0 5px;
`

const New = ({
    time = '',
    content = ''
}) => {
    return (
        <Container>
            <p>
                <Icon src={clock} alt="Clock" small/>
                <Time>{time}</Time>
                {content}
            </p>
        </Container>
    )
}

export default New
