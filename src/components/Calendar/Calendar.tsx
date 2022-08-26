import React from 'react'
import { Feather } from '@expo/vector-icons'
import { useTheme } from 'styled-components'
import { Calendar as CustomCalendar, LocaleConfig, CalendarProps } from 'react-native-calendars'
import { ptBr } from './localeConfig'

LocaleConfig.locales['pt-br'] = ptBr

LocaleConfig.defaultLocale = 'pt-br'

export interface MarkedDateProps {
  [date: string]: {
    color: string
    textColor: string
    disabled?: boolean
    disableTouchEvent?: boolean
  }
}

export interface DayProps {
  dateString: string
  day: number
  month: number
  year: number
  timestamp: number
}

export const Calendar = ({ markedDates, onDayPress }: CalendarProps) => {

  const { colors, fonts } = useTheme()

  return (
    <CustomCalendar 
      renderArrow={(direction) => (
        <Feather 
          size={24}
          color={colors.text}
          name={direction === 'left' ? 'chevron-left' : 'chevron-right'}
        />
      )}
      headerStyle={{
        backgroundColor: colors.background_secondary,
        borderBottomWidth: 0.5,
        borderBottomColor: colors.text_detail,
        paddingBottom: 10,
        marginBottom: 10
      }}
      theme={{
        textDayFontFamily: fonts.primary_400,
        textDayHeaderFontFamily: fonts.primary_500,
        textDayHeaderFontSize: 10,
        textMonthFontSize: 20,
        monthTextColor: colors.title,
        textMonthFontFamily: fonts.secondary_600,
        arrowStyle: {
          marginHorizontal: -15
        }
      }}
      firstDay={1}
      minDate={new Date().toISOString()}
      markingType='period'
      markedDates={markedDates}
      onDayPress={onDayPress}
    />
  )
}
