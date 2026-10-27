import { createSlice } from "@reduxjs/toolkit";


interface user {
    userData: [],
    accessToken: string,

}

const initialState: user = {
    userData: [],
    accessToken: ''
}


const userSclice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        setUser: (state, action) => {
            state.userData = action.payload
        },
        setAccessToken: (state, action) => {
            state.accessToken = action.payload
        }
    }
})


export const { setUser, setAccessToken } = userSclice.actions

export default userSclice.reducer
