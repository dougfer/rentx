import React from 'react'
import { Container, Header, TotalCars, HeaderContent, CarList } from './styles'
import { StatusBar } from 'react-native'
import Logo from 'src/assets/logo.svg'
import { RFValue } from 'react-native-responsive-fontsize'
import { Car } from 'src/components'
import { useNavigation } from '@react-navigation/native'

export const Home: React.FC = () => {

  const navigation = useNavigation()

  const carData = {
    thumbnail: 'http://1.bp.blogspot.com/-NVsSLLnT-3Y/UGWaqEiU-lI/AAAAAAAAAKw/4e3nGCqFIxc/s1600/png_carro1.png',
    name: 'Nome do Carrro',
    brand: 'Audi',
    rent: {
      period: 'ao dia',
      price: 150
    }
  }

  const handleCarDetails = () => {
    console.log('oioioi')
    navigation.navigate('CarDetails')
  }

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
        <CarList 
          data={[1,2,3,4,5,6,7]}
          renderItem={({ item }) => <Car data={carData} onPress={handleCarDetails} />}
          keyExtractor={item => String(item)}
        />
      </Container>
    </>
  )
}

