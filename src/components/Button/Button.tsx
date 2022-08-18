import React, { ReactNode } from 'react'
import { Container, Title } from './styles'
import { RectButtonProps } from "react-native-gesture-handler"

interface ButtonProps extends RectButtonProps {
  title: string
  children?: ReactNode 
  color?: string
}

export const Button: React.FC<ButtonProps> = ({ title, color, ...rest }) => {
 return (
   <Container {...rest} color={color} >
      <Title>{title}</Title>
   </Container>
 )
}
