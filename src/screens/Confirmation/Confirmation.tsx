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
import { useNavigation, useRoute } from '@react-navigation/native'
import { ConfirmationProps } from 'src/types/navigation'

interface Navigation {
  navigate: (value: string) => void
}

export const Confirmation: React.FC = () => {
  
  const { width } = useWindowDimensions()

  const navigation = useNavigation<Navigation>()

  const route = useRoute()

  const { message, nextScreenRoute, title } = route.params as ConfirmationProps
  
  const handleConfirm = () => {
    navigation.navigate(nextScreenRoute)
  }

  return (
    <>
      <StatusBar translucent barStyle='light-content' backgroundColor='transparent' />
      <Container>
        <Logo width={width} />
        <Content>
          <Done width={80} height={80} />
          <Title>{title}</Title>
          <Message>{message}</Message>        
        </Content>
        <Footer>
          <ConfirmButton title='OK' onPress={handleConfirm} />
        </Footer>
      </Container>
    </>
  )
}
