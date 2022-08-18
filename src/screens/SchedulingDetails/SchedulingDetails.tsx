
import React from 'react'
import { 
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  Acessories,
  Footer,
  CalendarIcon,
  DateTitle,
  DateInfo,
  DateValue,
  RentalPeriod,
  RentalPrice,
  RentalPriceLabel,
  RenatalPriceDetails,
  RentralPriceQuota,
  RentralPriceTotal,
} from './styles'
import { BackButton, ImageSlider, Accessory, Button } from 'src/components'
import { StatusBar } from 'react-native'
import SpeedSvg from 'src/assets/speed.svg'
import Acceleration from 'src/assets/acceleration.svg'
import Force from 'src/assets/force.svg'
import Gasoline from 'src/assets/gasoline.svg'
import Exchange from 'src/assets/exchange.svg'
import People from 'src/assets/people.svg'
import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'
import { useTheme } from 'styled-components'

export const SchedulingDetails: React.FC = () => {

  const { colors } = useTheme()

 return (
    <>
      <StatusBar
        barStyle='dark-content' 
        backgroundColor='transparent'
      />
      <Container>
        <Header>
          <BackButton onPress={() => {}} />
        </Header>
        <CarImages>
          <ImageSlider imagesUrl={['http://1.bp.blogspot.com/-NVsSLLnT-3Y/UGWaqEiU-lI/AAAAAAAAAKw/4e3nGCqFIxc/s1600/png_carro1.png']} />
        </CarImages>
        <Content>
          <Details>
            <Description>
              <Brand>Brand qualquer</Brand>
              <Name>Nome qualquer</Name>
            </Description>

            <Rent>
              <Period>Ao dia</Period>
              <Price>R$ 500</Price>
            </Rent>
          </Details>
          <Acessories>
            <Accessory name='380Km/h' icon={SpeedSvg} />
            <Accessory name='3.2s' icon={Acceleration} />
            <Accessory name='800 HP' icon={Force} />
            <Accessory name='Gasolina' icon={Gasoline} />
            <Accessory name='Auto' icon={Exchange} />
            <Accessory name='2 Pessoas' icon={People} />
          </Acessories>

          <RentalPeriod>
            <CalendarIcon>
              <Feather 
                name='calendar'
                size={RFValue(24)}
                color={colors.shape}
              />
            </CalendarIcon>
            <DateInfo>
              <DateTitle>DE</DateTitle>
              <DateValue>18/06/2021</DateValue>
            </DateInfo>
            <Feather 
                name='chevron-right'
                size={RFValue(10)}
                color={colors.text}
              />
            <DateInfo>
              <DateTitle>DE</DateTitle>
              <DateValue>18/06/2021</DateValue>
            </DateInfo>
          </RentalPeriod>
          <RentalPrice>
            <RentalPriceLabel>
              TOTAL
            </RentalPriceLabel>
            <RenatalPriceDetails>
              <RentralPriceQuota>R$ 580 x3 diárias</RentralPriceQuota>
              <RentralPriceTotal>R$ 2.900</RentralPriceTotal>
            </RenatalPriceDetails>
          </RentalPrice>
        </Content>
        <Footer>
          <Button title='Confirmar' />
        </Footer>
      </Container>
    </>
 )
}
