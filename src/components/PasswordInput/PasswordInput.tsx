import React, { useState } from 'react'
import { Container, InputText, IconContainer, Separator } from './styles'
import { useTheme } from 'styled-components'
import { Feather } from '@expo/vector-icons'
import { TextInputProps } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'

export interface PasswordInputProps extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>['name']
} 

export const PasswordInput: React.FC<PasswordInputProps> = ({ iconName, value, ...rest }) => {
  const [isPasswordVisible, setPasswordVisible] = useState(true)
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)
  const { colors } = useTheme()


  const handleInputFocused = () => {
    setIsFocused(true)
  }

  const handleINputBlur = () => {
    setIsFocused(false)
    setIsFilled(!!value)
  }

  return (
    <Container>
      <IconContainer
        isFocused={isFocused}
      >
        <Feather 
          name={iconName}
          size={24}
          color={(isFocused || isFilled) ? colors.main : colors.text_detail}
        />
      </IconContainer>
      <Separator isFocused={isFocused} />
      <InputText
        isFocused={isFocused}
        secureTextEntry={isPasswordVisible} 
        onFocus={handleInputFocused}
        onBlur={handleINputBlur}
        {...rest} 
      />
      <BorderlessButton onPress={() => setPasswordVisible(!isPasswordVisible)}>
        <IconContainer style={{ marginRight: 0 }} isFocused={isFocused}>
          <Feather 
            name={isPasswordVisible ? 'eye' : 'eye-off'}
            size={24}
            color={colors.text_detail}
          />
        </IconContainer>
      </BorderlessButton>
    </Container>
  )
}
