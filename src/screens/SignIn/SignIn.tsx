import React from 'react'
import { Container, Header, SubTitle, Title, Footer, Form } from './styles'
import { StatusBar, View } from 'react-native'
import { Button, Input, PasswordInput } from 'src/components'
import { useTheme } from 'styled-components'

export const SignIn: React.FC = () => {

  const { colors } = useTheme()

  return (
    <>
      <StatusBar barStyle='dark-content' translucent backgroundColor='transparent' />
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
          />
          <PasswordInput 
            iconName='lock'
            placeholder='Senha'
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
    </>
  )
}
