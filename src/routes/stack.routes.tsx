import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { 
  CarDetails, 
  Home, 
  Scheduling, 
  Confirmation, 
  SchedulingDetails, 
  MyCars, 
  Splash,
  SignIn,
  FirstSttep,
  SecondStep
} from 'src/screens'

const { Navigator, Screen } = createNativeStackNavigator()

export const StackRoutes = () => {
  return (
    <Navigator  initialRouteName='SignIn' screenOptions={{
      headerShown: false
    }}>
      <Screen 
        name='Splash'
        component={Splash}
      />
      <Screen 
        name='SignIn'
        component={SignIn}
      />
      <Screen 
        name='SignUp'
        component={FirstSttep}
      />
      <Screen 
        name='SignUpSecondStep'
        component={SecondStep}
      />
      <Screen 
        name='Home'
        component={Home}
        options={{
          gestureEnabled: false
        }}
      />
      <Screen 
        name='CarDetails'
        component={CarDetails}
      />
      <Screen 
        name='Scheduling'
        component={Scheduling}
      />
      <Screen 
        name='Confirmation'
        component={Confirmation}
      />
      <Screen 
        name='SchedulingDetails'
        component={SchedulingDetails}
      />
      <Screen 
        name='MyCars'
        component={MyCars}
      />
    </Navigator>
  )
} 