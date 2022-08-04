import React from 'react'
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

interface Data {
  brand: string
  name: string
  thumbnail: string
  rent: {
    period: string
    price: number
  }
}

interface CarProps {
  data: Data
}

export const Car: React.FC<CarProps> = ({data: { brand, name, rent, thumbnail }}) => {
 return (
   <Container>
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
