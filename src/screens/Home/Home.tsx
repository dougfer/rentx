import React, { useEffect, useState } from 'react'
import { Container, Header, TotalCars, HeaderContent, CarList } from './styles'
import { StatusBar, StyleSheet } from 'react-native'
import Logo from 'src/assets/logo.svg'
import { RFValue } from 'react-native-responsive-fontsize'
import { Car } from 'src/components'
import { useNavigation } from '@react-navigation/native'
import { api } from 'src/services/api'
import { CarDto } from 'src/dtos/CarDTO'
import { Load } from 'src/components'
import { Ionicons } from '@expo/vector-icons'
import { useTheme } from 'styled-components'
import Animated, 
  { 
    useSharedValue, 
    useAnimatedStyle, 
    useAnimatedGestureHandler,
    withSpring
  } from 'react-native-reanimated'
import { RectButton, PanGestureHandler } from 'react-native-gesture-handler'

const ButtonAnimated = Animated.createAnimatedComponent(RectButton)

export const Home: React.FC = () => {
  const [cars, setCars] = useState<CarDto[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const positionY = useSharedValue(0)
  const positionX = useSharedValue(0)

  const myCarsButtonStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: positionX.value },
        { translateY: positionY.value }
      ]
    }
  })

  const navigation = useNavigation()

  const { colors } = useTheme()

  const onGestureEvent = useAnimatedGestureHandler({
    onStart(_, ctx: any) {
      ctx.positionX = positionX.value
      ctx.positionY = positionY.value
    },
    onActive(event) {
      positionX.value = event.translationX
      positionY.value = event.translationY
    },
    onEnd(_, ctx: any) {

    }
  })

  const handleCarDetails = (item: CarDto) => {
    navigation.navigate('CarDetails', { car: item })
  }

  const handleOpenMyCars = () => {
    navigation.navigate('MyCars')
  }

  const fetchCars = async () => {
    try {
      const response = await api.get('/cars')
      setCars(response.data)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchCars()
  }, [])

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
              Total de {cars.length} carros
            </TotalCars>
          </HeaderContent>
        </Header>
        { isLoading ? <Load /> : <CarList 
          data={cars}
          renderItem={({ item }) => <Car data={item} onPress={() => handleCarDetails(item)} />}
          keyExtractor={item => item.id}
        />}
        <PanGestureHandler
          onGestureEvent={onGestureEvent}
        >
          <Animated.View
            style={[
              myCarsButtonStyle,
              {
                position: 'absolute',
                bottom: 13,
                right: 22
              }
            ]}
          >
            <ButtonAnimated style={[style.button, { backgroundColor: colors.main }]} onPress={handleOpenMyCars}>
              <Ionicons 
                name='ios-car-sport'
                size={32}
                color={colors.shape}
              />
            </ButtonAnimated>
          </Animated.View>
        </PanGestureHandler>
      </Container>
    </>
  )
}

const style = StyleSheet.create({
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center'
  }
})