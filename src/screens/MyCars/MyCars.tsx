import React, { useState, useEffect } from 'react'
import { StatusBar, FlatList } from 'react-native'
import { BackButton, Car } from 'src/components'
import { CarDto } from 'src/dtos/CarDTO'
import { api } from 'src/services/api'
import { 
  Container,
  Header,
  Title,
  SubTitle,
  Content,
  Appointments,
  AppointmentsTitle,
  AppointmentsQuantity,
} from './style'
import { useNavigation } from '@react-navigation/native'
import { useTheme } from 'styled-components'

interface CarProps {
  car: CarDto
  user_id: string
  id: string
}

export const MyCars: React.FC = () => {
  const [cars,setCars] = useState<CarProps[]>([])
  const [loading, setLoading] = useState(true)

  const navigation = useNavigation()

  const theme = useTheme()

  const fetchCars = async () => {
    try {
      const response = await api.get('schedules_byuser?user_id=1')
      setCars(response.data)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCars()
  }, [])

  return (
    <>
    <StatusBar barStyle='light-content' backgroundColor='transparent' translucent />
    <Container>
      <Header>
        <BackButton onPress={navigation.goBack} color={theme.colors.shape} />
        <Title>
          Escolha uma {'\n'}data de início e{'\n'}fim do aluguel
        </Title>
        <SubTitle>
          Conforto, segurança e praticidade
        </SubTitle>
      </Header>
      <Content>
        <Appointments>
          <AppointmentsTitle>Agendamentos feitos</AppointmentsTitle>
          <AppointmentsQuantity>05</AppointmentsQuantity>
        </Appointments>

        <FlatList 
          data={cars}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 24,
          }}
          renderItem={({item}) => <Car data={item.car} />}
        />
      </Content>
    </Container>
    </>
  )
}
