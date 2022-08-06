import React from 'react'
import { Container } from './styles'
import { MaterialIcons } from '@expo/vector-icons'
import { useTheme } from 'styled-components'

interface BackButtonProps {
  color?: string
}

export const BackButton: React.FC<BackButtonProps> = ({ color }) => {

  const theme = useTheme()

 return (
   <Container>
    <MaterialIcons 
      name='chevron-left'
      size={24}
      color={color || theme.colors.text}
    />

   </Container>
 )
}
