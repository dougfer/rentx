import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import { FlatList, FlatListProps } from 'react-native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background_primary};
`
export const Header = styled.View`
  background-color: ${({theme}) => theme.colors.header};
  width: 100%;
  height: 113px;
  justify-content: flex-end;
  padding: 32px 24px;
`

export const TotalCars = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({theme}) => theme.fonts.primary_400};
  color: ${({theme}) => theme.colors.text};
`

export const HeaderContent = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`

export const CarList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 24
  },
  showVerticalScrollIndicator: false,
})`
  
`