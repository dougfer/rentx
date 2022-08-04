import React from 'react'
import { Container, Header, TotalCars, HeaderContent } from './styles'
import { StatusBar } from 'react-native'
import Logo from 'src/assets/logo.svg'
import { RFValue } from 'react-native-responsive-fontsize'
import { Car } from 'src/components'

export const Home: React.FC = () => {

  const carData = {
    thumbnail: 'https://img1.gratispng.com/20171220/kiq/audi-png-car-image-5a3b1f1eb47de9.9104985015138240307393.jpg',
    name: 'Nome do Carro',
    brand: 'Audi',
    rent: {
      period: 'ao dia',
      price: 150
    }
  }


  return (
    <>
      <StatusBar 
        barStyle='light-content' 
        backgroundColor='transparent'
        translucent     
      />
      <Container>
        <Header>
          <HeaderContent>
            <Logo width={RFValue(108)} height={RFValue(12)} />
            <TotalCars>
              Total de 12 carros
            </TotalCars>
          </HeaderContent>
        </Header>
        <Car data={carData} />
      </Container>
    </>
  )
}

