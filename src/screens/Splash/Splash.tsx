import React, { useCallback, useEffect } from 'react'
import { Container } from './styles'
import Brand from 'src/assets/brand.svg'
import Logo from 'src/assets/logo.svg'
import 
Animated,
{ 
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolate,
  Extrapolate,
  runOnJS
} from 'react-native-reanimated'
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'react-native'

export const Splash: React.FC = () => {
  const splashAnimation = useSharedValue(0)

  const navigation = useNavigation()

  const brandStyle = useAnimatedStyle(() => {
    return {
      opacity:  interpolate(splashAnimation.value, 
        [0, 50],
        [1, 0],
      ),
      transform: [
        { translateX: interpolate(splashAnimation.value,
          [0, 50],
          [0, -50],
          Extrapolate.CLAMP
        ) }
      ],
    }
  })

  const logoStyle = useAnimatedStyle(() => {
    return {
      opacity:  interpolate(splashAnimation.value, 
        [0, 25, 50],
        [0, 0.3, 1],
      ),
      transform: [
        { translateX: interpolate(splashAnimation.value,
          [0, 50],
          [-50, 0],
          Extrapolate.CLAMP
        ) }
      ],
    }
  })

  const startApp = useCallback(() => {
    navigation.navigate('Home')
  }, [navigation])

  useEffect(() => {
    splashAnimation.value = withTiming(
      50,
      { duration: 1000 },
      () => {
        'worklet'
        runOnJS(startApp)()
      }

    )
  }, [splashAnimation, startApp])

  return (
    <>
      <StatusBar barStyle='light-content' translucent backgroundColor='transparent' />
      <Container>
        <Animated.View style={[brandStyle, { position: 'absolute' }]}>
          <Brand width={90} height={53} />
        </Animated.View>
        <Animated.View style={logoStyle}>
          <Logo width={180} height={20} />
        </Animated.View>

      </Container>
    </>
  )
}
