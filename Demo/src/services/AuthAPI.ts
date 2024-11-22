import api from "../lib/axios";

import { AuthLogin, draftAuthSchema, DraftUserAuth } from "../types";

export async function createAccount(formData: DraftUserAuth ) {
    try {
        const { data } = await api.post('/users', formData)
        const response = draftAuthSchema.safeParse(data)
        if(response.success){
            return response.data
        }
    } catch (error) {
        console.log(error)
    }
}

export async function login(formData: AuthLogin) {
    try {
        const { Email, Password } = formData;
        const { data } = await api.get(`/users?Email=${Email}`);
        if (data.length === 0) {
            console.error('Usuario no encontrado');
            return null; 
        }

        const user = data[0]; 

        if (user.Password === Password) {
            const { Password, PasswordConfirm, CheckBox, ...userData } = user; 
            return userData; 
        } else {
            console.error('Contraseña incorrecta');
            return null; 
        }
    } catch (error) {
        console.log(error)
    }
}