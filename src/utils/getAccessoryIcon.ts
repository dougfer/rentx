import SpeedSvg from 'src/assets/speed.svg'
import Acceleration from 'src/assets/acceleration.svg'
import Force from 'src/assets/force.svg'
import Gasoline from 'src/assets/gasoline.svg'
import Exchange from 'src/assets/exchange.svg'
import People from 'src/assets/people.svg'
import Energy from 'src/assets/energy.svg'
import Hybrid from 'src/assets/hybrid.svg'
import Car from 'src/assets/car.svg'

export const getAccessoryIcon = (type: string) => {
  switch(type) {
    case 'speed': 
      return SpeedSvg
    case 'acceleration':
      return Acceleration
    case 'turning_diameter': 
      return Force
    case 'gasoline_motor':
      return Gasoline
    case 'exchange':
      return Exchange
    case 'seats':
      return People
    case 'electric_motor':
      return Energy
    case 'hybrid_motor': 
      return Hybrid
    default:
      return Car
  }
}
