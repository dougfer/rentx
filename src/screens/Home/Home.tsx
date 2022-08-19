import React, { useEffect, useState } from 'react'
import { Container, Header, TotalCars, HeaderContent, CarList } from './styles'
import { StatusBar } from 'react-native'
import Logo from 'src/assets/logo.svg'
import { RFValue } from 'react-native-responsive-fontsize'
import { Car } from 'src/components'
import { useNavigation } from '@react-navigation/native'
import { api } from 'src/services/api'
import { CarDto } from 'src/dtos/CarDTO'
import { Load } from 'src/components'

export const Home: React.FC = () => {
  const [cars, setCars] = useState<CarDto[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const navigation = useNavigation()

  const handleCarDetails = (item: CarDto) => {
    navigation.navigate('CarDetails', { car: item })
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
              Total de 12 carros
            </TotalCars>
          </HeaderContent>
        </Header>
        { isLoading ? <Load /> : <CarList 
          data={cars}
          renderItem={({ item }) => <Car data={item} onPress={() => handleCarDetails(item)} />}
          keyExtractor={item => item.id}
        />}
      </Container>
    </>
  )
}

