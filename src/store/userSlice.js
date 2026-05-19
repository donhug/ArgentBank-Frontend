import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    token: null,
    isAuthenticated: false,
    firstName: '',
    lastName: '',
    username: '',
}

const userSlice = createSlice({
    name: 'user',

    initialState,
    reducers: {
        login: (state, action) => {
            state.token = action.payload
            state.isAuthenticated = true
        },
        setProfile: (state, action) => {
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
            state.username = action.payload.username
        },

        logout: (state) => {
            state.token = null
            state.isAuthenticated = false
            state.firstName = ''
            state.lastName = ''
            state.username = ''
        },
    },
})

export const { login, logout, setProfile } = userSlice.actions

export default userSlice.reducer