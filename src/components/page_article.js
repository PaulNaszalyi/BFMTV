import React, {useEffect, useState} from "react"
import { useParams } from 'react-router-dom'
import data from '../assets/articles'
import styled from "styled-components"
import Navbar from "./navbar_article"

const Image = styled.img`
  width: 100%;
`

const Title = styled.h2`
  padding: 10%;
`

const Text = styled.p`
  padding: 0 10%;
  text-align: justify;
`

const Article = () => {
    const idArticle = useParams()
    const [dataArticle, setDataArticle] = useState([])

    //console.log(dataArticle)
    useEffect(() => {
        const fetchArticles = () => {
            //On parcourt tout le fichier et on s'arrête quand on est sur le bon id
            Object.keys(data).forEach(res => {
                if(data[res].id === parseInt(idArticle.id)) {
                    setDataArticle(data[res])
                }
            })
        }
        fetchArticles()
    }, [idArticle.id])
    return(
        <div>
            <Navbar />
            <Image src={dataArticle.image} alt="Oui"/>
            <Title>{dataArticle.title}</Title>
            <Text>{dataArticle.content}</Text>
        </div>
    )
}

export default Article
