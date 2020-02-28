import React from 'react'
import Navbar from "./navbar"
import Article from "./article"
import New from '../components/new'
import styled from "styled-components"
import articles from '../assets/articles'
import news from '../assets/news'

const ContainerNews = styled.div`
  width: 94vw;
  background-color: #fff;
  border: 1px solid #d5d5d5;
  margin: auto;
  margin-bottom: 13px;
  padding: 0;
`

const ScrollContainer = styled.div`
  height: 200px;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`

const TitleNews = styled.h2`
  color: #EC8A08;
  font-weight: 500;
  border-bottom: 1px solid #d5d5d5;
  padding: 13px;
`

const Home = () => {
    return (
        <div>
            <Navbar/>

            {articles.map(article => {
                return (
                    <Article key={article.id} image={article.image} content={article.content} />
                )
            })}

            <ContainerNews>
                <TitleNews>News 24/7</TitleNews>
                <ScrollContainer>
                    {news.map(res => {
                        return (
                            <New time={res.time} content={res.content}/>
                        )
                    })}
                </ScrollContainer>
            </ContainerNews>
        </div>
    )
}

export default Home
