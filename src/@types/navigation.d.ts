import { CarDto } from 'src/dtos/CarDTO'
import { ConfirmationProps } from 'src/types/navigation'
import { UserInfo } from 'src/types/user'

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined
      CarDetails: { car: CarDto }
      Scheduling: { car: CarDto }
      Confirmation: ConfirmationProps
      SchedulingDetails: { car: CarDto, dates: string[] }
      MyCars: undefined
      Splash: undefined
      SignIn: undefined
      SignUp: undefined
      SignUpSecondStep: UserInfo
    }
  }
}