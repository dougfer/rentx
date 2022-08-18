import React from 'react'
import { useWindowDimensions, StatusBar } from 'react-native'
import { 
  Container,
  Content,
  Title,
  Message,
  Footer,
} from './styles'
import Logo from 'src/assets/logo_background_gray.svg'
import Done from 'src/assets/done.svg'
import { ConfirmButton } from 'src/components'
import { useNavigation } from '@react-navigation/native'


export const SchedulingComplete: React.FC = () => {
  
  const { width } = useWindowDimensions()

  const navigation = useNavigation()
  
  const handleConfirm = () => {
    navigation.navigate('Home')
  }

 return (
  <>
  <StatusBar translucent barStyle='light-content' backgroundColor='transparent' />
   <Container>
    <Logo width={width} />
    <Content>
      <Done width={80} height={80} />
      <Title>Carro alugado</Title>
      <Message>Agora você só precisa ir {'\n'} até a concessionária da RENTX 
        {'\n'} pegar o seu automóvel.
      </Message>
    </Content>
    <Footer>
      <ConfirmButton title='OK' onPress={handleConfirm} />
    </Footer>
   </Container>
  </>
 )
}
