import React from "react"
import {
  MainLogin,
  ImageLogin,
  Text,
  MainForm,
  GitHubLoggin,
  Input,
  Button,
} from "./styles"

import LogoPlatzi from "../../res/img/Platzi.png"
import LogoGitHub from "../../res/img/gitHub.png"

const index = () => {
  return (
    <>
      <MainLogin>
        <ImageLogin center src={LogoPlatzi} />
        <Text>¡Hello master!</Text>
        <Text width="290px" desc>
          Recuerda que las oportunidades estan allí, solo tienes que ir por
          ellas
        </Text>
        <GitHubLoggin>
          <ImageLogin src={LogoGitHub} />
          <Text width="225px">Inicia sesión con tu cuenta de github.</Text>
        </GitHubLoggin>
        <MainForm>
          <Input customMargin="10" type="text" placeholder="email o username" />
          <Input type="password" placeholder="Password" />
          <Button type="submit">Login</Button>
        </MainForm>
      </MainLogin>
    </>
  )
}

export default index
