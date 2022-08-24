import React from 'react';
import { Home, CarDetails, Scheduling, SchedulingDetails, SchedulingComplete } from 'src/screens'
import { 
  useFonts,
  Inter_400Regular, 
  Inter_500Medium
} from '@expo-google-fonts/inter'
import { 
  Archivo_400Regular, 
  Archivo_500Medium, 
  Archivo_600SemiBold
} from '@expo-google-fonts/archivo'
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components'
import theme from 'src/styles/theme'
import { Routes } from 'src/routes'
import 'react-native-gesture-handler'
import { View } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import 'intl'
import 'intl/locale-data/jsonp/pt-BR'

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular, 
    Archivo_500Medium, 
    Archivo_600SemiBold
  })

  if(!fontsLoaded) {
    // return <AppLoading />
    return <View />
  }
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}

