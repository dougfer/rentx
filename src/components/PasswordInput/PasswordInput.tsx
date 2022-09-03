import React, { useState } from 'react'
import { Container, InputText, IconContainer } from './styles'
import { useTheme } from 'styled-components'
import { Feather } from '@expo/vector-icons'
import { TextInputProps } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'

export interface PasswordInputProps extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>['name']
} 

export const PasswordInput: React.FC<PasswordInputProps> = ({ iconName, ...rest }) => {
  const [isPasswordVisible, setPasswordVisible] = useState(true)
  const { colors } = useTheme()

  return (
    <Container>
      <IconContainer>
        <Feather 
          name={iconName}
          size={24}
          color={colors.text_detail}
        />
      </IconContainer>
      <InputText {...rest} secureTextEntry={isPasswordVisible} />
      <BorderlessButton onPress={() => setPasswordVisible(!isPasswordVisible)}>
        <IconContainer style={{ marginRight: 0 }}>
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
