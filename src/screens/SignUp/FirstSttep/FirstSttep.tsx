import React, { useState } from 'react'
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
import * as yup from 'yup'
import { StatusBar, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'

export const FirstSttep: React.FC = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [driverLicense, setDriverLicense] = useState('')

  const navigation = useNavigation()

  const handleNextStep = async () => {
    try {

      const schema = yup.object().shape({
        driverLicense: yup.string().required('CNH é obrigatória'),
        email: yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
        name: yup.string().required('Nome é obrigatório'),
      })

      const data = { name, email, driverLicense }

      await schema.validate(data)

      navigation.navigate('SignUpSecondStep', data)
    } catch (error) {
      if(error instanceof yup.ValidationError) {
        return Alert.alert('Opa', error.message)
      }
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
              1. Dados
            </FormTitle>
            <Input 
              iconName='user'
              placeholder='Nome'
              value={name}
              onChangeText={setName}
            />
            <Input 
              iconName='mail'
              placeholder='E-mail'
              keyboardType='email-address'
              value={email}
              onChangeText={setEmail}
            />
            <Input 
              iconName='credit-card'
              placeholder='CNH'
              keyboardType='number-pad'
              value={driverLicense}
              onChangeText={setDriverLicense}
            />
          </Form>
          <Button
            onPress={handleNextStep}
            title='Próximo'
          />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}
