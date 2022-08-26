import React from 'react'
import { Container } from './style'
import Lottie from 'lottie-react-native'
import CarAnimation from 'src/assets/car_animation.json'

export const LoadingAnimation: React.FC = () => {
  return (
    <Container>
      <Lottie
        style={{ height: 150 }}
        resizeMode='contain'
        autoPlay
        loop
        source={CarAnimation}
      />
    </Container>
  )
}
