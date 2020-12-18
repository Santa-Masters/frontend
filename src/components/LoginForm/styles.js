import styled, { css } from "styled-components"
import { Colors } from "../../res/styles"

export const MainLogin = styled.main`
  border: 4px solid #0a4878;
  box-sizing: border-box;
  border-radius: 20px;
  margin: 8px auto;
  font-family: "Assistant";
  font-weight: 500;
  background-color: ${Colors.graySecondary};
  max-width: 40%;
  @media (max-width: 1024px) {
    min-width: 99%;
    margin: 8px 4px;
  }
`

export const ImageLogin = styled.img`
  ${props =>
    props.width &&
    css`
      width: ${props.width};
    `}
  ${props =>
    props.center &&
    css`
      display: block;
      margin: 0 auto;
    `}
`

export const Text = styled.p`
  text-align: center;
  color: #0a4878;
  font-size: 1.5em;
  margin: 0;
  ${props =>
    props.width &&
    css`
      width: ${props.width};
    `}
  ${props =>
    props.desc &&
    css`
      margin: 61px auto 89px auto;
    `}
`

export const GitHubLoggin = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;
  margin-bottom: 54px;
`

export const MainForm = styled.div`
  background-color: ${Colors.bluePrimary};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
`

export const Input = styled.input`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  width: 85%;
  height: 55px;
  border: none;
  outline: none;
  ${props =>
    props.customMargin &&
    css`
      margin: 84px 0 13px;
    `}
`

export const Button = styled.button`
  background-color: ${Colors.greenPrimary};
  border-radius: 60px;
  height: 55px;
  width: 178px;
  outline: none;
  border: none;
  margin: 44px 0 54px 0;
  cursor: pointer;
`
