import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    token: null,
    isAuthenticated: false,
    firstName: '',
    lastName: '',
    userName: '',
}

const userSlice = createSlice({
    name: 'user',

    initialState,
    reducers: {
        login: (state, action) => {
            state.token = action.payload.token
            state.isAuthenticated = true
        },
        setProfile: (state, action) => {
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
            state.userName = action.payload.userName
        },

        logout: (state) => {
            localStorage.removeItem("token");
            state.token = null
            state.isAuthenticated = false
            state.firstName = ''
            state.lastName = ''
            state.userName = ''
        },
        hydrateUser:(state) =>{
            const token = localStorage.getItem('token')
            if (token){
                state.token = token;
                state.isAuthenticated = true
            }
        },
    },

})
export const fetchProfile = () => async (dispatch, getState) => {

    const token = getState().user.token;
    if (!token) return;
    const profileResponse = await fetch(
        'http://localhost:3001/api/v1/user/profile',
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        }
    )

    const profileData = await profileResponse.json()

    // stockage du profil dans le setProfil de userSlice
    dispatch(setProfile(profileData.body))
};

export const changeUsername = (userName) =>async (dispatch, getState) => {
    const token = getState().user.token;
    if(!token) return;

    try {
        const response = await fetch(
            'http://localhost:3001/api/v1/user/profile',
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    userName
                }),
            }
        )
        const data = await response.json();

        dispatch(setProfile(data.body));

    } catch (error) {
        console.log('Erreur login :', error)
    }
}


export const { login, logout, setProfile ,hydrateUser} = userSlice.actions
export default userSlice.reducer