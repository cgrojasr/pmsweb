export interface UsuarioLogin{
    usuario: string,
    password: string
}

export interface UsuarioResetPassword{
    usuario: string,
    oldPassword: string,
    newPassword: string
}