import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Container, ContainerForm, Button } from './styles'
import Input from '../../components/Input'
import api from '../../service/api'

function Login({ history }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    setPassword('')
  }, [])

  function onChangeEmail(e) {
    setEmail(e.target.value)
  }

  function onChangePassword(e) {
    setPassword(e.target.value)
  }

  async function submitLogin() {
    try {
      const response = await api.post('/user/login', {
        email,
        password,
      })
      localStorage.setItem('token', response.data.token)
      history.push(`/home`)
    } catch (error) {
      alert(error.response.message)
      setPassword('')
    }
  }

  return (
    <Container>
      <ContainerForm>
        <Input
          PlaceHolder='Informe seu email'
          Value={email}
          onChange={onChangeEmail}
        />
        <Input
          PlaceHolder='Informe sua senha'
          Type='password'
          Value={password}
          onChange={onChangePassword}
        />
        <Button onClick={submitLogin}>Logar</Button>
      </ContainerForm>
    </Container>
  )
}

Login.propTypes = {
  history: PropTypes.string,
}

Login.defaultProps = {
  history: '',
}

export default Login
