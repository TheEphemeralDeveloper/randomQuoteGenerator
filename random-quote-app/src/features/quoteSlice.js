import { createSlice } from '@reduxjs/toolkit';
import quotesData from './quotesData.js';

console.log('quotesData', quotesData)

const quoteSlice = createSlice({
    name: 'quotes',
    initialState: {
        quotes: quotesData,
        currentQuote: null,
        color: {
            0: 'success',
            1: 'primary',
            2: 'secondary',
            3: 'warning',
            4: 'danger',
            5: 'info',
            6: 'light',
            7: 'dark'
        },
        currentColor: 'success',
        nextColor: 'success'
    },
    reducers: {
        setRandomQuote: (state) => {
            const keys = Object.keys(state.quotes);
            const randomKey = keys[Math.floor(Math.random() * keys.length)];
            state.currentQuote = state.quotes[randomKey];
        },
        setRandomColor: (state) => {
            const keys = Object.keys(state.color);
            const randomKey = keys[Math.floor(Math.random() * keys.length)];
            state.currentColor = state.nextColor;
            state.nextColor = state.color[randomKey];
        }
    }
});

export const { setRandomQuote, setRandomColor } = quoteSlice.actions;
export default quoteSlice.reducer;