import React from 'react'
import { 
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  Content,
  Footer,
} from './styles'
import Arrow from 'src/assets/arrow.svg'
import { BackButton, Button, Calendar } from 'src/components'
import { StatusBar } from 'react-native'
import { useTheme } from 'styled-components'
import { useNavigation } from '@react-navigation/native'



export const Scheduling: React.FC = () => {
  const navigation = useNavigation()

  const theme = useTheme()

  const handleConfirmDate = () => {
    navigation.navigate('SchedulingDetails')
  }

 return (
  <>
    <StatusBar barStyle='light-content' backgroundColor='transparent' translucent />
    <Container>
      <Header>
        <BackButton onPress={() => {}} color={theme.colors.shape} />
        <Title>
          Escolha uma {'\n'}data de início e{'\n'}fim do aluguel
        </Title>
        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>
            </DateValue>
          </DateInfo>
          <Arrow />
          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue>
            </DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>
      <Content>
        <Calendar />
      </Content>
      <Footer>
        <Button title='Confirmar' onPress={handleConfirmDate} />
      </Footer>
    </Container>
  </>
 )
}
