import React from 'react'
import { useTheme } from 'styled-components'
import { ActivityIndicator } from 'react-native'

export const Load: React.FC = () => {

  const { colors } = useTheme()

  return (
    <ActivityIndicator color={colors.main} size='large' style={{ flex: 1 }} />
  )
}
