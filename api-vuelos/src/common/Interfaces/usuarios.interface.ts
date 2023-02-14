export interface IUsuarios extends Document{
    nombre: string;
    usuario: string;
    email: string;
    password: string;
}