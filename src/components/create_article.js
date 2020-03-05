import React from "react"
import styled from 'styled-components'
import Navbar from "./navbar_article";
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import Swal from 'sweetalert2'

const BigTitle = styled.h1`
  width: 80%;
  margin: auto;
  margin-bottom: 40px;
`

const Formulaire = styled.form`
  width: 80%;
  margin: auto;
`

const Title = styled.input`
  width: 100%;
  height: 40px;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #00447a;
`

const Content = styled.textarea`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  height: 200px;
  border: 1px solid #00447a;
`

const Envoyer = styled.input`
  border: 1px solid #00447a;
  background-color: #00447a;
  color: #fff;
  width: 100%;
  padding: 15px;
  position: fixed;
  bottom: 0;
  left: 0;
  text-transform: uppercase;
  font-weight: bold;
`


const CreateArticle = () => {
    const { handleSubmit, register, errors } = useForm()
    const history = useHistory()

    const onSubmit = values => {
        let articles = []
        let id = 0
        if(localStorage.getItem('articles')) {
            articles = JSON.parse(localStorage.getItem('articles'))
            id = articles.length
        }

        values.id = id
        articles.push(values)
        localStorage.setItem('articles', JSON.stringify(articles))

        Swal.fire(
            'Ma3lm sahbi !',
            'Création de l\'article réussie !',
            'success'
        )

        history.push('/')
    }

    return(
        <div>
            <Navbar />
            <BigTitle>Créer un article</BigTitle>
            <Formulaire onSubmit={handleSubmit(onSubmit)}>
                <label>Lien de l'image<br />
                    <Title type="text" name="image" ref={register({
                        required: 'Le champ image est requis'
                    })}/>
                </label>
                {errors.image}

                <br /><br />

                <label>Titre<br />
                    <Title type="text" name="title" ref={register({
                        required: 'Le champ titre est requis'
                    })}/>
                </label>
                {errors.title}

                <br /><br />

                <label>Contenu de l'article<br />
                    <Content name="content" ref={register({
                        required: 'Le champ contenu est requis'
                    })}/>
                </label>
                {errors.content}

                <br /><br />

                <Envoyer type="submit" name="envoyer" value="Envoyer" />
            </Formulaire>
        </div>
    )
}

export default CreateArticle
