import { OptionInfo } from './option-info.interface'

export interface UserInfo{
    data:{
        name:string,
        companyName:string,
        phoneNumber:string,
        industries?: OptionInfo[],
        specialities?: OptionInfo[], 
    }
}