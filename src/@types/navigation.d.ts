import { CarDto } from 'src/dtos/CarDTO'

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined
      CarDetails: { car: CarDto }
      Scheduling: { car: CarDto }
      SchedulingComplete: undefined
      SchedulingDetails: { car: CarDto, dates: string[] }
    }
  }
}