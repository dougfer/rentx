import React from 'react'
import { Container } from './styles'
import { Button, StyleSheet, Dimensions } from 'react-native'
import 
  Animated,
  { 
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    Easing
  } from 'react-native-reanimated'

const WIDTH = Dimensions.get('window').width

export const Splash: React.FC = () => {

  const animation = useSharedValue(0)

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: withTiming(animation.value, { 
          duration: 500,
          easing: Easing.quad
        })}
      ]
    }
  })
  
  const handlePositionAnimation = () => {
    animation.value = Math.random() * (WIDTH - 100)
  }

  return (
    <Container>
      <Animated.View style={[styles.box, animatedStyles]}>

      </Animated.View>
      <Button title='Mover' onPress={handlePositionAnimation} />
    </Container>
  )
}

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'red'
  }
})