import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { CarDetails, Home, Scheduling, SchedulingComplete, SchedulingDetails, MyCars } from 'src/screens'

const { Navigator, Screen } = createNativeStackNavigator()

export const StackRoutes = () => {
  return (
    <Navigator screenOptions={{
      headerShown: false
    }}>
      <Screen 
        name='Home'
        component={Home}
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
        name='SchedulingComplete'
        component={SchedulingComplete}
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