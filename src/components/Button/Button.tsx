import React, { ReactNode } from 'react'
import { Container, Title } from './styles'
import { RectButtonProps } from 'react-native-gesture-handler'
import { ActivityIndicator } from 'react-native'
import theme from 'src/styles/theme'

interface ButtonProps extends RectButtonProps {
  title: string
  children?: ReactNode 
  color?: string
  loading?: boolean
  light?: boolean
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { title, color, enabled = true, loading = false, light = false, ...rest } = props

  return (
    <Container {...rest} color={color} enabled={enabled && !loading} loading={loading}>
      {loading ? <ActivityIndicator color={theme.colors.shape} /> : <Title light={light} >{title}</Title>}
    </Container>
  )
}
