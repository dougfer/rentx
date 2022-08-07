
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
  About,
  Acessories,
  Footer
} from './styles'
import { BackButton, ImageSlider, Accessory, Button } from 'src/components'
import { StatusBar } from 'react-native'
import SpeedSvg from 'src/assets/speed.svg'
import Acceleration from 'src/assets/acceleration.svg'
import Force from 'src/assets/force.svg'
import Gasoline from 'src/assets/gasoline.svg'
import Exchange from 'src/assets/exchange.svg'
import People from 'src/assets/people.svg'

export const CarDetails: React.FC = () => {
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

          <About>
            Este é automóvel desportivo. Surgiu do lendário touro de lide indultado na praça Real Maestranza de Sevilla. É um belíssimo carro para quem gosta de acelerar.
          </About>
        </Content>
        <Footer>
          <Button title='testizinho' />
        </Footer>
      </Container>
    </>
 )
}
