export interface UserCredentials{
    email:string,
    password:string,
    isConfirm?:boolean,
    confirmationCode?:string,
    id?:number,
}