import { createSlice } from '@reduxjs/toolkit';
import quotesData from './quotesData.js';

const quoteSlice = createSlice({
    name: 'quotes',
    initialState: {
        quotes: quotesData,
        currentQuote: null,
        nextQuote: null,
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
        nextColor: null
    },
    reducers: {
        setRandomQuote: (state) => {
            const keys = Object.keys(state.quotes);
            const randomKey = keys[Math.floor(Math.random() * keys.length)];

            state.nextQuote = state.quotes[randomKey];
            
            if (state.nextQuote === state.currentQuote) {
                while (state.nextQuote === state.currentQuote) {
                    state.nextQuote = state.quotes[randomKey];
                }
            }

            state.currentQuote = state.nextQuote;
        },
        setRandomColor: (state) => {
            const keys = Object.keys(state.color);
            const randomKey = keys[Math.floor(Math.random() * keys.length)];
            state.nextColor = state.color[randomKey];

            if (state.nextColor === state.currentColor){
                state.nextColor = state.color[randomKey];
            }
            
            state.currentColor = state.nextColor;
        }
    }
});

export const { setRandomQuote, setRandomColor } = quoteSlice.actions;
export default quoteSlice.reducer;