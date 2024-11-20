
export type userAuth = {
    FirstName: string,
    LastName: string,
    CompanyName: string,
    Location: string,
    Email: string,
    Password: string,
    PasswordConfirm: string
    CheckBox: boolean
}

export type AuthRegister = userAuth;
export type AuthLogin = Pick<userAuth, 'Email' | 'Password'>