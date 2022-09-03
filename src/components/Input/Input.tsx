import React, { useState } from 'react'
import { Container, InputText, IconContainer } from './styles'
import { useTheme } from 'styled-components'
import { Feather } from '@expo/vector-icons'
import { TextInputProps } from 'react-native'

export interface InputProps extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>['name']
} 

export const Input: React.FC<InputProps> = ({ iconName, value, ...rest }) => {
  const { colors } = useTheme()
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)

  const handleInputFocused = () => {
    setIsFocused(true)
  }

  const handleINputBlur = () => {
    setIsFocused(false)
    setIsFilled(!!value)
  }

  return (
    <Container isFocused={isFocused}>
      <IconContainer>
        <Feather 
          name={iconName}
          size={24}
          color={(isFocused || isFilled) ? colors.main : colors.text_detail}
        />
      </IconContainer>
      <InputText
        onFocus={handleInputFocused}
        onBlur={handleINputBlur}
        {...rest} 
      />
    </Container>
  )
}
