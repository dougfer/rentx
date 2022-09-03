import React, { useState } from 'react'
import { Container, Header, SubTitle, Title, Footer, Form } from './styles'
import { 
  StatusBar, 
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native'
import { Button, Input, PasswordInput } from 'src/components'
import { useTheme } from 'styled-components'

export const SignIn: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { colors } = useTheme()

  return (
    <>
      <StatusBar barStyle='dark-content' translucent backgroundColor='transparent' />
      <KeyboardAvoidingView
        behavior='position'
        enabled
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Container>
            <Header> 
              <Title>Estamos {'\n'}quase lá.</Title>
              <SubTitle>Faça seu login para começar{'\n'}uma experiência incrível.</SubTitle>
            </Header>
            <Form>
              <Input
                iconName='mail'
                placeholder='E-mail'
                keyboardType='email-address'
                autoCorrect={false}
                autoCapitalize='none'
                value={email}
                onChangeText={setEmail}
              />
              <PasswordInput 
                iconName='lock'
                placeholder='Senha'
                value={password}
                onChangeText={setPassword}
              />

            </Form>
            <Footer>
              <Button
                title='Login'
                onPress={() => {return}}
                enabled={false}
              />
              <Button
                title='Criar conta gratuita'
                light
                color={colors.background_secondary}
                onPress={() => {return}}
                enabled={false}

              />
            </Footer>
          </Container>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </>
  )
}
