
import React from 'react'
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
  About,
  Acessories,
  Footer,
} from './styles'
import { BackButton, ImageSlider, Accessory, Button } from 'src/components'
import { StatusBar, Text } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { CarDto } from 'src/dtos/CarDTO'
import { getAccessoryIcon } from 'src/utils/getAccessoryIcon'
interface RouteParams {
  car: CarDto
}

export const CarDetails: React.FC = () => {

  const navigation = useNavigation()

  const route = useRoute()

  const { car } = route.params as RouteParams

  const handleSchedule = () => {
    navigation.navigate('Scheduling', {
      car
    })
  }

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
          <ImageSlider imagesUrl={car.photos} />
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

          <About>
            {car.about}
          </About>
        </Content>
        <Footer>
          <Button title='Escolher período do aluguel' onPress={handleSchedule} />
        </Footer>
      </Container>
    </>
  )
}
