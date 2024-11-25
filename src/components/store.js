import { configureStore, createSlice } from "@reduxjs/toolkit";

// Создаем slice для управления темой
const themeSlice = createSlice({
  name: "theme",
  initialState: "light", // Начальная тема
  reducers: {
    toggleTheme: (state) => (state === "light" ? "dark" : "light"),
  },
});

// Экспортируем действия и редьюсер
export const { toggleTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;

// Создаем store
const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

export default store;
