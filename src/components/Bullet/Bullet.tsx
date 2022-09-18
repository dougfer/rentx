import React from 'react'
import { Container } from './styles'

interface BulletProps {
  active?: boolean
}

export const Bullet: React.FC<BulletProps> = ({ active }) => {
  return (
    <Container active={active} />
  )
}
