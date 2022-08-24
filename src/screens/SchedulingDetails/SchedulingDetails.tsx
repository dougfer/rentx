
import React, { useMemo, useState } from 'react'
import { 
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  Acessories,
  Footer,
  CalendarIcon,
  DateTitle,
  DateInfo,
  DateValue,
  RentalPeriod,
  RentalPrice,
  RentalPriceLabel,
  RenatalPriceDetails,
  RentralPriceQuota,
  RentralPriceTotal,
} from './styles'
import { BackButton, ImageSlider, Accessory, Button } from 'src/components'
import { Alert, StatusBar } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'
import { useTheme } from 'styled-components'
import { useNavigation, useRoute } from '@react-navigation/native'
import { CarDto } from 'src/dtos/CarDTO'
import { getAccessoryIcon } from 'src/utils/getAccessoryIcon'
import { format } from 'date-fns'
import { getPlatformDate } from 'src/utils/getPlataformDate'
import { formatToRealStr } from 'src/utils/format'
import { api } from 'src/services/api'
interface RouteParams {
  car: CarDto
  dates: string[]
}

export const SchedulingDetails: React.FC = () => {
  const { colors } = useTheme()

  const navigation = useNavigation()

  const route = useRoute()

  const { car, dates } = route.params as RouteParams

  const handleConfirm = async () => {

    const schedulesByCar = await api.get(`/schedules_bycars/${car.id}`)

    const unavailable_dates = [
      ...schedulesByCar.data.unavailable_dates,
      ...dates
    ]

    await api.post('schedules_byuser', {
      car,
      user_id: 1,
    })

    api.put(`/schedules_bycars/${car.id}`, {
      id: car.id,
      unavailable_dates
    })
    .then(() => navigation.navigate('SchedulingComplete'))
    .catch(() => Alert.alert('Não foi possível confirmar o agendamento'))

    navigation.navigate('SchedulingComplete')
  }

  const startDate = useMemo(() => {
    return format(getPlatformDate(new Date(dates[0])), 'dd/MM/yyy')
  },[dates])

  const endDate = useMemo(() => {
    return format(getPlatformDate(new Date(dates[dates.length - 1])), 'dd/MM/yyy')
  },[dates])

  const total = dates.length * car.rent.price

  return (
    <>
      <StatusBar
        barStyle='dark-content' 
        backgroundColor='transparent'
      />
      <Container>
        <Header>
          <BackButton onPress={navigation.goBack} />
        </Header>
        <CarImages>
          <ImageSlider imagesUrl={[car.thumbnail]} />
        </CarImages>
        <Content>
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

          <RentalPeriod>
            <CalendarIcon>
              <Feather 
                name='calendar'
                size={RFValue(24)}
                color={colors.shape}
              />
            </CalendarIcon>
            <DateInfo>
              <DateTitle>DE</DateTitle>
              <DateValue>{startDate}</DateValue>
            </DateInfo>
            <Feather 
                name='chevron-right'
                size={RFValue(10)}
                color={colors.text}
              />
            <DateInfo>
              <DateTitle>DE</DateTitle>
              <DateValue>{endDate}</DateValue>
            </DateInfo>
          </RentalPeriod>
          <RentalPrice>
            <RentalPriceLabel>
              TOTAL
            </RentalPriceLabel>
            <RenatalPriceDetails>
              <RentralPriceQuota>R$ {car.rent.price} x{dates.length} diárias</RentralPriceQuota>
              <RentralPriceTotal>{formatToRealStr(total)}</RentralPriceTotal>
            </RenatalPriceDetails>
          </RentalPrice>
        </Content>
        <Footer>
          <Button title='Alugar agora' color={colors.success} onPress={handleConfirm} />
        </Footer>
      </Container>
    </>
  )
}
