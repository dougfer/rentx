
import React from 'react'
import { Container, Header, CarImages } from './styles'
import { BackButton, ImageSlider } from 'src/components'
import { StatusBar } from 'react-native'

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
          <ImageSlider imagesUrl={['https://img1.gratispng.com/20171220/kiq/audi-png-car-image-5a3b1f1eb47de9.9104985015138240307393.jpg']} />
        </CarImages>
      </Container>
    </>
 )
}
