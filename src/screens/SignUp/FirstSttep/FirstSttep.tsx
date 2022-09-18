import React from 'react'
import { BackButton, Bullet, Input, Button } from 'src/components'
import { 
  Container,
  Header,
  Steps,
  Title,
  Subtitle,
  Form,
  FormTitle,
} from './styles'
import { useNavigation } from '@react-navigation/native'
import { StatusBar, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native'

export const FirstSttep: React.FC = () => {

  const navigation = useNavigation()

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
              1. Dados
            </FormTitle>
            <Input 
              iconName='user'
              placeholder='Nome'
            />
            <Input 
              iconName='mail'
              placeholder='E-mail'
            />
            <Input 
              iconName='credit-card'
              placeholder='CNH'
            />
          </Form>
          <Button 
            title='Próximo'
          />

        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}
