import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import {
  Container,
  ContainerPost,
  ContainerTitle,
  ContainerText,
  Title,
  Text,
  ButtonComments,
  TextButton,
  ContainerButtons,
  ContainerButtonPost,
  ContainerCreate,
  Button,
  ContainerComments,
} from './styles'
import Input from '../../components/Input'

import api from '../../service/api'

function HomePage() {
  const [posts, setPosts] = useState([])
  const [text, setText] = useState([])
  const [isCreatePost, setCreatePost] = useState(false)
  const [isCreateComment, setCreateComment] = useState(false)
  const [post_id, setPostId] = useState('')

  async function listPosts() {
    const token = `Bearer ${localStorage.getItem('token')}`

    const response = await api.get('/posts', {
      headers: { authorization: token },
    })

    setPosts(response.data.content)
  }

  function onChangeText(e) {
    setText(e.target.value)
  }

  function formatDate(date) {
    const dateFormated = dayjs(date).format('DD/MM/YYYY hh:mm:ss')
    return dateFormated
  }

  async function submitPost() {
    try {
      const token = `Bearer ${localStorage.getItem('token')}`

      await api.post(
        '/post',
        {
          text,
        },
        { headers: { authorization: token } }
      )
      setCreatePost(false)
      listPosts()
    } catch (error) {
      alert(error.data.response.message)
    }
    setText('')
  }

  async function submitComment() {
    try {
      const token = `Bearer ${localStorage.getItem('token')}`

      await api.post(
        '/comment',
        {
          text,
          post_id,
        },
        { headers: { authorization: token } }
      )
      setCreateComment(false)
      setText('')
      listPosts()
    } catch (error) {
      alert(error.data.response.message)
    }
    setText('')
  }
  useEffect(() => {
    listPosts()
  }, [])

  return (
    <Container>
      <ContainerButtonPost
        onClick={() => {
          setCreatePost(true)
        }}
      >
        <TextButton>Adicionar uma publicação</TextButton>
      </ContainerButtonPost>
      {isCreatePost ? (
        <ContainerCreate>
          <Input
            PlaceHolder='Informe o texto da publicação'
            Value={text}
            onChange={onChangeText}
          />
          <Button onClick={submitPost}>Publicar</Button>
          <Button
            onClick={() => {
              setCreatePost(false)
              setText('')
            }}
          >
            Sair
          </Button>
        </ContainerCreate>
      ) : (
        ''
      )}
      {posts.length > 0 ? (
        posts.map((post) => (
          <div style={{ with: '100%' }}>
            <ContainerPost key={post.id}>
              <ContainerTitle>
                <Title>{post.User.name}</Title>
                <Title size='17px'>{formatDate(post.createdAt)}</Title>
              </ContainerTitle>
              <ContainerText>
                <Text>{post.text}</Text>
              </ContainerText>
            </ContainerPost>
            <ContainerButtons>
              <ButtonComments
                width='150px'
                onClick={() => {
                  setCreateComment(true)
                  setPostId(post.id)
                }}
              >
                <TextButton>Adicionar comentário</TextButton>
              </ButtonComments>
              <ButtonComments>
                <TextButton>{post.comments.count}</TextButton>
                <TextButton>Comentários</TextButton>
              </ButtonComments>
            </ContainerButtons>
            <ContainerComments>
              {post.comments.rows.length > 0
                ? post.comments.rows.map((comment) => (
                    <>
                      <div
                        style={{ display: 'flex', justifyContent: 'center' }}
                      >
                        <Title size='23px'>Comentários</Title>
                      </div>
                      <ContainerTitle>
                        <Title>{comment.User.name}</Title>
                        <Title size='17px'>
                          {formatDate(comment.createdAt)}
                        </Title>
                      </ContainerTitle>
                      <ContainerText border='#000 1px solid'>
                        <Text>{comment.text}</Text>
                      </ContainerText>
                    </>
                  ))
                : ''}
            </ContainerComments>

            {isCreateComment ? (
              <ContainerCreate>
                <Input
                  PlaceHolder='Informe o texto do comentário'
                  Value={text}
                  onChange={onChangeText}
                />
                <Button
                  onClick={() => {
                    submitComment(post.id)
                  }}
                >
                  Comentar
                </Button>
                <Button
                  onClick={() => {
                    setCreateComment(false)
                    setText('')
                  }}
                >
                  Sair
                </Button>
              </ContainerCreate>
            ) : (
              ''
            )}
          </div>
        ))
      ) : (
        <Title>Sem publicações</Title>
      )}
    </Container>
  )
}

export default HomePage
