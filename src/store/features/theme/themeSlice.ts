import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../AppStore'

interface ThemeState{
  value:string
}

const initialState:ThemeState = {
  value:"light"
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state, action:PayloadAction<{theme:string}>) => {
      state.value = action.payload.theme
    },
  },
})

export default themeSlice.reducer
export const selectCount = (state: RootState) => state.theme.value
export const { changeTheme } = themeSlice.actions