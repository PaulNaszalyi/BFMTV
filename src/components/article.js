import React from "react";
import styled from 'styled-components'

const Container = styled.div`
  width: 94vw;
  background-color: #fff;
  border: 1px solid #d5d5d5;
  margin: auto;
  margin-bottom: 13px;
  padding: 0;
`

const Image = styled.img`
  width: 100%;
  margin: 0;
`

const Paragraph = styled.p`
  padding: 10px;
`

const Link = styled.a`
  text-decoration: none;
  color: #000;
  outline: none;
`

const Article = ({
    id = '',
    image = '',
    title = ''
}) => {
    return (
        <Container>
            <Link href={`/article/${id}`}>
                <Paragraph>{title}</Paragraph>
                <Image src={image} alt='' />
            </Link>
        </Container>
    )
}

export default Article
