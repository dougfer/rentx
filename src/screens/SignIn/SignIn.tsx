import React, { useState } from 'react'
import { Container, Header, SubTitle, Title, Footer, Form } from './styles'
import { 
  StatusBar, 
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from 'react-native'
import { Button, Input, PasswordInput } from 'src/components'
import { useTheme } from 'styled-components'
import * as yup from 'yup'
import { useNavigation } from '@react-navigation/native'

export const SignIn: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { colors } = useTheme()

  const navigation = useNavigation()

  const schema = yup.object().shape({
    email: yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
    password: yup.string().required('Campo obrigatório')
  })

  const handleSignin = async () => {
    try {
      await schema.validate({ email, password })
      Alert.alert('Deu certo')
    } catch (error) {
      if(error instanceof yup.ValidationError) {
        return Alert.alert('Opa', error.message)
      }
      Alert.alert(
        'Erro na autenticação',
        'Ocorreu um erro ao fazer login, verifique as credenciais'
      )
    }
  }

  const handleSignUp = () => {
    console.log('fui chamado')
    navigation.navigate('SignUp')
  }

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
                onPress={handleSignin}
                // enabled={false}
              />
              <Button
                title='Criar conta gratuita'
                light
                color={colors.background_secondary}
                onPress={handleSignUp}
              />
            </Footer>
          </Container>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </>
  )
}
