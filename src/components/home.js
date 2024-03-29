import React from 'react'
import Navbar from "./navbar_home"
import Article from "./article"
import New from '../components/new'
import styled from "styled-components"
import news from '../assets/news'
import articles from '../assets/articles'

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
    //On met le contenu de articles.json dans le localStorage
    if(!localStorage.getItem('articles')) {
        let local = []
        Object.keys(articles).forEach(key => {
            if(localStorage.getItem('articles')) local = JSON.parse(localStorage.getItem('articles'))
            local.push(articles[key])
            localStorage.setItem('articles', JSON.stringify(local))
        })
    }

    return (
        <div>
            <Navbar/>
            {JSON.parse(localStorage.getItem('articles')).map(article => {
                return (
                    <Article key={article.id} id={article.id} image={article.image} title={article.title} />
                )
            })}
            <ContainerNews>
                <TitleNews>News 24/7</TitleNews>
                <ScrollContainer>
                    {news.map(res => {
                        return (
                            <New key={res.id} time={res.time} content={res.content}/>
                        )
                    })}
                </ScrollContainer>
            </ContainerNews>
        </div>
    )
}

export default Home
