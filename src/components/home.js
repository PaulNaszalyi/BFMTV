import React from 'react'
import Navbar from "./navbar"
import Article from "./article"
import styled from 'styled-components'

const DivArticle = styled.div`

`

const Home = () => {
    const data = [
        {
            image: '',
            content: ''
        },
        {
            image: '',
            content: ''
        },
        {
            image: '',
            content: ''
        },
        {
            image: '',
            content: ''
        }
    ]
    return (
        <div>
            <Navbar/>
            {data.map(article => {
                return (
                    <DivArticle image={''} content={''}/>
                )
            })}
        </div>
    )
}

export default Home
