import React, { useState } from 'react'
import { 
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  Content,
  Footer,
} from './styles'
import { format } from 'date-fns'
import Arrow from 'src/assets/arrow.svg'
import { Alert, StatusBar } from 'react-native'
import { useTheme } from 'styled-components'
import { useNavigation, useRoute } from '@react-navigation/native'
import { getPlatformDate } from 'src/utils/getPlataformDate'
import { BackButton, Button, Calendar, DayProps, generateInterval, MarkedDateProps } from 'src/components'
import { CarDto } from 'src/dtos/CarDTO'

interface RouteParams {
  car: CarDto
}

interface RentalPeriodType {
  startFormatted: string
  endFormatted: string
}

export const Scheduling: React.FC = () => {
  const [lastSelectedDate, setlastSelectedDate] = useState<DayProps>({} as DayProps)
  const [markedDates, setMarkedDates] = useState<MarkedDateProps>({} as MarkedDateProps)
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriodType>({} as RentalPeriodType)

  const navigation = useNavigation()

  const route = useRoute()

  const { car } = route.params as RouteParams

  const theme = useTheme()

  const handleConfirmDate = () => {
    navigation.navigate('SchedulingDetails', {
      car,
      dates: Object.keys(markedDates)
    })
  }

  const handleChangeDate = (date: DayProps) => {
    let start = !lastSelectedDate.timestamp ? date : lastSelectedDate
    let end = date

    if(start.timestamp >= end.timestamp) {
      start = end
      end = start
    }

    setlastSelectedDate(end)
    const interval = generateInterval(start, end)
    setMarkedDates(interval)
    const firstDate = Object.keys(interval)[0]
    const endDate = Object.keys(interval)[Object.keys(interval).length - 1]

    setRentalPeriod({
      endFormatted: format(getPlatformDate(new Date(endDate)), 'dd/MM/yyyy'),
      startFormatted: format(getPlatformDate(new Date(firstDate)), 'dd/MM/yyyy')
    })

  }

 return (
  <>
    <StatusBar barStyle='light-content' backgroundColor='transparent' translucent />
    <Container>
      <Header>
        <BackButton onPress={navigation.goBack} color={theme.colors.shape} />
        <Title>
          Escolha uma {'\n'}data de início e{'\n'}fim do aluguel
        </Title>
        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue selected={!!rentalPeriod.startFormatted}>
              {rentalPeriod.startFormatted}
            </DateValue>
          </DateInfo>
          <Arrow />
          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue selected={!!rentalPeriod.endFormatted}>
              {rentalPeriod.endFormatted}
            </DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>
      <Content>
        <Calendar
          markedDates={markedDates}
          onDayPress={handleChangeDate}
        />
      </Content>
      <Footer>
        <Button title='Confirmar' enabled={!!rentalPeriod.startFormatted} onPress={handleConfirmDate} />
      </Footer>
    </Container>
  </>
 )
}
