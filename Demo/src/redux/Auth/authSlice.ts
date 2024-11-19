import { createSlice } from "@reduxjs/toolkit";

export type User = {
    FirstName: string,
    LastName: string,
    CompanyName: string,
    Location: string,
    Email: string,
    Password: string,
    PasswordConfirm: string
}

const initialState = {
    users: [],
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {}
})

