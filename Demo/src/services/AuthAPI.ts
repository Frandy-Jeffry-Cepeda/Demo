import api from "../lib/axios";
import { authSchema, DraftUserAuth, UserAuth } from "../types";
import { generateId } from "../utils/counter";

export async function createAccount(formData: DraftUserAuth ) {
    try {
        const url = '/users'
        const generatedId = generateId();
        const userAuthData: UserAuth = {
            Id: generatedId,
            ...formData,
          };
        const { data } = await api.post(url, userAuthData)
        const response = authSchema.safeParse(data)
        if(response.success){
            return response.data
        }
    } catch (error) {
        console.log(error)
    }
}