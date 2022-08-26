import React, { useState, useEffect } from 'react'
import { StatusBar, FlatList } from 'react-native'
import { BackButton, Car, LoadingAnimation } from 'src/components'
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
  CarWrapper,
  CarFooter,
  CarFooterTitle,
  CarFooterPeriod,
  CarFooterDate,
} from './style'
import { useNavigation } from '@react-navigation/native'
import { useTheme } from 'styled-components'
import { AntDesign } from '@expo/vector-icons'
interface CarProps {
  car: CarDto
  user_id: string
  id: string
  startDate: string
  endDate: string
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
          Seus agendamentos, {'\n'}estão aqui.
        </Title>
        <SubTitle>
          Conforto, segurança e praticidade
        </SubTitle>
      </Header>
      {loading ? <LoadingAnimation /> : <Content>
        <Appointments>
          <AppointmentsTitle>Agendamentos feitos</AppointmentsTitle>
          <AppointmentsQuantity>{cars.length}</AppointmentsQuantity>
        </Appointments>

        <FlatList 
          data={cars}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 24,
          }}
          renderItem={({item}) => (
            <CarWrapper>
              <Car data={item.car} />
              <CarFooter>
                <CarFooterTitle>Período</CarFooterTitle>
                <CarFooterPeriod>
                  <CarFooterDate>{item.startDate}</CarFooterDate>
                  <AntDesign 
                    name='arrowright'
                    size={20}
                    color={theme.colors.title}
                    style={{ marginHorizontal: 10 }}
                  />
                  <CarFooterDate>{item.endDate}</CarFooterDate>
                </CarFooterPeriod>
              </CarFooter>
            </CarWrapper>
          )}
        />
      </Content>}
    </Container>
    </>
  )
}
