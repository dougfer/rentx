import React, { ReactNode } from 'react'
import { 
  Container,
  Details,
  Name,
  About,
  Brand,
  Rent,
  Period,
  Price,
  Type,
  CardImage,
} from './styles'
import { RectButtonProps } from 'react-native-gesture-handler'
import { CarDto } from 'src/dtos/CarDTO'
import { getAccessoryIcon } from 'src/utils/getAccessoryIcon'

interface CarProps extends RectButtonProps {
  data: CarDto
  children?: ReactNode
}

export const Car: React.FC<CarProps> = ({ data, ...rest }) => {
  
  const {  brand, name, rent, thumbnail, fuel_type  } = data
  const MotorIcon = getAccessoryIcon(fuel_type)

  return (
    <Container {...rest}>
      <Details>
        <Brand>{brand}</Brand>
        <Name>{name}</Name>
        <About>
          <Rent>
            <Period>{rent.period}</Period>
            <Price>R${rent.price}</Price>
          </Rent>
          <Type>
            <MotorIcon />
          </Type>
        </About>
      </Details>

      <CardImage resizeMode='contain' source={{ uri: thumbnail }} />
    </Container>
  )
}
