import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  background-color: #bebebe;
  flex-direction: column;
`

export const ContainerPost = styled.div`
  width: 500px;
  height: 150px;
  background-color: #fff;
  margin-top: 30px;
  border-radius: 10px;
`

export const ContainerTitle = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
`

export const Title = styled.text`
  font-size: ${(props) => (props.size ? props.size : '20px')};
  color: #000;
  padding: 5px 20px 20px 20px;
`

export const ContainerText = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  height: auto;
  background-color: #fff;
  border-bottom: ${(props) => (props.border ? props.border : 'none')};
`

export const Text = styled.text`
  font-size: 13px;
  color: #000;
  padding: 10px 30px;
`

export const ButtonComments = styled.div`
  display: flex;
  justify-content: start;
  width: ${(props) => (props.width ? props.width : '90px')};
  height: 20px;
  background-color: #bebebe;
  cursor: pointer;
`

export const TextButton = styled.text`
  font-size: 13px;
  color: #000;
  margin: 10px;
`

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: space-around;
  height: 100%;
`

export const ContainerButtonPost = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 40px;
  background-color: #fff;
  border-radius: 10px;
  cursor: pointer;
`

export const ContainerCreate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 500px;
  height: 600px;
  max-height: 600px;
  background-color: #5e635c;
  position: absolute;
  border-radius: 10px;
  top: 150px;
`

export const Button = styled.div`
  width: 300px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  cursor: pointer;
  background-color: #bebebe;
  color: #fff;
  margin-bottom: 15px;
`

export const ContainerComments = styled.div`
  width: 500px;
  height: 100px;
  max-height: 150px;
  overflow: auto;
  background-color: #fff;
  margin-top: 20px;
`
