import styled, { css } from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { TextInputProps, TextInput } from 'react-native'

interface InputTextProps extends TextInputProps {
  isFocused: boolean
} 

export const Container = styled.View`
  flex-direction: row;
  margin-bottom: 8px;
  box-sizing: border-box;
`

export const Separator = styled.View<{isFocused: boolean}>`
  width: 2px;
  background-color: ${({ theme }) => theme.colors.background_primary};
  border-bottom-width: 2px;
  border-bottom-color: ${({ theme, isFocused }) => isFocused ? theme.colors.main : theme.colors.background_primary};
`

export const IconContainer = styled.View<{isFocused: boolean}>`
  background-color: ${({ theme }) => theme.colors.background_secondary};
  height: 56px;
  width: 55px;
  justify-content: center;
  align-items: center;
  border-bottom-width: 2px;
  border-bottom-color: ${({ theme }) => theme.colors.background_secondary};
  ${({ theme, isFocused }) => isFocused && css`
    border-bottom-width: 2px;
    border-bottom-color: ${theme.colors.main};
  `}
`

export const InputText = styled(TextInput)<InputTextProps>`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_secondary};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(15)}px;
  padding: 0 23px;
  ${({ theme, isFocused }) => isFocused && css`
    /* margin-bottom: 6px; */
    border-bottom-width: 2px;
    border-bottom-color: ${theme.colors.main};
  `}
`
