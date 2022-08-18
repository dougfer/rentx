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
import GasolineSvg from 'src/assets/gasoline.svg'
import { RectButtonProps } from 'react-native-gesture-handler'

interface Data {
  brand: string
  name: string
  thumbnail: string
  rent: {
    period: string
    price: number
  }
}

interface CarProps extends RectButtonProps {
  data: Data
  children?: ReactNode
}

export const Car: React.FC<CarProps> = ({data, children, ...rest}) => {

  const {  brand, name, rent, thumbnail  } = data

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
            <GasolineSvg />
          </Type>
        </About>
      </Details>

      <CardImage resizeMode='contain' source={{uri: thumbnail}} />
    </Container>
  )
}
