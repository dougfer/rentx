import React, { useState } from 'react'
import { BackButton, Bullet, Button, PasswordInput } from 'src/components'
import { 
  Container,
  Header,
  Steps,
  Title,
  Subtitle,
  Form,
  FormTitle,
} from './styles'
import { useNavigation, useRoute } from '@react-navigation/native'
import { StatusBar, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'
import { useTheme } from 'styled-components'
import { UserInfo } from 'src/types/user'

export const SecondStep: React.FC = () => {
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')

  const navigation = useNavigation()

  const route = useRoute()

  const user = route.params as UserInfo

  const { colors } = useTheme()

  const handleRegister = () => {
    if(!password || !passwordConfirm) {
      return Alert.alert('Informe a senha e a confirmação')
    }
    if(password !== passwordConfirm) {
      return Alert.alert('As senhas não são iguais')
    }
  }

  return (
    <KeyboardAvoidingView behavior='position' enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <StatusBar backgroundColor='transparent' barStyle='dark-content' translucent />
          <Header>
            <BackButton onPress={navigation.goBack} />
            <Steps>
              <Bullet />
              <Bullet active />
            </Steps>
          </Header>
          <Title>
            Cria sua {'\n'}conta
          </Title>
          <Subtitle>
            Faça seu cadastro de {'\n'}forma rápida e fácil
          </Subtitle>
          <Form>
            <FormTitle>
              2. Senha
            </FormTitle>
            <PasswordInput value={password} onChangeText={setPassword} iconName='lock' placeholder='Senha' />
            <PasswordInput value={passwordConfirm} onChangeText={setPasswordConfirm} iconName='lock' placeholder='Repetir senha' />
          </Form>
          <Button 
            title='Cadastrar'
            onPress={handleRegister}
            color={colors.success}
          />

        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}
