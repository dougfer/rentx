import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import { TextInputProps, TextInput } from 'react-native'

export const Container = styled.View`
  flex-direction: row;
  margin-bottom: 8px;
`

export const IconContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.background_secondary};
  height: 56px;
  width: 55px;
  justify-content: center;
  align-items: center;
  margin-right: 2px;
`

export const InputText = styled(TextInput)<TextInputProps>`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_secondary};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(15)}px;
  padding: 0 23px;
`
