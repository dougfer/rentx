
import React from 'react'
import { 
  Container,
  Header,
  CarImages,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About,
  Acessories,
  Footer,
} from './styles'
import { BackButton, ImageSlider, Accessory, Button } from 'src/components'
import { StatusBar, StyleSheet } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { CarDto } from 'src/dtos/CarDTO'
import { getAccessoryIcon } from 'src/utils/getAccessoryIcon'
import Animated, { useSharedValue, useAnimatedScrollHandler, useAnimatedStyle, interpolate, Extrapolate } from 'react-native-reanimated'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { useTheme } from 'styled-components'


interface RouteParams {
  car: CarDto
}

export const CarDetails: React.FC = () => {
  const scrollY = useSharedValue(0)

  const headerStyleAnimation = useAnimatedStyle(() => {
    return {
      height: interpolate(
        scrollY.value,
        [0, 200],
        [200, 70],
        Extrapolate.CLAMP
      ),
    }
  })

  const sliderCarsStyleAnimation = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        scrollY.value,
        [0, 150],
        [1, 0],
        Extrapolate.CLAMP
      )
    }
  })

  const scrollHandler = useAnimatedScrollHandler(event => {
    scrollY.value = event.contentOffset.y
  })

  const navigation = useNavigation()

  const route = useRoute()

  const theme = useTheme()

  const { car } = route.params as RouteParams

  const handleSchedule = () => {
    navigation.navigate('Scheduling', {
      car
    })
  }

  return (
    <>
      <StatusBar
        barStyle='dark-content' 
        backgroundColor='transparent'
      />
      <Container>
        <Animated.View
          style={
            [headerStyleAnimation,
              style.header,
              { backgroundColor: theme.colors.background_secondary }
            ]}
        >
          <Header>
            <BackButton onPress={navigation.goBack} style={style.back} />
          </Header>
          <Animated.View style={[sliderCarsStyleAnimation]}>
            <CarImages>
              <ImageSlider imagesUrl={car.photos} />
            </CarImages>
          </Animated.View>
        </Animated.View>
        <Animated.ScrollView
          onScroll={scrollHandler}
          contentContainerStyle={{
            paddingHorizontal: 24,
            paddingTop: getStatusBarHeight() + 160,
            alignItems: 'center',
          }}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
        >
          <Details>
            <Description>
              <Brand>{car.brand}</Brand>
              <Name>{car.name}</Name>
            </Description>

            <Rent>
              <Period>{car.rent.period}</Period>
              <Price>R$ {car.rent.price}</Price>
            </Rent>
          </Details>
          <Acessories>
            {car.accessories.map((accessory) => (
              <Accessory 
                key={accessory.type}
                name={accessory.name}
                icon={getAccessoryIcon(accessory.type)} 
              />
            ))}
          </Acessories>

          <About>
            {car.about}
            {car.about}
            {car.about}
            {car.about}
            {car.about}
          </About>
        </Animated.ScrollView>
        <Footer>
          <Button title='Escolher período do aluguel' onPress={handleSchedule} />
        </Footer>
      </Container>
    </>
  )
}

const style = StyleSheet.create({
  header: {
    position: 'absolute',
    overflow: 'hidden',
    zIndex: 1
  },
  back: {
    marginTop: 10
  }
})