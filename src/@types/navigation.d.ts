import { CarDto } from 'src/dtos/CarDTO'

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined
      CarDetails: { car: CarDto }
      Scheduling: undefined
      SchedulingComplete: undefined
      SchedulingDetails: undefined
    }
  }
}